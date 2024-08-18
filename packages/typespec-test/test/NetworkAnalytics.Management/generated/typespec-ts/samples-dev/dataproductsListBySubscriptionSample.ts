// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list data products by subscription.
 *
 * @summary list data products by subscription.
 * x-ms-original-file: 2023-11-15/DataProducts_ListBySubscription_MaximumSet_Gen.json
 */
async function dataProductsListBySubscriptionMaximumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataproducts.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list data products by subscription.
 *
 * @summary list data products by subscription.
 * x-ms-original-file: 2023-11-15/DataProducts_ListBySubscription_MinimumSet_Gen.json
 */
async function dataProductsListBySubscriptionMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.dataproducts.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  dataProductsListBySubscriptionMaximumSetGen();
  dataProductsListBySubscriptionMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
