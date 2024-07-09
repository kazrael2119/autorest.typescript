// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  dataProductPropertiesSerializer,
  managedServiceIdentitySerializer,
  dataProductUpdatePropertiesSerializer,
  DataProduct,
  DataProductUpdate,
  AccountSas,
  AccountSasToken,
  KeyVaultInfo,
  RoleAssignmentCommonProperties,
  RoleAssignmentDetail,
  ListRoleAssignments,
  _DataProductListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  DataProductsAddUserRole200Response,
  DataProductsAddUserRoleDefaultResponse,
  DataProductsCreate200Response,
  DataProductsCreate201Response,
  DataProductsCreateDefaultResponse,
  DataProductsCreateLogicalResponse,
  DataProductsDelete202Response,
  DataProductsDelete204Response,
  DataProductsDeleteDefaultResponse,
  DataProductsDeleteLogicalResponse,
  DataProductsGenerateStorageAccountSasToken200Response,
  DataProductsGenerateStorageAccountSasTokenDefaultResponse,
  DataProductsGet200Response,
  DataProductsGetDefaultResponse,
  DataProductsListByResourceGroup200Response,
  DataProductsListByResourceGroupDefaultResponse,
  DataProductsListBySubscription200Response,
  DataProductsListBySubscriptionDefaultResponse,
  DataProductsListRolesAssignments200Response,
  DataProductsListRolesAssignmentsDefaultResponse,
  DataProductsRemoveUserRole204Response,
  DataProductsRemoveUserRoleDefaultResponse,
  DataProductsRotateKey204Response,
  DataProductsRotateKeyDefaultResponse,
  DataProductsUpdate200Response,
  DataProductsUpdate202Response,
  DataProductsUpdateDefaultResponse,
  DataProductsUpdateLogicalResponse,
  isUnexpected,
  NetworkAnalyticsContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  DataProductsCreateOptionalParams,
  DataProductsGetOptionalParams,
  DataProductsUpdateOptionalParams,
  DataProductsDeleteOptionalParams,
  DataProductsGenerateStorageAccountSasTokenOptionalParams,
  DataProductsRotateKeyOptionalParams,
  DataProductsAddUserRoleOptionalParams,
  DataProductsRemoveUserRoleOptionalParams,
  DataProductsListRolesAssignmentsOptionalParams,
  DataProductsListByResourceGroupOptionalParams,
  DataProductsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _createSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: DataProductsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataProductsCreate200Response
  | DataProductsCreate201Response
  | DataProductsCreateDefaultResponse
  | DataProductsCreateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : dataProductPropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _createDeserialize(
  result:
    | DataProductsCreate200Response
    | DataProductsCreate201Response
    | DataProductsCreateDefaultResponse
    | DataProductsCreateLogicalResponse,
): Promise<DataProduct> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DataProductsCreateLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          resourceGuid: _result.body.properties?.["resourceGuid"],
          provisioningState: _result.body.properties?.["provisioningState"],
          publisher: _result.body.properties?.["publisher"],
          product: _result.body.properties?.["product"],
          majorVersion: _result.body.properties?.["majorVersion"],
          owners: _result.body.properties?.["owners"],
          redundancy: _result.body.properties?.["redundancy"],
          purviewAccount: _result.body.properties?.["purviewAccount"],
          purviewCollection: _result.body.properties?.["purviewCollection"],
          privateLinksEnabled: _result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: _result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            _result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !_result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  _result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVersion"
                  ],
              },
          networkacls: !_result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: _result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: _result.body.properties?.networkacls?.["ipRules"].map(
                  (p) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  _result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  _result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !_result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: _result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  _result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            _result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: _result.body.properties?.["currentMinorVersion"],
          documentation: _result.body.properties?.["documentation"],
          consumptionEndpoints: !_result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  _result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: _result.body.properties?.["keyVaultUrl"],
        },
    identity: !_result.body.identity
      ? undefined
      : {
          principalId: _result.body.identity?.["principalId"],
          tenantId: _result.body.identity?.["tenantId"],
          type: _result.body.identity?.["type"],
          userAssignedIdentities:
            _result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Create data product resource. */
export function create(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  resource: DataProduct,
  options: DataProductsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(context, _createDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DataProductsGet200Response | DataProductsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: DataProductsGet200Response | DataProductsGetDefaultResponse,
): Promise<DataProduct> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DataProductsGet200Response;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          resourceGuid: _result.body.properties?.["resourceGuid"],
          provisioningState: _result.body.properties?.["provisioningState"],
          publisher: _result.body.properties?.["publisher"],
          product: _result.body.properties?.["product"],
          majorVersion: _result.body.properties?.["majorVersion"],
          owners: _result.body.properties?.["owners"],
          redundancy: _result.body.properties?.["redundancy"],
          purviewAccount: _result.body.properties?.["purviewAccount"],
          purviewCollection: _result.body.properties?.["purviewCollection"],
          privateLinksEnabled: _result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: _result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            _result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !_result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  _result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVersion"
                  ],
              },
          networkacls: !_result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: _result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: _result.body.properties?.networkacls?.["ipRules"].map(
                  (p) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  _result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  _result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !_result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: _result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  _result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            _result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: _result.body.properties?.["currentMinorVersion"],
          documentation: _result.body.properties?.["documentation"],
          consumptionEndpoints: !_result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  _result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: _result.body.properties?.["keyVaultUrl"],
        },
    identity: !_result.body.identity
      ? undefined
      : {
          principalId: _result.body.identity?.["principalId"],
          tenantId: _result.body.identity?.["tenantId"],
          type: _result.body.identity?.["type"],
          userAssignedIdentities:
            _result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Retrieve data product resource. */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsGetOptionalParams = { requestOptions: {} },
): Promise<DataProduct> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    options,
  );
  return _getDeserialize(result);
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: DataProductsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataProductsUpdate200Response
  | DataProductsUpdate202Response
  | DataProductsUpdateDefaultResponse
  | DataProductsUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentitySerializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : dataProductUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _updateDeserialize(
  result:
    | DataProductsUpdate200Response
    | DataProductsUpdate202Response
    | DataProductsUpdateDefaultResponse
    | DataProductsUpdateLogicalResponse,
): Promise<DataProduct> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DataProductsUpdateLogicalResponse;
  return {
    tags: _result.body["tags"],
    location: _result.body["location"],
    id: _result.body["id"],
    name: _result.body["name"],
    type: _result.body["type"],
    systemData: !_result.body.systemData
      ? undefined
      : {
          createdBy: _result.body.systemData?.["createdBy"],
          createdByType: _result.body.systemData?.["createdByType"],
          createdAt:
            _result.body.systemData?.["createdAt"] !== undefined
              ? new Date(_result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: _result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: _result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            _result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(_result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !_result.body.properties
      ? undefined
      : {
          resourceGuid: _result.body.properties?.["resourceGuid"],
          provisioningState: _result.body.properties?.["provisioningState"],
          publisher: _result.body.properties?.["publisher"],
          product: _result.body.properties?.["product"],
          majorVersion: _result.body.properties?.["majorVersion"],
          owners: _result.body.properties?.["owners"],
          redundancy: _result.body.properties?.["redundancy"],
          purviewAccount: _result.body.properties?.["purviewAccount"],
          purviewCollection: _result.body.properties?.["purviewCollection"],
          privateLinksEnabled: _result.body.properties?.["privateLinksEnabled"],
          publicNetworkAccess: _result.body.properties?.["publicNetworkAccess"],
          customerManagedKeyEncryptionEnabled:
            _result.body.properties?.["customerManagedKeyEncryptionEnabled"],
          customerEncryptionKey: !_result.body.properties?.customerEncryptionKey
            ? undefined
            : {
                keyVaultUri:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVaultUri"
                  ],
                keyName:
                  _result.body.properties?.customerEncryptionKey?.["keyName"],
                keyVersion:
                  _result.body.properties?.customerEncryptionKey?.[
                    "keyVersion"
                  ],
              },
          networkacls: !_result.body.properties?.networkacls
            ? undefined
            : {
                virtualNetworkRule: _result.body.properties?.networkacls?.[
                  "virtualNetworkRule"
                ].map((p) => {
                  return {
                    id: p["id"],
                    action: p["action"],
                    state: p["state"],
                  };
                }),
                ipRules: _result.body.properties?.networkacls?.["ipRules"].map(
                  (p) => {
                    return { value: p["value"], action: p["action"] };
                  },
                ),
                allowedQueryIpRangeList:
                  _result.body.properties?.networkacls?.[
                    "allowedQueryIpRangeList"
                  ],
                defaultAction:
                  _result.body.properties?.networkacls?.["defaultAction"],
              },
          managedResourceGroupConfiguration: !_result.body.properties
            ?.managedResourceGroupConfiguration
            ? undefined
            : {
                name: _result.body.properties
                  ?.managedResourceGroupConfiguration?.["name"],
                location:
                  _result.body.properties?.managedResourceGroupConfiguration?.[
                    "location"
                  ],
              },
          availableMinorVersions:
            _result.body.properties?.["availableMinorVersions"],
          currentMinorVersion: _result.body.properties?.["currentMinorVersion"],
          documentation: _result.body.properties?.["documentation"],
          consumptionEndpoints: !_result.body.properties?.consumptionEndpoints
            ? undefined
            : {
                ingestionUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionUrl"
                  ],
                ingestionResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "ingestionResourceId"
                  ],
                fileAccessUrl:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessUrl"
                  ],
                fileAccessResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "fileAccessResourceId"
                  ],
                queryUrl:
                  _result.body.properties?.consumptionEndpoints?.["queryUrl"],
                queryResourceId:
                  _result.body.properties?.consumptionEndpoints?.[
                    "queryResourceId"
                  ],
              },
          keyVaultUrl: _result.body.properties?.["keyVaultUrl"],
        },
    identity: !_result.body.identity
      ? undefined
      : {
          principalId: _result.body.identity?.["principalId"],
          tenantId: _result.body.identity?.["tenantId"],
          type: _result.body.identity?.["type"],
          userAssignedIdentities:
            _result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Update data product resource. */
export function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  properties: DataProductUpdate,
  options: DataProductsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<DataProduct>, DataProduct> {
  return getLongRunningPoller(context, _updateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        properties,
        options,
      ),
  }) as PollerLike<OperationState<DataProduct>, DataProduct>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataProductsDelete202Response
  | DataProductsDelete204Response
  | DataProductsDeleteDefaultResponse
  | DataProductsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | DataProductsDelete202Response
    | DataProductsDelete204Response
    | DataProductsDeleteDefaultResponse
    | DataProductsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Delete data product resource. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  options: DataProductsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        dataProductName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _generateStorageAccountSasTokenSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: DataProductsGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DataProductsGenerateStorageAccountSasToken200Response
  | DataProductsGenerateStorageAccountSasTokenDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/generateStorageAccountSasToken",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        startTimeStamp: body["startTimeStamp"].toISOString(),
        expiryTimeStamp: body["expiryTimeStamp"].toISOString(),
        ipAddress: body["ipAddress"],
      },
    });
}

export async function _generateStorageAccountSasTokenDeserialize(
  result:
    | DataProductsGenerateStorageAccountSasToken200Response
    | DataProductsGenerateStorageAccountSasTokenDefaultResponse,
): Promise<AccountSasToken> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as DataProductsGenerateStorageAccountSasToken200Response;
  return {
    storageAccountSasToken: _result.body["storageAccountSasToken"],
  };
}

/** Generate sas token for storage account. */
export async function generateStorageAccountSasToken(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: AccountSas,
  options: DataProductsGenerateStorageAccountSasTokenOptionalParams = {
    requestOptions: {},
  },
): Promise<AccountSasToken> {
  const result = await _generateStorageAccountSasTokenSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _generateStorageAccountSasTokenDeserialize(result);
}

export function _rotateKeySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: DataProductsRotateKeyOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DataProductsRotateKey204Response | DataProductsRotateKeyDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/rotateKey",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { keyVaultUrl: body["keyVaultUrl"] },
    });
}

export async function _rotateKeyDeserialize(
  result:
    | DataProductsRotateKey204Response
    | DataProductsRotateKeyDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Initiate key rotation on Data Product. */
export async function rotateKey(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: KeyVaultInfo,
  options: DataProductsRotateKeyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _rotateKeySend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _rotateKeyDeserialize(result);
}

export function _addUserRoleSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: DataProductsAddUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  DataProductsAddUserRole200Response | DataProductsAddUserRoleDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/addUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        roleId: body["roleId"],
        principalId: body["principalId"],
        userName: body["userName"],
        dataTypeScope: body["dataTypeScope"],
        principalType: body["principalType"],
        role: body["role"],
      },
    });
}

export async function _addUserRoleDeserialize(
  result:
    | DataProductsAddUserRole200Response
    | DataProductsAddUserRoleDefaultResponse,
): Promise<RoleAssignmentDetail> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result = result as unknown as DataProductsAddUserRole200Response;
  return {
    roleId: _result.body["roleId"],
    principalId: _result.body["principalId"],
    userName: _result.body["userName"],
    dataTypeScope: _result.body["dataTypeScope"],
    principalType: _result.body["principalType"],
    role: _result.body["role"],
    roleAssignmentId: _result.body["roleAssignmentId"],
  };
}

/** Assign role to the data product. */
export async function addUserRole(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentCommonProperties,
  options: DataProductsAddUserRoleOptionalParams = { requestOptions: {} },
): Promise<RoleAssignmentDetail> {
  const result = await _addUserRoleSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _addUserRoleDeserialize(result);
}

export function _removeUserRoleSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: DataProductsRemoveUserRoleOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | DataProductsRemoveUserRole204Response
  | DataProductsRemoveUserRoleDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/removeUserRole",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        roleId: body["roleId"],
        principalId: body["principalId"],
        userName: body["userName"],
        dataTypeScope: body["dataTypeScope"],
        principalType: body["principalType"],
        role: body["role"],
        roleAssignmentId: body["roleAssignmentId"],
      },
    });
}

export async function _removeUserRoleDeserialize(
  result:
    | DataProductsRemoveUserRole204Response
    | DataProductsRemoveUserRoleDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return;
}

/** Remove role from the data product. */
export async function removeUserRole(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: RoleAssignmentDetail,
  options: DataProductsRemoveUserRoleOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _removeUserRoleSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _removeUserRoleDeserialize(result);
}

export function _listRolesAssignmentsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: DataProductsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DataProductsListRolesAssignments200Response
  | DataProductsListRolesAssignmentsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts/{dataProductName}/listRolesAssignments",
      subscriptionId,
      resourceGroupName,
      dataProductName,
    )
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _listRolesAssignmentsDeserialize(
  result:
    | DataProductsListRolesAssignments200Response
    | DataProductsListRolesAssignmentsDefaultResponse,
): Promise<ListRoleAssignments> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as DataProductsListRolesAssignments200Response;
  return {
    count: _result.body["count"],
    roleAssignmentResponse: _result.body["roleAssignmentResponse"].map((p) => {
      return {
        roleId: p["roleId"],
        principalId: p["principalId"],
        userName: p["userName"],
        dataTypeScope: p["dataTypeScope"],
        principalType: p["principalType"],
        role: p["role"],
        roleAssignmentId: p["roleAssignmentId"],
      };
    }),
  };
}

/** List user roles associated with the data product. */
export async function listRolesAssignments(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  dataProductName: string,
  body: Record<string, any>,
  options: DataProductsListRolesAssignmentsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListRoleAssignments> {
  const result = await _listRolesAssignmentsSend(
    context,
    subscriptionId,
    resourceGroupName,
    dataProductName,
    body,
    options,
  );
  return _listRolesAssignmentsDeserialize(result);
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DataProductsListByResourceGroup200Response
  | DataProductsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | DataProductsListByResourceGroup200Response
    | DataProductsListByResourceGroupDefaultResponse,
): Promise<_DataProductListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as DataProductsListByResourceGroup200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              resourceGuid: p.properties?.["resourceGuid"],
              provisioningState: p.properties?.["provisioningState"],
              publisher: p.properties?.["publisher"],
              product: p.properties?.["product"],
              majorVersion: p.properties?.["majorVersion"],
              owners: p.properties?.["owners"],
              redundancy: p.properties?.["redundancy"],
              purviewAccount: p.properties?.["purviewAccount"],
              purviewCollection: p.properties?.["purviewCollection"],
              privateLinksEnabled: p.properties?.["privateLinksEnabled"],
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
              customerManagedKeyEncryptionEnabled:
                p.properties?.["customerManagedKeyEncryptionEnabled"],
              customerEncryptionKey: !p.properties?.customerEncryptionKey
                ? undefined
                : {
                    keyVaultUri:
                      p.properties?.customerEncryptionKey?.["keyVaultUri"],
                    keyName: p.properties?.customerEncryptionKey?.["keyName"],
                    keyVersion:
                      p.properties?.customerEncryptionKey?.["keyVersion"],
                  },
              networkacls: !p.properties?.networkacls
                ? undefined
                : {
                    virtualNetworkRule: p.properties?.networkacls?.[
                      "virtualNetworkRule"
                    ].map((p) => {
                      return {
                        id: p["id"],
                        action: p["action"],
                        state: p["state"],
                      };
                    }),
                    ipRules: p.properties?.networkacls?.["ipRules"].map((p) => {
                      return { value: p["value"], action: p["action"] };
                    }),
                    allowedQueryIpRangeList:
                      p.properties?.networkacls?.["allowedQueryIpRangeList"],
                    defaultAction: p.properties?.networkacls?.["defaultAction"],
                  },
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                    location:
                      p.properties?.managedResourceGroupConfiguration?.[
                        "location"
                      ],
                  },
              availableMinorVersions: p.properties?.["availableMinorVersions"],
              currentMinorVersion: p.properties?.["currentMinorVersion"],
              documentation: p.properties?.["documentation"],
              consumptionEndpoints: !p.properties?.consumptionEndpoints
                ? undefined
                : {
                    ingestionUrl:
                      p.properties?.consumptionEndpoints?.["ingestionUrl"],
                    ingestionResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "ingestionResourceId"
                      ],
                    fileAccessUrl:
                      p.properties?.consumptionEndpoints?.["fileAccessUrl"],
                    fileAccessResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "fileAccessResourceId"
                      ],
                    queryUrl: p.properties?.consumptionEndpoints?.["queryUrl"],
                    queryResourceId:
                      p.properties?.consumptionEndpoints?.["queryResourceId"],
                  },
              keyVaultUrl: p.properties?.["keyVaultUrl"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: _result.body["nextLink"],
  };
}

/** List data products by resource group. */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DataProductsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProduct> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DataProductsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | DataProductsListBySubscription200Response
  | DataProductsListBySubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.NetworkAnalytics/dataProducts",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result:
    | DataProductsListBySubscription200Response
    | DataProductsListBySubscriptionDefaultResponse,
): Promise<_DataProductListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const _result =
    result as unknown as DataProductsListBySubscription200Response;
  return {
    value: _result.body["value"].map((p) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              resourceGuid: p.properties?.["resourceGuid"],
              provisioningState: p.properties?.["provisioningState"],
              publisher: p.properties?.["publisher"],
              product: p.properties?.["product"],
              majorVersion: p.properties?.["majorVersion"],
              owners: p.properties?.["owners"],
              redundancy: p.properties?.["redundancy"],
              purviewAccount: p.properties?.["purviewAccount"],
              purviewCollection: p.properties?.["purviewCollection"],
              privateLinksEnabled: p.properties?.["privateLinksEnabled"],
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
              customerManagedKeyEncryptionEnabled:
                p.properties?.["customerManagedKeyEncryptionEnabled"],
              customerEncryptionKey: !p.properties?.customerEncryptionKey
                ? undefined
                : {
                    keyVaultUri:
                      p.properties?.customerEncryptionKey?.["keyVaultUri"],
                    keyName: p.properties?.customerEncryptionKey?.["keyName"],
                    keyVersion:
                      p.properties?.customerEncryptionKey?.["keyVersion"],
                  },
              networkacls: !p.properties?.networkacls
                ? undefined
                : {
                    virtualNetworkRule: p.properties?.networkacls?.[
                      "virtualNetworkRule"
                    ].map((p) => {
                      return {
                        id: p["id"],
                        action: p["action"],
                        state: p["state"],
                      };
                    }),
                    ipRules: p.properties?.networkacls?.["ipRules"].map((p) => {
                      return { value: p["value"], action: p["action"] };
                    }),
                    allowedQueryIpRangeList:
                      p.properties?.networkacls?.["allowedQueryIpRangeList"],
                    defaultAction: p.properties?.networkacls?.["defaultAction"],
                  },
              managedResourceGroupConfiguration: !p.properties
                ?.managedResourceGroupConfiguration
                ? undefined
                : {
                    name: p.properties?.managedResourceGroupConfiguration?.[
                      "name"
                    ],
                    location:
                      p.properties?.managedResourceGroupConfiguration?.[
                        "location"
                      ],
                  },
              availableMinorVersions: p.properties?.["availableMinorVersions"],
              currentMinorVersion: p.properties?.["currentMinorVersion"],
              documentation: p.properties?.["documentation"],
              consumptionEndpoints: !p.properties?.consumptionEndpoints
                ? undefined
                : {
                    ingestionUrl:
                      p.properties?.consumptionEndpoints?.["ingestionUrl"],
                    ingestionResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "ingestionResourceId"
                      ],
                    fileAccessUrl:
                      p.properties?.consumptionEndpoints?.["fileAccessUrl"],
                    fileAccessResourceId:
                      p.properties?.consumptionEndpoints?.[
                        "fileAccessResourceId"
                      ],
                    queryUrl: p.properties?.consumptionEndpoints?.["queryUrl"],
                    queryResourceId:
                      p.properties?.consumptionEndpoints?.["queryResourceId"],
                  },
              keyVaultUrl: p.properties?.["keyVaultUrl"],
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: _result.body["nextLink"],
  };
}

/** List data products by subscription. */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: DataProductsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DataProduct> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
