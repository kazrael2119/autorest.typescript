// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getLongRunningPoller } from "../pollingHelpers.js";
import { cloudLinkPropertiesSerializer, } from "../../models/models.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import { isUnexpected, } from "../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@azure-rest/core-client";
export function _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks", subscriptionId, resourceGroupName, privateCloudName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _listByPrivateCloudDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        value: result.body["value"].map((p) => {
            return {
                id: p["id"],
                name: p["name"],
                type: p["type"],
                systemData: !p.systemData
                    ? undefined
                    : {
                        createdBy: p.systemData?.["createdBy"],
                        createdByType: p.systemData?.["createdByType"],
                        createdAt: p.systemData?.["createdAt"] !== undefined
                            ? new Date(p.systemData?.["createdAt"])
                            : undefined,
                        lastModifiedBy: p.systemData?.["lastModifiedBy"],
                        lastModifiedByType: p.systemData?.["lastModifiedByType"],
                        lastModifiedAt: p.systemData?.["lastModifiedAt"] !== undefined
                            ? new Date(p.systemData?.["lastModifiedAt"])
                            : undefined,
                    },
                properties: !p.properties
                    ? undefined
                    : {
                        provisioningState: p.properties?.["provisioningState"],
                        status: p.properties?.["status"],
                        linkedCloud: p.properties?.["linkedCloud"],
                    },
            };
        }),
        nextLink: result.body["nextLink"],
    };
}
/** List CloudLink resources by PrivateCloud */
export function listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options = { requestOptions: {} }) {
    return buildPagedAsyncIterator(context, () => _listByPrivateCloudSend(context, subscriptionId, resourceGroupName, privateCloudName, options), _listByPrivateCloudDeserialize, { itemName: "value", nextLinkName: "nextLink" });
}
export function _getSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}", subscriptionId, resourceGroupName, privateCloudName, cloudLinkName)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _getDeserialize(result) {
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
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                provisioningState: result.body.properties?.["provisioningState"],
                status: result.body.properties?.["status"],
                linkedCloud: result.body.properties?.["linkedCloud"],
            },
    };
}
/** Get a CloudLink */
export async function get(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options = { requestOptions: {} }) {
    const result = await _getSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options);
    return _getDeserialize(result);
}
export function _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}", subscriptionId, resourceGroupName, privateCloudName, cloudLinkName)
        .put({
        ...operationOptionsToRequestParameters(options),
        body: {
            properties: !cloudLink.properties
                ? cloudLink.properties
                : cloudLinkPropertiesSerializer(cloudLink.properties),
        },
    });
}
export async function _createOrUpdateDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return {
        id: result.body["id"],
        name: result.body["name"],
        type: result.body["type"],
        systemData: !result.body.systemData
            ? undefined
            : {
                createdBy: result.body.systemData?.["createdBy"],
                createdByType: result.body.systemData?.["createdByType"],
                createdAt: result.body.systemData?.["createdAt"] !== undefined
                    ? new Date(result.body.systemData?.["createdAt"])
                    : undefined,
                lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
                lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
                lastModifiedAt: result.body.systemData?.["lastModifiedAt"] !== undefined
                    ? new Date(result.body.systemData?.["lastModifiedAt"])
                    : undefined,
            },
        properties: !result.body.properties
            ? undefined
            : {
                provisioningState: result.body.properties?.["provisioningState"],
                status: result.body.properties?.["status"],
                linkedCloud: result.body.properties?.["linkedCloud"],
            },
    };
}
/** Create a CloudLink */
export function createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _createOrUpdateDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _createOrUpdateSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, cloudLink, options),
    });
}
export function _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options = { requestOptions: {} }) {
    return context
        .path("/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}", subscriptionId, resourceGroupName, privateCloudName, cloudLinkName)
        .delete({ ...operationOptionsToRequestParameters(options) });
}
export async function _$deleteDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    result = result;
    return;
}
/** Delete a CloudLink */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options = { requestOptions: {} }) {
    return getLongRunningPoller(context, _$deleteDeserialize, {
        updateIntervalInMs: options?.updateIntervalInMs,
        abortSignal: options?.abortSignal,
        getInitialResponse: () => _$deleteSend(context, subscriptionId, resourceGroupName, privateCloudName, cloudLinkName, options),
    });
}
//# sourceMappingURL=index.js.map