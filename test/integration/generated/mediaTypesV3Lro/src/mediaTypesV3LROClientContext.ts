/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { MediaTypesV3LROClientOptionalParams } from "./models";
import { lroPolicy } from "./lro";

const packageName = "media-types-v3-lro-client";
const packageVersion = "1.0.0-preview1";

export class MediaTypesV3LROClientContext extends coreHttp.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the MediaTypesV3LROClientContext class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3LROClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    const defaultPipelines = Array.isArray(options.requestPolicyFactories)
      ? options.requestPolicyFactories
      : (coreHttp.createPipelineFromOptions(options)
          .requestPolicyFactories as coreHttp.RequestPolicyFactory[]);

    options = {
      ...options,
      requestPolicyFactories: [lroPolicy(), ...defaultPipelines]
    };

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{$host}";

    // Parameter assignments
    this.$host = $host;
  }
}
