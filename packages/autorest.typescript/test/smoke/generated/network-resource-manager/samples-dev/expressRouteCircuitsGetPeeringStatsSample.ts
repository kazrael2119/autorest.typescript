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
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all stats from an express route circuit in a resource group.
 *
 * @summary Gets all stats from an express route circuit in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ExpressRouteCircuitPeeringStats.json
 */
async function getExpressRouteCircuitPeeringTrafficStats() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const circuitName = "circuitName";
  const peeringName = "peeringName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteCircuits.getPeeringStats(
    resourceGroupName,
    circuitName,
    peeringName,
  );
  console.log(result);
}

async function main() {
  await getExpressRouteCircuitPeeringTrafficStats();
}

main().catch(console.error);
