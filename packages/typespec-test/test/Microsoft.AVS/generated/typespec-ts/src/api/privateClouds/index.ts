// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  PrivateCloudListResult,
  PrivateCloud,
  PrivateCloudUpdate,
  AdminCredentials,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  AVSContext as Client,
  PrivateCloudsCreateOrUpdate200Response,
  PrivateCloudsCreateOrUpdate201Response,
  PrivateCloudsCreateOrUpdateDefaultResponse,
  PrivateCloudsCreateOrUpdateLogicalResponse,
  PrivateCloudsDelete200Response,
  PrivateCloudsDelete202Response,
  PrivateCloudsDelete204Response,
  PrivateCloudsDeleteDefaultResponse,
  PrivateCloudsDeleteLogicalResponse,
  PrivateCloudsGet200Response,
  PrivateCloudsGetDefaultResponse,
  PrivateCloudsListAdminCredentials200Response,
  PrivateCloudsListAdminCredentialsDefaultResponse,
  PrivateCloudsListByResourceGroup200Response,
  PrivateCloudsListByResourceGroupDefaultResponse,
  PrivateCloudsListInSubscription200Response,
  PrivateCloudsListInSubscriptionDefaultResponse,
  PrivateCloudsRotateNsxtPassword202Response,
  PrivateCloudsRotateNsxtPassword204Response,
  PrivateCloudsRotateNsxtPasswordDefaultResponse,
  PrivateCloudsRotateNsxtPasswordLogicalResponse,
  PrivateCloudsRotateVcenterPassword202Response,
  PrivateCloudsRotateVcenterPassword204Response,
  PrivateCloudsRotateVcenterPasswordDefaultResponse,
  PrivateCloudsRotateVcenterPasswordLogicalResponse,
  PrivateCloudsUpdate200Response,
  PrivateCloudsUpdate201Response,
  PrivateCloudsUpdateDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  PrivateCloudsListByResourceGroupOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
} from "../../models/options.js";

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateCloudsListByResourceGroup200Response
  | PrivateCloudsListByResourceGroupDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result:
    | PrivateCloudsListByResourceGroup200Response
    | PrivateCloudsListByResourceGroupDefaultResponse,
): Promise<PrivateCloudListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            managementCluster: {
              clusterSize: p.properties?.managementCluster["clusterSize"],
              provisioningState:
                p.properties?.managementCluster["provisioningState"],
              clusterId: p.properties?.managementCluster["clusterId"],
              hosts: p.properties?.managementCluster["hosts"],
              vsanDatastoreName:
                p.properties?.managementCluster["vsanDatastoreName"],
            },
            internet: p.properties?.["internet"],
            identitySources:
              p.properties?.["identitySources"] === undefined
                ? p.properties?.["identitySources"]
                : p.properties?.["identitySources"].map((p) => ({
                    name: p["name"],
                    alias: p["alias"],
                    domain: p["domain"],
                    baseUserDN: p["baseUserDN"],
                    baseGroupDN: p["baseGroupDN"],
                    primaryServer: p["primaryServer"],
                    secondaryServer: p["secondaryServer"],
                    ssl: p["ssl"],
                    username: p["username"],
                    password: p["password"],
                  })),
            availability: !p.properties?.availability
              ? undefined
              : {
                  strategy: p.properties?.availability?.["strategy"],
                  zone: p.properties?.availability?.["zone"],
                  secondaryZone: p.properties?.availability?.["secondaryZone"],
                },
            encryption: !p.properties?.encryption
              ? undefined
              : {
                  status: p.properties?.encryption?.["status"],
                  keyVaultProperties: !p.properties?.encryption
                    ?.keyVaultProperties
                    ? undefined
                    : {
                        keyName:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyName"
                          ],
                        keyVersion:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyVersion"
                          ],
                        autoDetectedKeyVersion:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "autoDetectedKeyVersion"
                          ],
                        keyVaultUrl:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyVaultUrl"
                          ],
                        keyState:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyState"
                          ],
                        versionType:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "versionType"
                          ],
                      },
                },
            extendedNetworkBlocks: p.properties?.["extendedNetworkBlocks"],
            provisioningState: p.properties?.["provisioningState"],
            circuit: !p.properties?.circuit
              ? undefined
              : {
                  primarySubnet: p.properties?.circuit?.["primarySubnet"],
                  secondarySubnet: p.properties?.circuit?.["secondarySubnet"],
                  expressRouteID: p.properties?.circuit?.["expressRouteID"],
                  expressRoutePrivatePeeringID:
                    p.properties?.circuit?.["expressRoutePrivatePeeringID"],
                },
            endpoints: !p.properties?.endpoints
              ? undefined
              : {
                  nsxtManager: p.properties?.endpoints?.["nsxtManager"],
                  vcsa: p.properties?.endpoints?.["vcsa"],
                  hcxCloudManager: p.properties?.endpoints?.["hcxCloudManager"],
                  nsxtManagerIp: p.properties?.endpoints?.["nsxtManagerIp"],
                  vcenterIp: p.properties?.endpoints?.["vcenterIp"],
                  hcxCloudManagerIp:
                    p.properties?.endpoints?.["hcxCloudManagerIp"],
                },
            networkBlock: p.properties?.["networkBlock"],
            managementNetwork: p.properties?.["managementNetwork"],
            provisioningNetwork: p.properties?.["provisioningNetwork"],
            vmotionNetwork: p.properties?.["vmotionNetwork"],
            vcenterPassword: p.properties?.["vcenterPassword"],
            nsxtPassword: p.properties?.["nsxtPassword"],
            vcenterCertificateThumbprint:
              p.properties?.["vcenterCertificateThumbprint"],
            nsxtCertificateThumbprint:
              p.properties?.["nsxtCertificateThumbprint"],
            externalCloudLinks: p.properties?.["externalCloudLinks"],
            secondaryCircuit: !p.properties?.secondaryCircuit
              ? undefined
              : {
                  primarySubnet:
                    p.properties?.secondaryCircuit?.["primarySubnet"],
                  secondarySubnet:
                    p.properties?.secondaryCircuit?.["secondarySubnet"],
                  expressRouteID:
                    p.properties?.secondaryCircuit?.["expressRouteID"],
                  expressRoutePrivatePeeringID:
                    p.properties?.secondaryCircuit?.[
                      "expressRoutePrivatePeeringID"
                    ],
                },
            nsxPublicIpQuotaRaised: p.properties?.["nsxPublicIpQuotaRaised"],
            virtualNetworkId: p.properties?.["virtualNetworkId"],
            dnsZoneType: p.properties?.["dnsZoneType"],
          },
      sku: {
        name: p.sku["name"],
        tier: p.sku["tier"],
        size: p.sku["size"],
        family: p.sku["family"],
        capacity: p.sku["capacity"],
      },
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List PrivateCloud resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: PrivateCloudsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateCloud> {
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

export function _listInSubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateCloudsListInSubscription200Response
  | PrivateCloudsListInSubscriptionDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listInSubscriptionDeserialize(
  result:
    | PrivateCloudsListInSubscription200Response
    | PrivateCloudsListInSubscriptionDefaultResponse,
): Promise<PrivateCloudListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      location: p["location"],
      tags: p["tags"],
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
            managementCluster: {
              clusterSize: p.properties?.managementCluster["clusterSize"],
              provisioningState:
                p.properties?.managementCluster["provisioningState"],
              clusterId: p.properties?.managementCluster["clusterId"],
              hosts: p.properties?.managementCluster["hosts"],
              vsanDatastoreName:
                p.properties?.managementCluster["vsanDatastoreName"],
            },
            internet: p.properties?.["internet"],
            identitySources:
              p.properties?.["identitySources"] === undefined
                ? p.properties?.["identitySources"]
                : p.properties?.["identitySources"].map((p) => ({
                    name: p["name"],
                    alias: p["alias"],
                    domain: p["domain"],
                    baseUserDN: p["baseUserDN"],
                    baseGroupDN: p["baseGroupDN"],
                    primaryServer: p["primaryServer"],
                    secondaryServer: p["secondaryServer"],
                    ssl: p["ssl"],
                    username: p["username"],
                    password: p["password"],
                  })),
            availability: !p.properties?.availability
              ? undefined
              : {
                  strategy: p.properties?.availability?.["strategy"],
                  zone: p.properties?.availability?.["zone"],
                  secondaryZone: p.properties?.availability?.["secondaryZone"],
                },
            encryption: !p.properties?.encryption
              ? undefined
              : {
                  status: p.properties?.encryption?.["status"],
                  keyVaultProperties: !p.properties?.encryption
                    ?.keyVaultProperties
                    ? undefined
                    : {
                        keyName:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyName"
                          ],
                        keyVersion:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyVersion"
                          ],
                        autoDetectedKeyVersion:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "autoDetectedKeyVersion"
                          ],
                        keyVaultUrl:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyVaultUrl"
                          ],
                        keyState:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "keyState"
                          ],
                        versionType:
                          p.properties?.encryption?.keyVaultProperties?.[
                            "versionType"
                          ],
                      },
                },
            extendedNetworkBlocks: p.properties?.["extendedNetworkBlocks"],
            provisioningState: p.properties?.["provisioningState"],
            circuit: !p.properties?.circuit
              ? undefined
              : {
                  primarySubnet: p.properties?.circuit?.["primarySubnet"],
                  secondarySubnet: p.properties?.circuit?.["secondarySubnet"],
                  expressRouteID: p.properties?.circuit?.["expressRouteID"],
                  expressRoutePrivatePeeringID:
                    p.properties?.circuit?.["expressRoutePrivatePeeringID"],
                },
            endpoints: !p.properties?.endpoints
              ? undefined
              : {
                  nsxtManager: p.properties?.endpoints?.["nsxtManager"],
                  vcsa: p.properties?.endpoints?.["vcsa"],
                  hcxCloudManager: p.properties?.endpoints?.["hcxCloudManager"],
                  nsxtManagerIp: p.properties?.endpoints?.["nsxtManagerIp"],
                  vcenterIp: p.properties?.endpoints?.["vcenterIp"],
                  hcxCloudManagerIp:
                    p.properties?.endpoints?.["hcxCloudManagerIp"],
                },
            networkBlock: p.properties?.["networkBlock"],
            managementNetwork: p.properties?.["managementNetwork"],
            provisioningNetwork: p.properties?.["provisioningNetwork"],
            vmotionNetwork: p.properties?.["vmotionNetwork"],
            vcenterPassword: p.properties?.["vcenterPassword"],
            nsxtPassword: p.properties?.["nsxtPassword"],
            vcenterCertificateThumbprint:
              p.properties?.["vcenterCertificateThumbprint"],
            nsxtCertificateThumbprint:
              p.properties?.["nsxtCertificateThumbprint"],
            externalCloudLinks: p.properties?.["externalCloudLinks"],
            secondaryCircuit: !p.properties?.secondaryCircuit
              ? undefined
              : {
                  primarySubnet:
                    p.properties?.secondaryCircuit?.["primarySubnet"],
                  secondarySubnet:
                    p.properties?.secondaryCircuit?.["secondarySubnet"],
                  expressRouteID:
                    p.properties?.secondaryCircuit?.["expressRouteID"],
                  expressRoutePrivatePeeringID:
                    p.properties?.secondaryCircuit?.[
                      "expressRoutePrivatePeeringID"
                    ],
                },
            nsxPublicIpQuotaRaised: p.properties?.["nsxPublicIpQuotaRaised"],
            virtualNetworkId: p.properties?.["virtualNetworkId"],
            dnsZoneType: p.properties?.["dnsZoneType"],
          },
      sku: {
        name: p.sku["name"],
        tier: p.sku["tier"],
        size: p.sku["size"],
        family: p.sku["family"],
        capacity: p.sku["capacity"],
      },
      identity: !p.identity
        ? undefined
        : {
            tenantId: p.identity?.["tenantId"],
            principalId: p.identity?.["principalId"],
            type: p.identity?.["type"],
          },
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List PrivateCloud resources by subscription ID */
export function listInSubscription(
  context: Client,
  subscriptionId: string,
  options: PrivateCloudsListInSubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<PrivateCloud> {
  return buildPagedAsyncIterator(
    context,
    () => _listInSubscriptionSend(context, subscriptionId, options),
    _listInSubscriptionDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): StreamableMethod<
  PrivateCloudsGet200Response | PrivateCloudsGetDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getDeserialize(
  result: PrivateCloudsGet200Response | PrivateCloudsGetDefaultResponse,
): Promise<PrivateCloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p) => ({
                  name: p["name"],
                  alias: p["alias"],
                  domain: p["domain"],
                  baseUserDN: p["baseUserDN"],
                  baseGroupDN: p["baseGroupDN"],
                  primaryServer: p["primaryServer"],
                  secondaryServer: p["secondaryServer"],
                  ssl: p["ssl"],
                  username: p["username"],
                  password: p["password"],
                })),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Get a PrivateCloud */
export async function get(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsGetOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
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
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PrivateCloudsCreateOrUpdate200Response
  | PrivateCloudsCreateOrUpdate201Response
  | PrivateCloudsCreateOrUpdateDefaultResponse
  | PrivateCloudsCreateOrUpdateLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        location: privateCloud["location"],
        tags: privateCloud["tags"],
        properties: !privateCloud.properties
          ? undefined
          : {
              managementCluster: {
                clusterSize:
                  privateCloud.properties?.managementCluster["clusterSize"],
                hosts: privateCloud.properties?.managementCluster["hosts"],
                vsanDatastoreName:
                  privateCloud.properties?.managementCluster[
                    "vsanDatastoreName"
                  ],
              },
              internet: privateCloud.properties?.["internet"],
              identitySources:
                privateCloud.properties?.["identitySources"] === undefined
                  ? privateCloud.properties?.["identitySources"]
                  : privateCloud.properties?.["identitySources"].map((p) => ({
                      name: p["name"],
                      alias: p["alias"],
                      domain: p["domain"],
                      baseUserDN: p["baseUserDN"],
                      baseGroupDN: p["baseGroupDN"],
                      primaryServer: p["primaryServer"],
                      secondaryServer: p["secondaryServer"],
                      ssl: p["ssl"],
                      username: p["username"],
                      password: p["password"],
                    })),
              availability: !privateCloud.properties?.availability
                ? undefined
                : {
                    strategy:
                      privateCloud.properties?.availability?.["strategy"],
                    zone: privateCloud.properties?.availability?.["zone"],
                    secondaryZone:
                      privateCloud.properties?.availability?.["secondaryZone"],
                  },
              encryption: !privateCloud.properties?.encryption
                ? undefined
                : {
                    status: privateCloud.properties?.encryption?.["status"],
                    keyVaultProperties: !privateCloud.properties?.encryption
                      ?.keyVaultProperties
                      ? undefined
                      : {
                          keyName:
                            privateCloud.properties?.encryption
                              ?.keyVaultProperties?.["keyName"],
                          keyVersion:
                            privateCloud.properties?.encryption
                              ?.keyVaultProperties?.["keyVersion"],
                          keyVaultUrl:
                            privateCloud.properties?.encryption
                              ?.keyVaultProperties?.["keyVaultUrl"],
                        },
                  },
              extendedNetworkBlocks:
                privateCloud.properties?.["extendedNetworkBlocks"],
              circuit: !privateCloud.properties?.circuit ? undefined : {},
              networkBlock: privateCloud.properties?.["networkBlock"],
              vcenterPassword: privateCloud.properties?.["vcenterPassword"],
              nsxtPassword: privateCloud.properties?.["nsxtPassword"],
              secondaryCircuit: !privateCloud.properties?.secondaryCircuit
                ? undefined
                : {},
              virtualNetworkId: privateCloud.properties?.["virtualNetworkId"],
              dnsZoneType: privateCloud.properties?.["dnsZoneType"],
            },
        sku: {
          name: privateCloud.sku["name"],
          tier: privateCloud.sku["tier"],
          size: privateCloud.sku["size"],
          family: privateCloud.sku["family"],
          capacity: privateCloud.sku["capacity"],
        },
        identity: !privateCloud.identity
          ? undefined
          : { type: privateCloud.identity?.["type"] },
      },
    });
}

export async function _createOrUpdateDeserialize(
  result:
    | PrivateCloudsCreateOrUpdate200Response
    | PrivateCloudsCreateOrUpdate201Response
    | PrivateCloudsCreateOrUpdateDefaultResponse
    | PrivateCloudsCreateOrUpdateLogicalResponse,
): Promise<PrivateCloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateCloudsCreateOrUpdateLogicalResponse;
  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p) => ({
                  name: p["name"],
                  alias: p["alias"],
                  domain: p["domain"],
                  baseUserDN: p["baseUserDN"],
                  baseGroupDN: p["baseGroupDN"],
                  primaryServer: p["primaryServer"],
                  secondaryServer: p["secondaryServer"],
                  ssl: p["ssl"],
                  username: p["username"],
                  password: p["password"],
                })),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Create a PrivateCloud */
export function createOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloud: PrivateCloud,
  options: PrivateCloudsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<PrivateCloud>, PrivateCloud> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        privateCloud,
        options,
      ),
  }) as PollerLike<OperationState<PrivateCloud>, PrivateCloud>;
}

export function _updateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PrivateCloudsUpdate200Response
  | PrivateCloudsUpdate201Response
  | PrivateCloudsUpdateDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: privateCloudUpdate["tags"],
        sku: !privateCloudUpdate.sku
          ? undefined
          : {
              name: privateCloudUpdate.sku?.["name"],
              tier: privateCloudUpdate.sku?.["tier"],
              size: privateCloudUpdate.sku?.["size"],
              family: privateCloudUpdate.sku?.["family"],
              capacity: privateCloudUpdate.sku?.["capacity"],
            },
        identity: !privateCloudUpdate.identity
          ? undefined
          : { type: privateCloudUpdate.identity?.["type"] },
        properties: !privateCloudUpdate.properties
          ? undefined
          : {
              managementCluster: !privateCloudUpdate.properties
                ?.managementCluster
                ? undefined
                : {
                    clusterSize:
                      privateCloudUpdate.properties?.managementCluster?.[
                        "clusterSize"
                      ],
                    hosts:
                      privateCloudUpdate.properties?.managementCluster?.[
                        "hosts"
                      ],
                    vsanDatastoreName:
                      privateCloudUpdate.properties?.managementCluster?.[
                        "vsanDatastoreName"
                      ],
                  },
              internet: privateCloudUpdate.properties?.["internet"],
              identitySources:
                privateCloudUpdate.properties?.["identitySources"] === undefined
                  ? privateCloudUpdate.properties?.["identitySources"]
                  : privateCloudUpdate.properties?.["identitySources"].map(
                      (p) => ({
                        name: p["name"],
                        alias: p["alias"],
                        domain: p["domain"],
                        baseUserDN: p["baseUserDN"],
                        baseGroupDN: p["baseGroupDN"],
                        primaryServer: p["primaryServer"],
                        secondaryServer: p["secondaryServer"],
                        ssl: p["ssl"],
                        username: p["username"],
                        password: p["password"],
                      }),
                    ),
              availability: !privateCloudUpdate.properties?.availability
                ? undefined
                : {
                    strategy:
                      privateCloudUpdate.properties?.availability?.["strategy"],
                    zone: privateCloudUpdate.properties?.availability?.["zone"],
                    secondaryZone:
                      privateCloudUpdate.properties?.availability?.[
                        "secondaryZone"
                      ],
                  },
              encryption: !privateCloudUpdate.properties?.encryption
                ? undefined
                : {
                    status:
                      privateCloudUpdate.properties?.encryption?.["status"],
                    keyVaultProperties: !privateCloudUpdate.properties
                      ?.encryption?.keyVaultProperties
                      ? undefined
                      : {
                          keyName:
                            privateCloudUpdate.properties?.encryption
                              ?.keyVaultProperties?.["keyName"],
                          keyVersion:
                            privateCloudUpdate.properties?.encryption
                              ?.keyVaultProperties?.["keyVersion"],
                          keyVaultUrl:
                            privateCloudUpdate.properties?.encryption
                              ?.keyVaultProperties?.["keyVaultUrl"],
                        },
                  },
              extendedNetworkBlocks:
                privateCloudUpdate.properties?.["extendedNetworkBlocks"],
              dnsZoneType: privateCloudUpdate.properties?.["dnsZoneType"],
            },
      },
    });
}

export async function _updateDeserialize(
  result:
    | PrivateCloudsUpdate200Response
    | PrivateCloudsUpdate201Response
    | PrivateCloudsUpdateDefaultResponse,
): Promise<PrivateCloud> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    location: result.body["location"],
    tags: result.body["tags"],
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
          managementCluster: {
            clusterSize:
              result.body.properties?.managementCluster["clusterSize"],
            provisioningState:
              result.body.properties?.managementCluster["provisioningState"],
            clusterId: result.body.properties?.managementCluster["clusterId"],
            hosts: result.body.properties?.managementCluster["hosts"],
            vsanDatastoreName:
              result.body.properties?.managementCluster["vsanDatastoreName"],
          },
          internet: result.body.properties?.["internet"],
          identitySources:
            result.body.properties?.["identitySources"] === undefined
              ? result.body.properties?.["identitySources"]
              : result.body.properties?.["identitySources"].map((p) => ({
                  name: p["name"],
                  alias: p["alias"],
                  domain: p["domain"],
                  baseUserDN: p["baseUserDN"],
                  baseGroupDN: p["baseGroupDN"],
                  primaryServer: p["primaryServer"],
                  secondaryServer: p["secondaryServer"],
                  ssl: p["ssl"],
                  username: p["username"],
                  password: p["password"],
                })),
          availability: !result.body.properties?.availability
            ? undefined
            : {
                strategy: result.body.properties?.availability?.["strategy"],
                zone: result.body.properties?.availability?.["zone"],
                secondaryZone:
                  result.body.properties?.availability?.["secondaryZone"],
              },
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                status: result.body.properties?.encryption?.["status"],
                keyVaultProperties: !result.body.properties?.encryption
                  ?.keyVaultProperties
                  ? undefined
                  : {
                      keyName:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyName"],
                      keyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVersion"],
                      autoDetectedKeyVersion:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["autoDetectedKeyVersion"],
                      keyVaultUrl:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyVaultUrl"],
                      keyState:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["keyState"],
                      versionType:
                        result.body.properties?.encryption
                          ?.keyVaultProperties?.["versionType"],
                    },
              },
          extendedNetworkBlocks:
            result.body.properties?.["extendedNetworkBlocks"],
          provisioningState: result.body.properties?.["provisioningState"],
          circuit: !result.body.properties?.circuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.circuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.circuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.circuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.circuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          endpoints: !result.body.properties?.endpoints
            ? undefined
            : {
                nsxtManager: result.body.properties?.endpoints?.["nsxtManager"],
                vcsa: result.body.properties?.endpoints?.["vcsa"],
                hcxCloudManager:
                  result.body.properties?.endpoints?.["hcxCloudManager"],
                nsxtManagerIp:
                  result.body.properties?.endpoints?.["nsxtManagerIp"],
                vcenterIp: result.body.properties?.endpoints?.["vcenterIp"],
                hcxCloudManagerIp:
                  result.body.properties?.endpoints?.["hcxCloudManagerIp"],
              },
          networkBlock: result.body.properties?.["networkBlock"],
          managementNetwork: result.body.properties?.["managementNetwork"],
          provisioningNetwork: result.body.properties?.["provisioningNetwork"],
          vmotionNetwork: result.body.properties?.["vmotionNetwork"],
          vcenterPassword: result.body.properties?.["vcenterPassword"],
          nsxtPassword: result.body.properties?.["nsxtPassword"],
          vcenterCertificateThumbprint:
            result.body.properties?.["vcenterCertificateThumbprint"],
          nsxtCertificateThumbprint:
            result.body.properties?.["nsxtCertificateThumbprint"],
          externalCloudLinks: result.body.properties?.["externalCloudLinks"],
          secondaryCircuit: !result.body.properties?.secondaryCircuit
            ? undefined
            : {
                primarySubnet:
                  result.body.properties?.secondaryCircuit?.["primarySubnet"],
                secondarySubnet:
                  result.body.properties?.secondaryCircuit?.["secondarySubnet"],
                expressRouteID:
                  result.body.properties?.secondaryCircuit?.["expressRouteID"],
                expressRoutePrivatePeeringID:
                  result.body.properties?.secondaryCircuit?.[
                    "expressRoutePrivatePeeringID"
                  ],
              },
          nsxPublicIpQuotaRaised:
            result.body.properties?.["nsxPublicIpQuotaRaised"],
          virtualNetworkId: result.body.properties?.["virtualNetworkId"],
          dnsZoneType: result.body.properties?.["dnsZoneType"],
        },
    sku: {
      name: result.body.sku["name"],
      tier: result.body.sku["tier"],
      size: result.body.sku["size"],
      family: result.body.sku["family"],
      capacity: result.body.sku["capacity"],
    },
    identity: !result.body.identity
      ? undefined
      : {
          tenantId: result.body.identity?.["tenantId"],
          principalId: result.body.identity?.["principalId"],
          type: result.body.identity?.["type"],
        },
  };
}

/** Update a PrivateCloud */
export async function update(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  privateCloudUpdate: PrivateCloudUpdate,
  options: PrivateCloudsUpdateOptionalParams = { requestOptions: {} },
): Promise<PrivateCloud> {
  const result = await _updateSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    privateCloudUpdate,
    options,
  );
  return _updateDeserialize(result);
}

export function _$deleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | PrivateCloudsDelete200Response
  | PrivateCloudsDelete202Response
  | PrivateCloudsDelete204Response
  | PrivateCloudsDeleteDefaultResponse
  | PrivateCloudsDeleteLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _$deleteDeserialize(
  result:
    | PrivateCloudsDelete200Response
    | PrivateCloudsDelete202Response
    | PrivateCloudsDelete204Response
    | PrivateCloudsDeleteDefaultResponse
    | PrivateCloudsDeleteLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateCloudsDeleteLogicalResponse;
  return;
}

/** Delete a PrivateCloud */
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
  options: PrivateCloudsDeleteOptionalParams = { requestOptions: {} },
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

export function _rotateVcenterPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateCloudsRotateVcenterPassword202Response
  | PrivateCloudsRotateVcenterPassword204Response
  | PrivateCloudsRotateVcenterPasswordDefaultResponse
  | PrivateCloudsRotateVcenterPasswordLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _rotateVcenterPasswordDeserialize(
  result:
    | PrivateCloudsRotateVcenterPassword202Response
    | PrivateCloudsRotateVcenterPassword204Response
    | PrivateCloudsRotateVcenterPasswordDefaultResponse
    | PrivateCloudsRotateVcenterPasswordLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateCloudsRotateVcenterPasswordLogicalResponse;
  return;
}

/** Rotate the vCenter password */
export function rotateVcenterPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateVcenterPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _rotateVcenterPasswordDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _rotateVcenterPasswordSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _rotateNsxtPasswordSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateCloudsRotateNsxtPassword202Response
  | PrivateCloudsRotateNsxtPassword204Response
  | PrivateCloudsRotateNsxtPasswordDefaultResponse
  | PrivateCloudsRotateNsxtPasswordLogicalResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _rotateNsxtPasswordDeserialize(
  result:
    | PrivateCloudsRotateNsxtPassword202Response
    | PrivateCloudsRotateNsxtPassword204Response
    | PrivateCloudsRotateNsxtPasswordDefaultResponse
    | PrivateCloudsRotateNsxtPasswordLogicalResponse,
): Promise<void> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  result = result as PrivateCloudsRotateNsxtPasswordLogicalResponse;
  return;
}

/** Rotate the NSX-T Manager password */
export function rotateNsxtPassword(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsRotateNsxtPasswordOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _rotateNsxtPasswordDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _rotateNsxtPasswordSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
  }) as PollerLike<OperationState<void>, void>;
}

export function _listAdminCredentialsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod<
  | PrivateCloudsListAdminCredentials200Response
  | PrivateCloudsListAdminCredentialsDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _listAdminCredentialsDeserialize(
  result:
    | PrivateCloudsListAdminCredentials200Response
    | PrivateCloudsListAdminCredentialsDefaultResponse,
): Promise<AdminCredentials> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    nsxtUsername: result.body["nsxtUsername"],
    nsxtPassword: result.body["nsxtPassword"],
    vcenterUsername: result.body["vcenterUsername"],
    vcenterPassword: result.body["vcenterPassword"],
  };
}

/** List the admin credentials for the private cloud */
export async function listAdminCredentials(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: PrivateCloudsListAdminCredentialsOptionalParams = {
    requestOptions: {},
  },
): Promise<AdminCredentials> {
  const result = await _listAdminCredentialsSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    options,
  );
  return _listAdminCredentialsDeserialize(result);
}
