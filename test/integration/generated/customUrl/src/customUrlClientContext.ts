/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { CustomUrlClientOptionalParams } from "./models";

export class CustomUrlClientContext extends coreClient.ServiceClient {
  host: string;

  /**
   * Initializes a new instance of the CustomUrlClientContext class.
   * @param options The parameter options
   */
  constructor(options?: CustomUrlClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: CustomUrlClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "http://{accountName}{host}"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.host = options.host || "host";
  }
}
