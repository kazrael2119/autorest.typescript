// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "../src/networkAnalyticsClient.js";

async function dataProductsCatalogsGetMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.get("aoiresourceGroupName");
  console.log(result);
}

async function main() {
  dataProductsCatalogsGetMaximumSetGen();
}

main().catch(console.error);

async function dataProductsCatalogsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const result = await client.dataproductscatalogs.get("aoiresourceGroupName");
  console.log(result);
}

async function main() {
  dataProductsCatalogsGetMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
