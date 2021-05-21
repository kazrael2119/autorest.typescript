/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { RequiredOptionalClientOptionalParams } from "./models";

export class RequiredOptionalClientContext extends coreClient.ServiceClient {
  $host: string;
  requiredGlobalPath: string;
  requiredGlobalQuery: string;
  optionalGlobalQuery?: number;

  /**
   * Initializes a new instance of the RequiredOptionalClientContext class.
   * @param requiredGlobalPath number of items to skip
   * @param requiredGlobalQuery number of items to skip
   * @param options The parameter options
   */
  constructor(
    requiredGlobalPath: string,
    requiredGlobalQuery: string,
    options?: RequiredOptionalClientOptionalParams
  ) {
    if (requiredGlobalPath === undefined) {
      throw new Error("'requiredGlobalPath' cannot be null");
    }
    if (requiredGlobalQuery === undefined) {
      throw new Error("'requiredGlobalQuery' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: RequiredOptionalClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "http://localhost:3000"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.requiredGlobalPath = requiredGlobalPath;
    this.requiredGlobalQuery = requiredGlobalQuery;

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
  }
}
