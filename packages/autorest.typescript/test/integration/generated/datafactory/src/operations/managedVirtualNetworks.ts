import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ManagedVirtualNetworks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import {
  ManagedVirtualNetworkResource,
  ManagedVirtualNetworksListByFactoryNextOptionalParams,
  ManagedVirtualNetworksListByFactoryOptionalParams,
  ManagedVirtualNetworksListByFactoryResponse,
  ManagedVirtualNetworksCreateOrUpdateOptionalParams,
  ManagedVirtualNetworksCreateOrUpdateResponse,
  ManagedVirtualNetworksGetOptionalParams,
  ManagedVirtualNetworksGetResponse,
  ManagedVirtualNetworksListByFactoryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedVirtualNetworks operations. */
export class ManagedVirtualNetworksImpl implements ManagedVirtualNetworks {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class ManagedVirtualNetworks class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  public listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<ManagedVirtualNetworkResource> {
    const iter = this.listByFactoryPagingAll(
      resourceGroupName,
      factoryName,
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
        return this.listByFactoryPagingPage(
          resourceGroupName,
          factoryName,
          options
        );
      }
    };
  }

  private async *listByFactoryPagingPage(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams
  ): AsyncIterableIterator<ManagedVirtualNetworkResource[]> {
    let result = await this._listByFactory(
      resourceGroupName,
      factoryName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByFactoryNext(
        resourceGroupName,
        factoryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByFactoryPagingAll(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams
  ): AsyncIterableIterator<ManagedVirtualNetworkResource> {
    for await (const page of this.listByFactoryPagingPage(
      resourceGroupName,
      factoryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists managed Virtual Networks.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  private _listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ManagedVirtualNetworksListByFactoryOptionalParams
  ): Promise<ManagedVirtualNetworksListByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, options },
      listByFactoryOperationSpec
    );
  }

  /**
   * Creates or updates a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param managedVirtualNetwork Managed Virtual Network resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    managedVirtualNetwork: ManagedVirtualNetworkResource,
    options?: ManagedVirtualNetworksCreateOrUpdateOptionalParams
  ): Promise<ManagedVirtualNetworksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        factoryName,
        managedVirtualNetworkName,
        managedVirtualNetwork,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a managed Virtual Network.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param managedVirtualNetworkName Managed virtual network name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    managedVirtualNetworkName: string,
    options?: ManagedVirtualNetworksGetOptionalParams
  ): Promise<ManagedVirtualNetworksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, managedVirtualNetworkName, options },
      getOperationSpec
    );
  }

  /**
   * ListByFactoryNext
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param nextLink The nextLink from the previous successful call to the ListByFactory method.
   * @param options The options parameters.
   */
  private _listByFactoryNext(
    resourceGroupName: string,
    factoryName: string,
    nextLink: string,
    options?: ManagedVirtualNetworksListByFactoryNextOptionalParams
  ): Promise<ManagedVirtualNetworksListByFactoryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, nextLink, options },
      listByFactoryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByFactoryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.managedVirtualNetwork,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/managedVirtualNetworks/{managedVirtualNetworkName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.managedVirtualNetworkName
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const listByFactoryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedVirtualNetworkListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
