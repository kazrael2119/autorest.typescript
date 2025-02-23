import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  TriggerResource,
  TriggersListByFactoryOptionalParams,
  TriggerFilterParameters,
  TriggersQueryByFactoryOptionalParams,
  TriggersQueryByFactoryResponse,
  TriggersCreateOrUpdateOptionalParams,
  TriggersCreateOrUpdateResponse,
  TriggersGetOptionalParams,
  TriggersGetResponse,
  TriggersDeleteOptionalParams,
  TriggersSubscribeToEventsOptionalParams,
  TriggersSubscribeToEventsResponse,
  TriggersGetEventSubscriptionStatusOptionalParams,
  TriggersGetEventSubscriptionStatusResponse,
  TriggersUnsubscribeFromEventsOptionalParams,
  TriggersUnsubscribeFromEventsResponse,
  TriggersStartOptionalParams,
  TriggersStopOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Triggers. */
export interface Triggers {
  /**
   * Lists triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: TriggersListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<TriggerResource>;
  /**
   * Query triggers.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param filterParameters Parameters to filter the triggers.
   * @param options The options parameters.
   */
  queryByFactory(
    resourceGroupName: string,
    factoryName: string,
    filterParameters: TriggerFilterParameters,
    options?: TriggersQueryByFactoryOptionalParams
  ): Promise<TriggersQueryByFactoryResponse>;
  /**
   * Creates or updates a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    trigger: TriggerResource,
    options?: TriggersCreateOrUpdateOptionalParams
  ): Promise<TriggersCreateOrUpdateResponse>;
  /**
   * Gets a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersGetOptionalParams
  ): Promise<TriggersGetResponse>;
  /**
   * Deletes a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginSubscribeToEvents(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersSubscribeToEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggersSubscribeToEventsResponse>,
      TriggersSubscribeToEventsResponse
    >
  >;
  /**
   * Subscribe event trigger to events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginSubscribeToEventsAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersSubscribeToEventsOptionalParams
  ): Promise<TriggersSubscribeToEventsResponse>;
  /**
   * Get a trigger's event subscription status.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  getEventSubscriptionStatus(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersGetEventSubscriptionStatusOptionalParams
  ): Promise<TriggersGetEventSubscriptionStatusResponse>;
  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginUnsubscribeFromEvents(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersUnsubscribeFromEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggersUnsubscribeFromEventsResponse>,
      TriggersUnsubscribeFromEventsResponse
    >
  >;
  /**
   * Unsubscribe event trigger from events.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginUnsubscribeFromEventsAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersUnsubscribeFromEventsOptionalParams
  ): Promise<TriggersUnsubscribeFromEventsResponse>;
  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStartOptionalParams
  ): Promise<void>;
  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginStop(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stops a trigger.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  beginStopAndWait(
    resourceGroupName: string,
    factoryName: string,
    triggerName: string,
    options?: TriggersStopOptionalParams
  ): Promise<void>;
}
