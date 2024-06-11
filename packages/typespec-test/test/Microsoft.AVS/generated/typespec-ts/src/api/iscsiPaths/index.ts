// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { IscsiPathListResult, IscsiPath } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  IscsiPathsCreateOrUpdate200Response,
  IscsiPathsCreateOrUpdate201Response,
  IscsiPathsCreateOrUpdateDefaultResponse,
  IscsiPathsCreateOrUpdateLogicalResponse,
  IscsiPathsDelete200Response,
  IscsiPathsDelete202Response,
  IscsiPathsDelete204Response,
  IscsiPathsDeleteDefaultResponse,
  IscsiPathsDeleteLogicalResponse,
  IscsiPathsGet200Response,
  IscsiPathsGetDefaultResponse,
  IscsiPathsListByPrivateCloud200Response,
  IscsiPathsListByPrivateCloudDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  IscsiPathsListByPrivateCloudOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsDeleteOptionalParams,
} from "../../models/options.js";

export function _listByPrivateCloudSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | IscsiPathsListByPrivateCloud200Response
  | IscsiPathsListByPrivateCloudDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByPrivateCloudDeserialize(
  result:
    | IscsiPathsListByPrivateCloud200Response
    | IscsiPathsListByPrivateCloudDefaultResponse,
): Promise<IscsiPathListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
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
            provisioningState: p.properties?.["provisioningState"],
            networkBlock: p.properties?.["networkBlock"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List IscsiPath resources by PrivateCloud */
export function listByPrivateCloud(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsListByPrivateCloudOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<IscsiPath> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByPrivateCloudSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _listByPrivateCloudDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<IscsiPathsGet200Response | IscsiPathsGetDefaultResponse> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: IscsiPathsGet200Response | IscsiPathsGetDefaultResponse,
): Promise<IscsiPath> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          networkBlock: result.body.properties?.["networkBlock"],
        },
  };
}

/** Get a IscsiPath */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsGetOptionalParams = { requestOptions: {} },
): Promise<IscsiPath> {
  const result = await _getSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _getDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | IscsiPathsCreateOrUpdate200Response
  | IscsiPathsCreateOrUpdate201Response
  | IscsiPathsCreateOrUpdateDefaultResponse
  | IscsiPathsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? undefined
          : { networkBlock: resource.properties?.["networkBlock"] },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | IscsiPathsCreateOrUpdate200Response
    | IscsiPathsCreateOrUpdate201Response
    | IscsiPathsCreateOrUpdateDefaultResponse
    | IscsiPathsCreateOrUpdateLogicalResponse,
): Promise<IscsiPath> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as IscsiPathsCreateOrUpdateLogicalResponse;
  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          networkBlock: result.body.properties?.["networkBlock"],
        },
  };
}

/** Create a IscsiPath */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  resource: IscsiPath,
  options: IscsiPathsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<IscsiPath>, IscsiPath> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        resource,
        options,
      ),
  }) as PollerLike<OperationState<IscsiPath>, IscsiPath>;
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | IscsiPathsDelete200Response
  | IscsiPathsDelete202Response
  | IscsiPathsDelete204Response
  | IscsiPathsDeleteDefaultResponse
  | IscsiPathsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | IscsiPathsDelete200Response
    | IscsiPathsDelete202Response
    | IscsiPathsDelete204Response
    | IscsiPathsDeleteDefaultResponse
    | IscsiPathsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as IscsiPathsDeleteLogicalResponse;
  return;
}

/** Delete a IscsiPath */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: IscsiPathsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}
