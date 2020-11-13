/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import { DatabaseAccountRegionListMetricsResponse } from "../models";

/**
 * Class representing a DatabaseAccountRegion.
 */
export class DatabaseAccountRegion {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class DatabaseAccountRegion class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and region.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param region Cosmos DB region, with spaces between words and each word capitalized.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    region: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): Promise<DatabaseAccountRegionListMetricsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      accountName,
      region,
      filter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMetricsOperationSpec
    ) as Promise<DatabaseAccountRegionListMetricsResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/region/{region}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.region
  ],
  headerParameters: [Parameters.accept],
  serializer
};
