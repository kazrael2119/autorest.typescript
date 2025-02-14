// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to starts the database instance of the SAP system.
 *
 * @summary starts the database instance of the SAP system.
 * x-ms-original-file: 2024-09-01/SapDatabaseInstances_StartInstance.json
 */
async function startTheDatabaseInstanceOfTheSapSystem(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.SAPDatabaseInstances_start(
    "test-rg",
    "X00",
    "db0",
    {},
  );
  console.log(result);
}

/**
 * This sample demonstrates how to starts the database instance of the SAP system.
 *
 * @summary starts the database instance of the SAP system.
 * x-ms-original-file: 2024-09-01/SapDatabaseInstances_StartInstanceVM.json
 */
async function startVirtualMachineAndTheDatabaseInstanceOfTheSapSystemOnIt(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.SAPDatabaseInstances_start(
    "test-rg",
    "X00",
    "db0",
    { startVm: true },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await startTheDatabaseInstanceOfTheSapSystem();
  startVirtualMachineAndTheDatabaseInstanceOfTheSapSystemOnIt();
}

main().catch(console.error);
