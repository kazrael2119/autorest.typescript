/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Database } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";
import {
  Metric,
  DatabaseListMetricsOptionalParams,
  Usage,
  DatabaseListUsagesOptionalParams,
  MetricDefinition,
  DatabaseListMetricDefinitionsOptionalParams,
  DatabaseListMetricsResponse,
  DatabaseListUsagesResponse,
  DatabaseListMetricDefinitionsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Database operations. */
export class DatabaseImpl implements Database {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Initialize a new instance of the class Database class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    filter: string,
    options?: DatabaseListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      filter,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMetricsPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    filter: string,
    options?: DatabaseListMetricsOptionalParams
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      accountName,
      databaseRid,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    filter: string,
    options?: DatabaseListMetricsOptionalParams
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the usages (most recent data) for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  public listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListUsagesOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listUsagesPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listUsagesPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          options
        );
      }
    };
  }

  private async *listUsagesPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListUsagesOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listUsages(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    );
    yield result.value || [];
  }

  private async *listUsagesPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListUsagesOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listUsagesPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves metric definitions for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  public listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListMetricDefinitionsOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionsPagingAll(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listMetricDefinitionsPagingPage(
          resourceGroupName,
          accountName,
          databaseRid,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionsPagingPage(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinitions(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionsPagingAll(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListMetricDefinitionsOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionsPagingPage(
      resourceGroupName,
      accountName,
      databaseRid,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    filter: string,
    options?: DatabaseListMetricsOptionalParams
  ): Promise<DatabaseListMetricsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, filter, options },
      listMetricsOperationSpec
    );
  }

  /**
   * Retrieves the usages (most recent data) for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  private _listUsages(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListUsagesOptionalParams
  ): Promise<DatabaseListUsagesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, options },
      listUsagesOperationSpec
    );
  }

  /**
   * Retrieves metric definitions for the given database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param options The options parameters.
   */
  private _listMetricDefinitions(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    options?: DatabaseListMetricDefinitionsOptionalParams
  ): Promise<DatabaseListMetricDefinitionsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, databaseRid, options },
      listMetricDefinitionsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metrics",
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
    Parameters.databaseRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listUsagesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/databases/{databaseRid}/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.databaseRid
  ],
  headerParameters: [Parameters.accept],
  serializer
};
