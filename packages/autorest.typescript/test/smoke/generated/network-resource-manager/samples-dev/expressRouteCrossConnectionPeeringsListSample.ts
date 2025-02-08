/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets all peerings in a specified ExpressRouteCrossConnection.
 *
 * @summary Gets all peerings in a specified ExpressRouteCrossConnection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRouteCrossConnectionBgpPeeringList.json
 */
async function expressRouteCrossConnectionBgpPeeringList(): Promise<void> {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["RESOURCE_GROUP"] || "CrossConnection-SiliconValley";
  const crossConnectionName = "<circuitServiceKey>";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.expressRouteCrossConnectionPeerings.list(
    resourceGroupName,
    crossConnectionName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await expressRouteCrossConnectionBgpPeeringList();
}

main().catch(console.error);
