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
import { SqlManagementClient } from "../sqlManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  EncryptionProtectorName,
  EncryptionProtectorsListByServerResponse,
  EncryptionProtectorsGetResponse,
  EncryptionProtector,
  EncryptionProtectorsCreateOrUpdateResponse,
  EncryptionProtectorsListByServerNextResponse
} from "../models";

/**
 * Class representing a EncryptionProtectors.
 */
export class EncryptionProtectors {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class EncryptionProtectors class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  async revalidate(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      encryptionProtectorName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      operationArguments,
      revalidateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: revalidateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a list of server encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionProtectorsListByServerResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerOperationSpec
    ) as Promise<EncryptionProtectorsListByServerResponse>;
  }

  /**
   * Gets a server encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionProtectorsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      encryptionProtectorName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<EncryptionProtectorsGetResponse>;
  }

  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: EncryptionProtector,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<EncryptionProtectorsCreateOrUpdateResponse>> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      encryptionProtectorName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        EncryptionProtectorsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<EncryptionProtectorsListByServerNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerNextOperationSpec
    ) as Promise<EncryptionProtectorsListByServerNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const revalidateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}/revalidate",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.encryptionProtectorName
  ],
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtectorListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtector
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.encryptionProtectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtector
    },
    201: {
      bodyMapper: Mappers.EncryptionProtector
    },
    202: {
      bodyMapper: Mappers.EncryptionProtector
    },
    204: {
      bodyMapper: Mappers.EncryptionProtector
    },
    default: {}
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.encryptionProtectorName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByServerNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EncryptionProtectorListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
