/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ServerDnsAlias,
  ServerDnsAliasesListByServerOptionalParams,
  ServerDnsAliasesGetOptionalParams,
  ServerDnsAliasesGetResponse,
  ServerDnsAliasesCreateOrUpdateOptionalParams,
  ServerDnsAliasesCreateOrUpdateResponse,
  ServerDnsAliasesDeleteOptionalParams,
  ServerDnsAliasAcquisition,
  ServerDnsAliasesAcquireOptionalParams,
  ServerDnsAliasesAcquireResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerDnsAliases. */
export interface ServerDnsAliases {
  /**
   * Gets a list of server DNS aliases for a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerDnsAliasesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerDnsAlias>;
  /**
   * Gets a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesGetOptionalParams
  ): Promise<ServerDnsAliasesGetResponse>;
  /**
   * Creates a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerDnsAliasesCreateOrUpdateResponse>,
      ServerDnsAliasesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a server DNS alias.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesCreateOrUpdateOptionalParams
  ): Promise<ServerDnsAliasesCreateOrUpdateResponse>;
  /**
   * Deletes the server DNS alias with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes the server DNS alias with the given name.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    options?: ServerDnsAliasesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Acquires server DNS alias from another server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param parameters A server dns alias acquisition request.
   * @param options The options parameters.
   */
  beginAcquire(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    parameters: ServerDnsAliasAcquisition,
    options?: ServerDnsAliasesAcquireOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ServerDnsAliasesAcquireResponse>,
      ServerDnsAliasesAcquireResponse
    >
  >;
  /**
   * Acquires server DNS alias from another server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server that the alias is pointing to.
   * @param dnsAliasName The name of the server dns alias.
   * @param parameters A server dns alias acquisition request.
   * @param options The options parameters.
   */
  beginAcquireAndWait(
    resourceGroupName: string,
    serverName: string,
    dnsAliasName: string,
    parameters: ServerDnsAliasAcquisition,
    options?: ServerDnsAliasesAcquireOptionalParams
  ): Promise<ServerDnsAliasesAcquireResponse>;
}
