/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestParameterGroupingTestServiceContext } from "./autoRestParameterGroupingTestServiceContext";


class AutoRestParameterGroupingTestService extends AutoRestParameterGroupingTestServiceContext {
  // Operation groups
  parameterGrouping: operations.ParameterGrouping;

  /**
   * @class
   * Initializes a new instance of the AutoRestParameterGroupingTestService class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials Credentials needed for the client to
   * connect to Azure.
   *
   * @param {string} [baseUri] The base URI of the service.
   *
   * @param {object} [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
    this.parameterGrouping = new operations.ParameterGrouping(this);
  }
}

// Operation Specifications

export {
  AutoRestParameterGroupingTestService,
  AutoRestParameterGroupingTestServiceContext,
  Models as AutoRestParameterGroupingTestServiceModels,
  Mappers as AutoRestParameterGroupingTestServiceMappers
};
export * from "./operations";
