// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to starts the SAP application, that is the Central Services instance and Application server instances.
 *
 * @summary starts the SAP application, that is the Central Services instance and Application server instances.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_Start.json
 */
async function sAPVirtualInstancesStart() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.start("test-rg", "X00", {
    body: { startVm: true },
  });
  console.log(result);
}

async function main() {
  sAPVirtualInstancesStart();
}

main().catch(console.error);
