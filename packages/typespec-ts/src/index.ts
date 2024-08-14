// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as fsextra from "fs-extra";

import {
  AzureCoreDependencies,
  AzurePollingDependencies
} from "./modular/external-dependencies.js";
import { EmitContext, Program } from "@typespec/compiler";
import { GenerationDirDetail, SdkContext } from "./utils/interfaces.js";
import {
  PagingHelpers,
  PollingHelpers,
  SerializationHelpers
} from "./modular/static-helpers-metadata.js";
import {
  RLCModel,
  RLCOptions,
  buildApiExtractorConfig,
  buildClient,
  buildClientDefinitions,
  buildEsLintConfig,
  buildIndexFile,
  buildIsUnexpectedHelper,
  buildLicenseFile,
  buildLogger,
  buildPackageFile,
  buildParameterTypes,
  buildPollingHelper,
  buildPaginateHelper as buildRLCPaginateHelper,
  buildReadmeFile,
  buildRecordedClientFile,
  buildResponseTypes,
  buildRollupConfig,
  buildSampleTest,
  buildSamples,
  buildSerializeHelper,
  buildTopLevelIndex,
  buildTsConfig,
  buildTsTestBrowserConfig,
  buildVitestConfig,
  getClientName,
  hasUnexpectedHelper
} from "@azure-tools/rlc-common";
import { buildApiOptions, buildModels } from "./modular/emitModels.js";
import {
  buildRootIndex,
  buildSubClientIndexFile
} from "./modular/buildRootIndex.js";
import { emitContentByBuilder, emitModels } from "./utils/emitUtil.js";
import { provideContext, useContext } from "./contextManager.js";

import { EmitterOptions } from "./lib.js";
import { ModularCodeModel } from "./modular/modularCodeModel.js";
import { Project } from "ts-morph";
import { buildClassicOperationFiles } from "./modular/buildClassicalOperationGroups.js";
import { buildClassicalClient } from "./modular/buildClassicalClient.js";
import { buildClientContext } from "./modular/buildClientContext.js";
import { buildOperationFiles } from "./modular/buildOperations.js";
import { buildRestorePoller } from "./modular/buildRestorePoller.js";
import { buildSerializeUtils } from "./modular/buildSerializeUtils.js";
import { buildSubpathIndexFile } from "./modular/buildSubpathIndex.js";
import { createSdkContext } from "@azure-tools/typespec-client-generator-core";
import { emitCodeModel } from "./modular/buildCodeModel.js";
import { emitLoggerFile } from "./modular/emitLoggerFile.js";
import { emitSerializerHelpersFile } from "./modular/buildHelperSerializers.js";
import { env } from "process";
import { existsSync } from "fs";
import { getModuleExports } from "./modular/buildProjectFiles.js";
import { getRLCClients } from "./utils/clientUtils.js";
import { join } from "path";
import { loadStaticHelpers } from "./framework/load-static-helpers.js";
import { provideBinder } from "./framework/hooks/binder.js";
import { provideSdkTypes } from "./framework/hooks/sdkTypes.js";
import { transformRLCModel } from "./transform/transform.js";
import { transformRLCOptions } from "./transform/transfromRLCOptions.js";

export * from "./lib.js";

export async function $onEmit(context: EmitContext) {
  /** Shared status */
  const outputProject = new Project();
  const program: Program = context.program;
  const emitterOptions: EmitterOptions = context.options;
  const dpgContext = await createContextWithDefaultOptions(context);
  const rlcOptions: RLCOptions = transformRLCOptions(
    emitterOptions,
    dpgContext
  );

  const needUnexpectedHelper: Map<string, boolean> = new Map<string, boolean>();
  const serviceNameToRlcModelsMap: Map<string, RLCModel> = new Map<
    string,
    RLCModel
  >();
  provideContext("rlcMetaTree", new Map());
  provideContext("symbolMap", new Map());
  provideContext("modularMetaTree", new Map());
  provideContext("outputProject", outputProject);
  provideContext("emitContext", {
    compilerContext: context,
    tcgcContext: dpgContext
  });
  provideSdkTypes(dpgContext.sdkPackage);
  const { modularSourcesDir } = await calculateGenerationDir();
  const staticHelpers = await loadStaticHelpers(
    outputProject,
    {
      ...SerializationHelpers,
      ...PagingHelpers,
      ...PollingHelpers
    },
    { sourcesDir: modularSourcesDir }
  );
  const extraDependencies =
    rlcOptions?.flavor === "azure"
      ? { ...AzurePollingDependencies, ...AzureCoreDependencies }
      : {};
  const binder = provideBinder(outputProject, {
    staticHelpers,
    dependencies: {
      ...extraDependencies
    }
  });

  const rlcCodeModels: RLCModel[] = [];
  let modularCodeModel: ModularCodeModel;
  // 1. Enrich the dpg context with path detail and common options
  await enrichDpgContext();
  // 2. Clear sources folder
  await clearSrcFolder();
  // 3. Generate RLC code model
  // TODO: skip this step in modular once modular generator is sufficiently decoupled
  await buildRLCCodeModels();

  // 4. Generate sources
  if (emitterOptions.isModularLibrary) {
    await generateModularSources();
  } else {
    await generateRLCSources();
  }

  // 5. Generate metadata and test files
  await generateMetadataAndTest();

  async function enrichDpgContext() {
    const generationPathDetail: GenerationDirDetail =
      await calculateGenerationDir();
    dpgContext.generationPathDetail = generationPathDetail;
    const hasTestFolder = await fsextra.pathExists(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "test")
    );
    rlcOptions.generateTest =
      rlcOptions.generateTest === true ||
      (rlcOptions.generateTest === undefined &&
        !hasTestFolder &&
        rlcOptions.flavor === "azure");
    dpgContext.rlcOptions = rlcOptions;
  }

  async function calculateGenerationDir(): Promise<GenerationDirDetail> {
    const projectRoot = context.emitterOutputDir ?? "";
    let sourcesRoot = join(projectRoot, "src");
    const customizationFolder = join(projectRoot, "sources");
    if (await fsextra.pathExists(customizationFolder)) {
      sourcesRoot = join(customizationFolder, "generated", "src");
    }
    return {
      rootDir: projectRoot,
      metadataDir: projectRoot,
      rlcSourcesDir: join(
        sourcesRoot,
        emitterOptions.isModularLibrary ? "rest" : "" // When generating modular library, RLC has to go under rest folder
      ),
      modularSourcesDir: emitterOptions.isModularLibrary
        ? sourcesRoot
        : undefined
    };
  }

  async function clearSrcFolder() {
    await fsextra.emptyDir(
      dpgContext.generationPathDetail?.modularSourcesDir ??
        dpgContext.generationPathDetail?.rlcSourcesDir ??
        ""
    );
  }

  async function buildRLCCodeModels() {
    const clients = getRLCClients(dpgContext);
    for (const client of clients) {
      const rlcModels = await transformRLCModel(client, dpgContext);
      rlcCodeModels.push(rlcModels);
      serviceNameToRlcModelsMap.set(client.service.name, rlcModels);
      needUnexpectedHelper.set(
        getClientName(rlcModels),
        hasUnexpectedHelper(rlcModels)
      );
    }
  }

  async function generateRLCSources() {
    for (const rlcModels of rlcCodeModels) {
      await emitModels(rlcModels, program);
      await emitContentByBuilder(program, buildClientDefinitions, rlcModels);
      await emitContentByBuilder(program, buildResponseTypes, rlcModels);
      await emitContentByBuilder(program, buildClient, rlcModels);
      await emitContentByBuilder(program, buildParameterTypes, rlcModels);
      await emitContentByBuilder(program, buildIsUnexpectedHelper, rlcModels);
      await emitContentByBuilder(program, buildIndexFile, rlcModels);
      await emitContentByBuilder(program, buildLogger, rlcModels);
      await emitContentByBuilder(program, buildTopLevelIndex, rlcModels);
      await emitContentByBuilder(program, buildRLCPaginateHelper, rlcModels);
      await emitContentByBuilder(program, buildPollingHelper, rlcModels);
      await emitContentByBuilder(program, buildSerializeHelper, rlcModels);
      await emitContentByBuilder(
        program,
        buildSamples,
        rlcModels,
        dpgContext.generationPathDetail?.metadataDir
      );
    }
  }

  async function generateModularSources() {
    const modularSourcesRoot =
      dpgContext.generationPathDetail?.modularSourcesDir ?? "src";
    const project = useContext("outputProject");
    emitSerializerHelpersFile(project, modularSourcesRoot);
    modularCodeModel = emitCodeModel(
      dpgContext,
      serviceNameToRlcModelsMap,
      modularSourcesRoot,
      project,
      {
        casing: "camel"
      }
    );

    emitLoggerFile(modularCodeModel, project, modularSourcesRoot);

    const rootIndexFile = project.createSourceFile(
      `${modularSourcesRoot}/index.ts`,
      "",
      {
        overwrite: true
      }
    );

    const isMultiClients = modularCodeModel.clients.length > 1;

    buildModels(modularCodeModel);
    buildSubpathIndexFile(modularCodeModel, "models");
    for (const subClient of modularCodeModel.clients) {
      buildApiOptions(subClient, modularCodeModel);
      if (!env["EXPERIMENTAL_TYPESPEC_TS_SERIALIZATION"])
        buildSerializeUtils(modularCodeModel);
      // build operation files
      buildOperationFiles(subClient, dpgContext, modularCodeModel);
      buildClientContext(subClient, dpgContext, modularCodeModel);

      buildRestorePoller(modularCodeModel, subClient);
      if (dpgContext.rlcOptions?.hierarchyClient) {
        buildSubpathIndexFile(modularCodeModel, "api", subClient);
      } else {
        buildSubpathIndexFile(modularCodeModel, "api", subClient, {
          exportIndex: true
        });
      }

      buildClassicalClient(subClient, dpgContext, modularCodeModel);
      buildClassicOperationFiles(dpgContext, modularCodeModel, subClient);
      buildSubpathIndexFile(modularCodeModel, "classic", subClient, {
        exportIndex: true,
        interfaceOnly: true
      });
      if (isMultiClients) {
        buildSubClientIndexFile(subClient, modularCodeModel);
      }
      buildRootIndex(subClient, modularCodeModel, rootIndexFile);
    }

    binder.resolveAllReferences();

    for (const file of project.getSourceFiles()) {
      file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
      file.fixUnusedIdentifiers();
      await emitContentByBuilder(
        program,
        () => ({ content: file.getFullText(), path: file.getFilePath() }),
        modularCodeModel as any
      );
    }
  }

  async function generateMetadataAndTest() {
    if (rlcCodeModels.length === 0 || !rlcCodeModels[0]) {
      return;
    }
    const rlcClient: RLCModel = rlcCodeModels[0];
    const option = dpgContext.rlcOptions!;
    const isAzureFlavor = option.flavor === "azure";
    // Generate metadata
    const hasPackageFile = await existsSync(
      join(dpgContext.generationPathDetail?.metadataDir ?? "", "package.json")
    );
    const shouldGenerateMetadata =
      option.generateMetadata === true ||
      (option.generateMetadata === undefined && !hasPackageFile);
    if (shouldGenerateMetadata) {
      const commonBuilders = [
        buildRollupConfig,
        buildApiExtractorConfig,
        buildReadmeFile,
        buildLicenseFile
      ];
      if (option.moduleKind === "esm") {
        commonBuilders.push((model) => buildVitestConfig(model, "node"));
        commonBuilders.push((model) => buildVitestConfig(model, "browser"));
        commonBuilders.push((model) => buildTsTestBrowserConfig(model));
      }
      if (isAzureFlavor) {
        commonBuilders.push(buildEsLintConfig);
      }
      let moduleExports = {};
      if (option.isModularLibrary) {
        moduleExports = getModuleExports(modularCodeModel);
      }
      commonBuilders.push((model) => buildPackageFile(model, moduleExports));
      commonBuilders.push(buildTsConfig);
      // build metadata relevant files
      await emitContentByBuilder(
        program,
        commonBuilders,
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );

      if (option.isModularLibrary) {
        const project = useContext("outputProject");
        for (const file of project.getSourceFiles()) {
          await emitContentByBuilder(
            program,
            () => ({ content: file.getFullText(), path: file.getFilePath() }),
            modularCodeModel as any
          );
        }
      }
    }

    // Generate test relevant files
    if (option.generateTest && isAzureFlavor) {
      await emitContentByBuilder(
        program,
        [buildRecordedClientFile, buildSampleTest],
        rlcClient,
        dpgContext.generationPathDetail?.metadataDir
      );
    }
  }
}

export async function createContextWithDefaultOptions(
  context: EmitContext<Record<string, any>>
): Promise<SdkContext> {
  const tcgcSettings = {
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    "flatten-union-as-enum": false,
    emitters: [
      {
        main: "@azure-tools/typespec-ts",
        metadata: { name: "@azure-tools/typespec-ts" }
      }
    ]
  };
  context.options = {
    ...context.options,
    ...tcgcSettings
  };

  return (await createSdkContext(context)) as SdkContext;
}
