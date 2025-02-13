// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to stops the SAP Application, that is the Application server instances and Central Services instance.
 *
 * @summary stops the SAP Application, that is the Application server instances and Central Services instance.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_SoftStop.json
 */
async function softStopOfSapVirtualInstancesStop(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.SAPVirtualInstances_stop(
    "test-rg",
    "X00",
    { body: { softStopTimeoutSeconds: 300 } },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to stops the SAP Application, that is the Application server instances and Central Services instance.
 *
 * @summary stops the SAP Application, that is the Application server instances and Central Services instance.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_SoftStopVMAndSystem.json
 */
async function softStopTheVirtualMachineSAndTheSapSystemOnIt(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.SAPVirtualInstances_stop(
    "test-rg",
    "X00",
    { body: { deallocateVm: true, softStopTimeoutSeconds: 300 } },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to stops the SAP Application, that is the Application server instances and Central Services instance.
 *
 * @summary stops the SAP Application, that is the Application server instances and Central Services instance.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_Stop.json
 */
async function sAPVirtualInstancesStop(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.SAPVirtualInstances_stop(
    "test-rg",
    "X00",
    { body: { softStopTimeoutSeconds: 0 } },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to stops the SAP Application, that is the Application server instances and Central Services instance.
 *
 * @summary stops the SAP Application, that is the Application server instances and Central Services instance.
 * x-ms-original-file: 2024-09-01/SapVirtualInstances_StopVMAndSystem.json
 */
async function stopTheVirtualMachineSAndTheSapSystemOnIt(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "8e17e36c-42e9-4cd5-a078-7b44883414e0";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPVirtualInstances.SAPVirtualInstances_stop(
    "test-rg",
    "X00",
    { body: { deallocateVm: true, softStopTimeoutSeconds: 0 } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await softStopOfSapVirtualInstancesStop();
  softStopTheVirtualMachineSAndTheSapSystemOnIt();
  sAPVirtualInstancesStop();
  stopTheVirtualMachineSAndTheSapSystemOnIt();
}

main().catch(console.error);
