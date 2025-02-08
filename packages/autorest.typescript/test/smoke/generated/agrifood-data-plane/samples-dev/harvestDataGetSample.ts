// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAzureAgriFoodPlatformDataPlaneServiceClient from "@msinternal/agrifood-data-plane";
import { AzureKeyCredential } from "@azure/core-auth";
import "dotenv/config";

/**
 * This sample demonstrates how to Get a specified harvest data resource under a particular farmer.
 *
 * @summary Get a specified harvest data resource under a particular farmer.
 * x-ms-original-file: specification/agrifood/data-plane/Microsoft.AgFoodPlatform/preview/2021-03-31-preview/examples/HarvestData_Get.json
 */
async function harvestDataGet(): Promise<void> {
  const endpoint = "{Endpoint}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAzureAgriFoodPlatformDataPlaneServiceClient(
    endpoint,
    credential,
  );
  const farmerId = "FARMER123";
  const harvestDataId = "HARVESTOP123";
  const result = await client
    .path(
      "/farmers/{farmerId}/harvest-data/{harvestDataId}",
      farmerId,
      harvestDataId,
    )
    .get();
  console.log(result);
}

async function main(): Promise<void> {
  await harvestDataGet();
}

main().catch(console.error);
