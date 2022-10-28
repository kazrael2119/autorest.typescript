/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RestorableDroppedManagedDatabases } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  RestorableDroppedManagedDatabase,
  RestorableDroppedManagedDatabasesListByInstanceNextOptionalParams,
  RestorableDroppedManagedDatabasesListByInstanceOptionalParams,
  RestorableDroppedManagedDatabasesListByInstanceResponse,
  RestorableDroppedManagedDatabasesGetOptionalParams,
  RestorableDroppedManagedDatabasesGetResponse,
  RestorableDroppedManagedDatabasesListByInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RestorableDroppedManagedDatabases operations. */
export class RestorableDroppedManagedDatabasesImpl
  implements RestorableDroppedManagedDatabases {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class RestorableDroppedManagedDatabases class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of restorable dropped managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<RestorableDroppedManagedDatabase> {
    const iter = this.listByInstancePagingAll(
      resourceGroupName,
      managedInstanceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<RestorableDroppedManagedDatabase[]> {
    let result: RestorableDroppedManagedDatabasesListByInstanceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByInstance(
        resourceGroupName,
        managedInstanceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams
  ): AsyncIterableIterator<RestorableDroppedManagedDatabase> {
    for await (const page of this.listByInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of restorable dropped managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceOptionalParams
  ): Promise<RestorableDroppedManagedDatabasesListByInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByInstanceOperationSpec
    );
  }

  /**
   * Gets a restorable dropped managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    restorableDroppedDatabaseId: string,
    options?: RestorableDroppedManagedDatabasesGetOptionalParams
  ): Promise<RestorableDroppedManagedDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByInstance method.
   * @param options The options parameters.
   */
  private _listByInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: RestorableDroppedManagedDatabasesListByInstanceNextOptionalParams
  ): Promise<RestorableDroppedManagedDatabasesListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabase
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabaseListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
