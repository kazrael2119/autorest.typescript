import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DomainServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DomainServicesClient } from "../domainServicesClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DomainService,
  DomainServicesListNextOptionalParams,
  DomainServicesListOptionalParams,
  DomainServicesListByResourceGroupNextOptionalParams,
  DomainServicesListByResourceGroupOptionalParams,
  DomainServicesListResponse,
  DomainServicesListByResourceGroupResponse,
  DomainServicesCreateOrUpdateOptionalParams,
  DomainServicesCreateOrUpdateResponse,
  DomainServicesGetOptionalParams,
  DomainServicesGetResponse,
  DomainServicesDeleteOptionalParams,
  DomainServicesUpdateOptionalParams,
  DomainServicesUpdateResponse,
  DomainServicesListNextResponse,
  DomainServicesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DomainServices operations. */
export class DomainServicesImpl implements DomainServices {
  private readonly client: DomainServicesClient;

  /**
   * Initialize a new instance of the class DomainServices class.
   * @param client Reference to the service client
   */
  constructor(client: DomainServicesClient) {
    this.client = client;
  }

  /**
   * The List Domain Services in Subscription operation lists all the domain services available under the
   * given subscription (and across all resource groups within that subscription).
   * @param options The options parameters.
   */
  public list(
    options?: DomainServicesListOptionalParams
  ): PagedAsyncIterableIterator<DomainService> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: DomainServicesListOptionalParams
  ): AsyncIterableIterator<DomainService[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: DomainServicesListOptionalParams
  ): AsyncIterableIterator<DomainService> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The List Domain Services in Resource Group operation lists all the domain services available under
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DomainServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DomainService> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DomainServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DomainService[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DomainServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DomainService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The List Domain Services in Subscription operation lists all the domain services available under the
   * given subscription (and across all resource groups within that subscription).
   * @param options The options parameters.
   */
  private _list(
    options?: DomainServicesListOptionalParams
  ): Promise<DomainServicesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * The List Domain Services in Resource Group operation lists all the domain services available under
   * the given resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DomainServicesListByResourceGroupOptionalParams
  ): Promise<DomainServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters. If
   * the specific service already exists, then any patchable properties will be updated and any immutable
   * properties will remain unchanged.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainServicesCreateOrUpdateResponse>,
      DomainServicesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainServicesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, domainServiceName, domainService, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The Create Domain Service operation creates a new domain service with the specified parameters. If
   * the specific service already exists, then any patchable properties will be updated and any immutable
   * properties will remain unchanged.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Create or Update a Domain Service operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesCreateOrUpdateOptionalParams
  ): Promise<DomainServicesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      domainServiceName,
      domainService,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The Get Domain Service operation retrieves a json representation of the Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesGetOptionalParams
  ): Promise<DomainServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, domainServiceName, options },
      getOperationSpec
    );
  }

  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, domainServiceName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The Delete Domain Service operation deletes an existing Domain Service.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    options?: DomainServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      domainServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update call
   * only supports the properties listed in the PATCH body.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DomainServicesUpdateResponse>,
      DomainServicesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DomainServicesUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, domainServiceName, domainService, options },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * The Update Domain Service operation can be used to update the existing deployment. The update call
   * only supports the properties listed in the PATCH body.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param domainServiceName The name of the domain service.
   * @param domainService Properties supplied to the Update a Domain Service operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    domainServiceName: string,
    domainService: DomainService,
    options?: DomainServicesUpdateOptionalParams
  ): Promise<DomainServicesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      domainServiceName,
      domainService,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DomainServicesListNextOptionalParams
  ): Promise<DomainServicesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DomainServicesListByResourceGroupNextOptionalParams
  ): Promise<DomainServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AAD/domainServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
    },
    201: {
      bodyMapper: Mappers.DomainService
    },
    202: {
      bodyMapper: Mappers.DomainService
    },
    204: {
      bodyMapper: Mappers.DomainService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.domainService,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
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
    Parameters.domainServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DomainService
    },
    201: {
      bodyMapper: Mappers.DomainService
    },
    202: {
      bodyMapper: Mappers.DomainService
    },
    204: {
      bodyMapper: Mappers.DomainService
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.domainService,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.domainServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DomainServiceListResult
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
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
