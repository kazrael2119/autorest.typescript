/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { KeyVaultManagementClient } from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the specified private endpoint connection associated with the managed HSM Pool.
 *
 * @summary Gets the specified private endpoint connection associated with the managed HSM Pool.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-06-01-preview/examples/ManagedHsm_getPrivateEndpointConnection.json
 */
async function managedHsmGetPrivateEndpointConnection() {
  const subscriptionId =
    process.env["SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "sample-group";
  const name = "sample-mhsm";
  const privateEndpointConnectionName = "sample-pec";
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.mhsmPrivateEndpointConnections.get(
    resourceGroupName,
    name,
    privateEndpointConnectionName,
  );
  console.log(result);
}

async function main() {
  await managedHsmGetPrivateEndpointConnection();
}

main().catch(console.error);
