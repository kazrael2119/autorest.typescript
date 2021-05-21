/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  AzureFirewall,
  AzureFirewallsListOptionalParams,
  AzureFirewallsListAllOptionalParams,
  AzureFirewallsDeleteOptionalParams,
  AzureFirewallsGetOptionalParams,
  AzureFirewallsGetResponse,
  AzureFirewallsCreateOrUpdateOptionalParams,
  AzureFirewallsCreateOrUpdateResponse,
  TagsObject,
  AzureFirewallsUpdateTagsOptionalParams,
  AzureFirewallsUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureFirewalls. */
export interface AzureFirewalls {
  /**
   * Lists all Azure Firewalls in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: AzureFirewallsListOptionalParams
  ): PagedAsyncIterableIterator<AzureFirewall>;
  /**
   * Gets all the Azure Firewalls in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: AzureFirewallsListAllOptionalParams
  ): PagedAsyncIterableIterator<AzureFirewall>;
  /**
   * Deletes the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    azureFirewallName: string,
    options?: AzureFirewallsDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    azureFirewallName: string,
    options?: AzureFirewallsDeleteOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Gets the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureFirewallName: string,
    options?: AzureFirewallsGetOptionalParams
  ): Promise<AzureFirewallsGetResponse>;
  /**
   * Creates or updates the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to the create or update Azure Firewall operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    azureFirewallName: string,
    parameters: AzureFirewall,
    options?: AzureFirewallsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureFirewallsCreateOrUpdateResponse>,
      AzureFirewallsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates the specified Azure Firewall.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to the create or update Azure Firewall operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    azureFirewallName: string,
    parameters: AzureFirewall,
    options?: AzureFirewallsCreateOrUpdateOptionalParams
  ): Promise<AzureFirewallsCreateOrUpdateResponse>;
  /**
   * Updates tags of an Azure Firewall resource.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to update azure firewall tags.
   * @param options The options parameters.
   */
  beginUpdateTags(
    resourceGroupName: string,
    azureFirewallName: string,
    parameters: TagsObject,
    options?: AzureFirewallsUpdateTagsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<AzureFirewallsUpdateTagsResponse>,
      AzureFirewallsUpdateTagsResponse
    >
  >;
  /**
   * Updates tags of an Azure Firewall resource.
   * @param resourceGroupName The name of the resource group.
   * @param azureFirewallName The name of the Azure Firewall.
   * @param parameters Parameters supplied to update azure firewall tags.
   * @param options The options parameters.
   */
  beginUpdateTagsAndWait(
    resourceGroupName: string,
    azureFirewallName: string,
    parameters: TagsObject,
    options?: AzureFirewallsUpdateTagsOptionalParams
  ): Promise<AzureFirewallsUpdateTagsResponse>;
}
