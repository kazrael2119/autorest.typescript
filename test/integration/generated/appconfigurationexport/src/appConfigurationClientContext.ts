/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { AppConfigurationClientOptionalParams } from "./models";

/** @internal */
export class AppConfigurationClientContext extends coreClient.ServiceClient {
  endpoint: string;
  syncToken?: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AppConfigurationClientContext class.
   * @param endpoint The endpoint of the App Configuration instance to send requests to.
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    options?: AppConfigurationClientOptionalParams
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AppConfigurationClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-appconfiguration/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;
    options.userAgentOptions = {
      userAgentPrefix: userAgentPrefix
    };

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{endpoint}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "1.0";
  }
}
