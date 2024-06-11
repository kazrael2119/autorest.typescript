// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { listByPrivateCloud, get, createOrUpdate, $delete, } from "../../api/globalReachConnections/index.js";
export function getGlobalReachConnections(context) {
    return {
        listByPrivateCloud: (subscriptionId, resourceGroupName, privateCloudName, options) => listByPrivateCloud(context, subscriptionId, resourceGroupName, privateCloudName, options),
        get: (subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options) => get(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options),
        createOrUpdate: (subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, globalReachConnection, options) => createOrUpdate(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, globalReachConnection, options),
        delete: (subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options) => $delete(context, subscriptionId, resourceGroupName, privateCloudName, globalReachConnectionName, options),
    };
}
export function getGlobalReachConnectionsOperations(context) {
    return {
        ...getGlobalReachConnections(context),
    };
}
//# sourceMappingURL=index.js.map