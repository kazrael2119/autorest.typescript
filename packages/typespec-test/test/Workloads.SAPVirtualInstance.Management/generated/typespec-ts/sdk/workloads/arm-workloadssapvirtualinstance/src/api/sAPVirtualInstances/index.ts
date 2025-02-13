// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  SAPVirtualInstancesCreateOptionalParams,
  SAPVirtualInstancesDeleteOptionalParams,
  SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams,
  SAPVirtualInstancesGetDiskConfigurationsOptionalParams,
  SAPVirtualInstancesGetOptionalParams,
  SAPVirtualInstancesGetSapSupportedSkuOptionalParams,
  SAPVirtualInstancesGetSizingRecommendationsOptionalParams,
  SAPVirtualInstancesListByResourceGroupOptionalParams,
  SAPVirtualInstancesListBySubscriptionOptionalParams,
  SAPVirtualInstancesStartOptionalParams,
  SAPVirtualInstancesStopOptionalParams,
  SAPVirtualInstancesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  StartRequest,
  startRequestSerializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
  StopRequest,
  stopRequestSerializer,
  SAPVirtualInstance,
  sAPVirtualInstanceSerializer,
  sAPVirtualInstanceDeserializer,
  UpdateSAPVirtualInstanceRequest,
  updateSAPVirtualInstanceRequestSerializer,
  _SAPVirtualInstanceListResult,
  _sAPVirtualInstanceListResultDeserializer,
  SAPSizingRecommendationRequest,
  sAPSizingRecommendationRequestSerializer,
  sAPSizingRecommendationResultUnionDeserializer,
  SAPSizingRecommendationResultUnion,
  SAPSupportedSkusRequest,
  sAPSupportedSkusRequestSerializer,
  SAPSupportedResourceSkusResult,
  sAPSupportedResourceSkusResultDeserializer,
  SAPDiskConfigurationsRequest,
  sAPDiskConfigurationsRequestSerializer,
  SAPDiskConfigurationsResult,
  sAPDiskConfigurationsResultDeserializer,
  SAPAvailabilityZoneDetailsRequest,
  sAPAvailabilityZoneDetailsRequestSerializer,
  SAPAvailabilityZoneDetailsResult,
  sAPAvailabilityZoneDetailsResultDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _sAPVirtualInstancesGetAvailabilityZoneDetailsSend(
  context: Client,
  location: string,
  body: SAPAvailabilityZoneDetailsRequest,
  options: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getAvailabilityZoneDetails",
      context.subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPAvailabilityZoneDetailsRequestSerializer(body),
    });
}

export async function _sAPVirtualInstancesGetAvailabilityZoneDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPAvailabilityZoneDetailsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPAvailabilityZoneDetailsResultDeserializer(result.body);
}

/** Get the recommended SAP Availability Zone Pair Details for your region. */
export async function sAPVirtualInstancesGetAvailabilityZoneDetails(
  context: Client,
  location: string,
  body: SAPAvailabilityZoneDetailsRequest,
  options: SAPVirtualInstancesGetAvailabilityZoneDetailsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPAvailabilityZoneDetailsResult> {
  const result = await _sAPVirtualInstancesGetAvailabilityZoneDetailsSend(
    context,
    location,
    body,
    options,
  );
  return _sAPVirtualInstancesGetAvailabilityZoneDetailsDeserialize(result);
}

export function _sAPVirtualInstancesGetDiskConfigurationsSend(
  context: Client,
  location: string,
  body: SAPDiskConfigurationsRequest,
  options: SAPVirtualInstancesGetDiskConfigurationsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getDiskConfigurations",
      context.subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPDiskConfigurationsRequestSerializer(body),
    });
}

export async function _sAPVirtualInstancesGetDiskConfigurationsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiskConfigurationsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPDiskConfigurationsResultDeserializer(result.body);
}

/** Get the SAP Disk Configuration Layout prod/non-prod SAP System. */
export async function sAPVirtualInstancesGetDiskConfigurations(
  context: Client,
  location: string,
  body: SAPDiskConfigurationsRequest,
  options: SAPVirtualInstancesGetDiskConfigurationsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPDiskConfigurationsResult> {
  const result = await _sAPVirtualInstancesGetDiskConfigurationsSend(
    context,
    location,
    body,
    options,
  );
  return _sAPVirtualInstancesGetDiskConfigurationsDeserialize(result);
}

export function _sAPVirtualInstancesGetSapSupportedSkuSend(
  context: Client,
  location: string,
  body: SAPSupportedSkusRequest,
  options: SAPVirtualInstancesGetSapSupportedSkuOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSapSupportedSku",
      context.subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPSupportedSkusRequestSerializer(body),
    });
}

export async function _sAPVirtualInstancesGetSapSupportedSkuDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPSupportedResourceSkusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPSupportedResourceSkusResultDeserializer(result.body);
}

/** Get a list of SAP supported SKUs for ASCS, Application and Database tier. */
export async function sAPVirtualInstancesGetSapSupportedSku(
  context: Client,
  location: string,
  body: SAPSupportedSkusRequest,
  options: SAPVirtualInstancesGetSapSupportedSkuOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPSupportedResourceSkusResult> {
  const result = await _sAPVirtualInstancesGetSapSupportedSkuSend(
    context,
    location,
    body,
    options,
  );
  return _sAPVirtualInstancesGetSapSupportedSkuDeserialize(result);
}

export function _sAPVirtualInstancesGetSizingRecommendationsSend(
  context: Client,
  location: string,
  body: SAPSizingRecommendationRequest,
  options: SAPVirtualInstancesGetSizingRecommendationsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/locations/{location}/sapVirtualInstanceMetadata/default/getSizingRecommendations",
      context.subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPSizingRecommendationRequestSerializer(body),
    });
}

export async function _sAPVirtualInstancesGetSizingRecommendationsDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPSizingRecommendationResultUnion> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPSizingRecommendationResultUnionDeserializer(result.body);
}

/** Gets the sizing recommendations. */
export async function sAPVirtualInstancesGetSizingRecommendations(
  context: Client,
  location: string,
  body: SAPSizingRecommendationRequest,
  options: SAPVirtualInstancesGetSizingRecommendationsOptionalParams = {
    requestOptions: {},
  },
): Promise<SAPSizingRecommendationResultUnion> {
  const result = await _sAPVirtualInstancesGetSizingRecommendationsSend(
    context,
    location,
    body,
    options,
  );
  return _sAPVirtualInstancesGetSizingRecommendationsDeserialize(result);
}

export function _sAPVirtualInstancesStopSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  body: {
    body?: StopRequest;
  },
  options: SAPVirtualInstancesStopOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/stop",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: !options["body"]
        ? options["body"]
        : stopRequestSerializer(options["body"]),
    });
}

export async function _sAPVirtualInstancesStopDeserialize(
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

/** Stops the SAP Application, that is the Application server instances and Central Services instance. */
export function sAPVirtualInstancesStop(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  body: {
    body?: StopRequest;
  },
  options: SAPVirtualInstancesStopOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPVirtualInstancesStopDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPVirtualInstancesStopSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sAPVirtualInstancesStartSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  body: {
    body?: StartRequest;
  },
  options: SAPVirtualInstancesStartOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}/start",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: !options["body"]
        ? options["body"]
        : startRequestSerializer(options["body"]),
    });
}

export async function _sAPVirtualInstancesStartDeserialize(
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

/** Starts the SAP application, that is the Central Services instance and Application server instances. */
export function sAPVirtualInstancesStart(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  body: {
    body?: StartRequest;
  },
  options: SAPVirtualInstancesStartOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPVirtualInstancesStartDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPVirtualInstancesStartSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          body,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sAPVirtualInstancesListBySubscriptionSend(
  context: Client,
  options: SAPVirtualInstancesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/sapVirtualInstances",
      context.subscriptionId,
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

export async function _sAPVirtualInstancesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPVirtualInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sAPVirtualInstanceListResultDeserializer(result.body);
}

/** Gets all Virtual Instances for SAP solutions resources in a Subscription. */
export function sAPVirtualInstancesListBySubscription(
  context: Client,
  options: SAPVirtualInstancesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPVirtualInstance> {
  return buildPagedAsyncIterator(
    context,
    () => _sAPVirtualInstancesListBySubscriptionSend(context, options),
    _sAPVirtualInstancesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPVirtualInstancesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SAPVirtualInstancesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances",
      context.subscriptionId,
      resourceGroupName,
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

export async function _sAPVirtualInstancesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPVirtualInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sAPVirtualInstanceListResultDeserializer(result.body);
}

/** Gets all Virtual Instances for SAP solutions resources in a Resource Group. */
export function sAPVirtualInstancesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SAPVirtualInstancesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPVirtualInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sAPVirtualInstancesListByResourceGroupSend(
        context,
        resourceGroupName,
        options,
      ),
    _sAPVirtualInstancesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPVirtualInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
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

export async function _sAPVirtualInstancesDeleteDeserialize(
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

/** Deletes a Virtual Instance for SAP solutions resource and its child resources, that is the associated Central Services Instance, Application Server Instances and Database Instance. */
export function sAPVirtualInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _sAPVirtualInstancesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPVirtualInstancesDeleteSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _sAPVirtualInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  properties: UpdateSAPVirtualInstanceRequest,
  options: SAPVirtualInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: updateSAPVirtualInstanceRequestSerializer(properties),
    });
}

export async function _sAPVirtualInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPVirtualInstanceDeserializer(result.body);
}

/** Updates a Virtual Instance for SAP solutions resource */
export function sAPVirtualInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  properties: UpdateSAPVirtualInstanceRequest,
  options: SAPVirtualInstancesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance> {
  return getLongRunningPoller(
    context,
    _sAPVirtualInstancesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPVirtualInstancesUpdateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
}

export function _sAPVirtualInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  resource: SAPVirtualInstance,
  options: SAPVirtualInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
      context.subscriptionId,
      resourceGroupName,
      sapVirtualInstanceName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: sAPVirtualInstanceSerializer(resource),
    });
}

export async function _sAPVirtualInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPVirtualInstanceDeserializer(result.body);
}

/** Creates a Virtual Instance for SAP solutions (VIS) resource */
export function sAPVirtualInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  resource: SAPVirtualInstance,
  options: SAPVirtualInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance> {
  return getLongRunningPoller(
    context,
    _sAPVirtualInstancesCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPVirtualInstancesCreateSend(
          context,
          resourceGroupName,
          sapVirtualInstanceName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<SAPVirtualInstance>, SAPVirtualInstance>;
}

export function _sAPVirtualInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapVirtualInstances/{sapVirtualInstanceName}",
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

export async function _sAPVirtualInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPVirtualInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sAPVirtualInstanceDeserializer(result.body);
}

/** Gets a Virtual Instance for SAP solutions resource */
export async function sAPVirtualInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapVirtualInstanceName: string,
  options: SAPVirtualInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPVirtualInstance> {
  const result = await _sAPVirtualInstancesGetSend(
    context,
    resourceGroupName,
    sapVirtualInstanceName,
    options,
  );
  return _sAPVirtualInstancesGetDeserialize(result);
}
