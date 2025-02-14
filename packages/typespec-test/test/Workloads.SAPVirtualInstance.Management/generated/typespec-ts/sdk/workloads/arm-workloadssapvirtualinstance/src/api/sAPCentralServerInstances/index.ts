// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  SAPCentralServerInstancesCreateOptionalParams,
  SAPCentralServerInstancesDeleteOptionalParams,
  SAPCentralServerInstancesGetOptionalParams,
  SAPCentralServerInstancesListOptionalParams,
  SAPCentralServerInstancesStartOptionalParams,
  SAPCentralServerInstancesStopOptionalParams,
  SAPCentralServerInstancesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  StartRequest,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  StopRequest,
  stopRequestSerializer,
  SAPCentralServerInstance,
  sAPCentralServerInstanceSerializer,
  sAPCentralServerInstanceDeserializer,
  UpdateSAPCentralInstanceRequest,
  updateSAPCentralInstanceRequestSerializer,
  _SAPCentralServerInstanceListResult,
  _sAPCentralServerInstanceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _sAPCentralServerInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  body: StopRequest,
  options: SAPCentralServerInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/stop",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: stopRequestSerializer(body),
    });
}

export async function _sAPCentralServerInstancesStopDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Stops the SAP Central Services Instance. */
export function sAPCentralServerInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  body: StopRequest,
  options: SAPCentralServerInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPCentralServerInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPCentralServerInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sAPCentralServerInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  body: StartRequest,
  options: SAPCentralServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}/start",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: startRequestSerializer(body),
    });
}

export async function _sAPCentralServerInstancesStartDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Starts the SAP Central Services Instance. */
export function sAPCentralServerInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  body: StartRequest,
  options: SAPCentralServerInstancesStartOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPCentralServerInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPCentralServerInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sAPCentralServerInstancesListSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPCentralServerInstancesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sAPCentralServerInstancesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPCentralServerInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sAPCentralServerInstanceListResultDeserializer(result.body);
}

/** Lists the SAP Central Services Instance resource for the given Virtual Instance for SAP solutions resource. */
export function sAPCentralServerInstancesList(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPCentralServerInstancesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SAPCentralServerInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sAPCentralServerInstancesListSend(
        context,
        resourceGroupName,
        sapVirtualInstanceName,
        options,
      ),
    _sAPCentralServerInstancesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPCentralServerInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sAPCentralServerInstancesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the Virtual Instance for SAP solutions resource, using the delete operation on it. */
export function sAPCentralServerInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sAPCentralServerInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPCentralServerInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sAPCentralServerInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  properties: UpdateSAPCentralInstanceRequest,
  options: SAPCentralServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: updateSAPCentralInstanceRequestSerializer(properties),
    });
}

export async function _sAPCentralServerInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPCentralServerInstanceDeserializer(result.body);
}

/** Updates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This can be used to update tags on the resource. */
export async function sAPCentralServerInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  properties: UpdateSAPCentralInstanceRequest,
  options: SAPCentralServerInstancesUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPCentralServerInstance> {
  const result = await _sAPCentralServerInstancesUpdateSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    properties,
    options,
  );
  return _sAPCentralServerInstancesUpdateDeserialize(result);
}

export function _sAPCentralServerInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  resource: SAPCentralServerInstance,
  options: SAPCentralServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPCentralServerInstanceSerializer(resource),
    });
}

export async function _sAPCentralServerInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPCentralServerInstanceDeserializer(result.body);
}

/** Creates the SAP Central Services Instance resource. &lt;br&gt;&lt;br&gt;This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function sAPCentralServerInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  resource: SAPCentralServerInstance,
  options: SAPCentralServerInstancesCreateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<SAPCentralServerInstance>,
  SAPCentralServerInstance
> {
  return getLongRunningPoller(
    context,
    _sAPCentralServerInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPCentralServerInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          centralInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<SAPCentralServerInstance>,
    SAPCentralServerInstance
  >;
}

export function _sAPCentralServerInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/centralInstances/{centralInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
      centralInstanceName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _sAPCentralServerInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPCentralServerInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPCentralServerInstanceDeserializer(result.body);
}

/** Gets the SAP Central Services Instance resource. */
export async function sAPCentralServerInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  centralInstanceName: string,
  options: SAPCentralServerInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPCentralServerInstance> {
  const result = await _sAPCentralServerInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    options,
  );
  return _sAPCentralServerInstancesGetDeserialize(result);
}
