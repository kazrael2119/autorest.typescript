// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the SAP Database Instance resource.
 *
 * @summary gets the SAP Database Instance resource.
 * x-ms-original-file: 2024-09-01/SapDatabaseInstances_Get.json
 */
async function sAPDatabaseInstancesGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.SAPDatabaseInstances_get(
    "test-rg",
    "X00",
    "databaseServer",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await sAPDatabaseInstancesGet();
}

main().catch(console.error);
