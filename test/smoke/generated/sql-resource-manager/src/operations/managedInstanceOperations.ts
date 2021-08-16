/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedInstanceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  ManagedInstanceOperation,
  ManagedInstanceOperationsListByManagedInstanceNextOptionalParams,
  ManagedInstanceOperationsListByManagedInstanceOptionalParams,
  ManagedInstanceOperationsCancelOptionalParams,
  ManagedInstanceOperationsListByManagedInstanceResponse,
  ManagedInstanceOperationsGetOptionalParams,
  ManagedInstanceOperationsGetResponse,
  ManagedInstanceOperationsListByManagedInstanceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedInstanceOperations operations. */
export class ManagedInstanceOperationsImpl
  implements ManagedInstanceOperations {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ManagedInstanceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of operations performed on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  public listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams
  ): PagedAsyncIterableIterator<ManagedInstanceOperation> {
    const iter = this.listByManagedInstancePagingAll(
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
      byPage: () => {
        return this.listByManagedInstancePagingPage(
          resourceGroupName,
          managedInstanceName,
          options
        );
      }
    };
  }

  private async *listByManagedInstancePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams
  ): AsyncIterableIterator<ManagedInstanceOperation[]> {
    let result = await this._listByManagedInstance(
      resourceGroupName,
      managedInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByManagedInstanceNext(
        resourceGroupName,
        managedInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByManagedInstancePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams
  ): AsyncIterableIterator<ManagedInstanceOperation> {
    for await (const page of this.listByManagedInstancePagingPage(
      resourceGroupName,
      managedInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Cancels the asynchronous operation on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    managedInstanceName: string,
    operationId: string,
    options?: ManagedInstanceOperationsCancelOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, operationId, options },
      cancelOperationSpec
    );
  }

  /**
   * Gets a list of operations performed on the managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  private _listByManagedInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: ManagedInstanceOperationsListByManagedInstanceOptionalParams
  ): Promise<ManagedInstanceOperationsListByManagedInstanceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, options },
      listByManagedInstanceOperationSpec
    );
  }

  /**
   * Gets a management operation on a managed instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param operationId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    operationId: string,
    options?: ManagedInstanceOperationsGetOptionalParams
  ): Promise<ManagedInstanceOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, operationId, options },
      getOperationSpec
    );
  }

  /**
   * ListByManagedInstanceNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param nextLink The nextLink from the previous successful call to the ListByManagedInstance method.
   * @param options The options parameters.
   */
  private _listByManagedInstanceNext(
    resourceGroupName: string,
    managedInstanceName: string,
    nextLink: string,
    options?: ManagedInstanceOperationsListByManagedInstanceNextOptionalParams
  ): Promise<ManagedInstanceOperationsListByManagedInstanceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, nextLink, options },
      listByManagedInstanceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations/{operationId}/cancel",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.operationId
  ],
  serializer
};
const listByManagedInstanceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperation
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByManagedInstanceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedInstanceOperationListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
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
