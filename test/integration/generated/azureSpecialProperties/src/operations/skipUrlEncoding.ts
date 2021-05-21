/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SkipUrlEncoding } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureSpecialPropertiesClientContext } from "../azureSpecialPropertiesClientContext";
import {
  SkipUrlEncodingGetMethodPathValidOptionalParams,
  SkipUrlEncodingGetPathValidOptionalParams,
  SkipUrlEncodingGetSwaggerPathValidOptionalParams,
  SkipUrlEncodingGetMethodQueryValidOptionalParams,
  SkipUrlEncodingGetMethodQueryNullOptionalParams,
  SkipUrlEncodingGetPathQueryValidOptionalParams,
  SkipUrlEncodingGetSwaggerQueryValidOptionalParams
} from "../models";

/** Class representing a SkipUrlEncoding. */
export class SkipUrlEncodingImpl implements SkipUrlEncoding {
  private readonly client: AzureSpecialPropertiesClientContext;

  /**
   * Initialize a new instance of the class SkipUrlEncoding class.
   * @param client Reference to the service client
   */
  constructor(client: AzureSpecialPropertiesClientContext) {
    this.client = client;
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getMethodPathValid(
    unencodedPathParam: string,
    options?: SkipUrlEncodingGetMethodPathValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { unencodedPathParam, options },
      getMethodPathValidOperationSpec
    );
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param unencodedPathParam Unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getPathValid(
    unencodedPathParam: string,
    options?: SkipUrlEncodingGetPathValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { unencodedPathParam, options },
      getPathValidOperationSpec
    );
  }

  /**
   * Get method with unencoded path parameter with value 'path1/path2/path3'
   * @param options The options parameters.
   */
  getSwaggerPathValid(
    options?: SkipUrlEncodingGetSwaggerPathValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getSwaggerPathValidOperationSpec
    );
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getMethodQueryValid(
    q1: string,
    options?: SkipUrlEncodingGetMethodQueryValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { q1, options },
      getMethodQueryValidOperationSpec
    );
  }

  /**
   * Get method with unencoded query parameter with value null
   * @param options The options parameters.
   */
  getMethodQueryNull(
    options?: SkipUrlEncodingGetMethodQueryNullOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getMethodQueryNullOperationSpec
    );
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param q1 Unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getPathQueryValid(
    q1: string,
    options?: SkipUrlEncodingGetPathQueryValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { q1, options },
      getPathQueryValidOperationSpec
    );
  }

  /**
   * Get method with unencoded query parameter with value 'value1&q2=value2&q3=value3'
   * @param options The options parameters.
   */
  getSwaggerQueryValid(
    options?: SkipUrlEncodingGetSwaggerQueryValidOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      getSwaggerQueryValidOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getMethodPathValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam],
  headerParameters: [Parameters.accept],
  serializer
};
const getPathValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/path/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam],
  headerParameters: [Parameters.accept],
  serializer
};
const getSwaggerPathValidOperationSpec: coreClient.OperationSpec = {
  path:
    "/azurespecials/skipUrlEncoding/swagger/path/valid/{unencodedPathParam}",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host, Parameters.unencodedPathParam1],
  headerParameters: [Parameters.accept],
  serializer
};
const getMethodQueryValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getMethodQueryNullOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/method/query/null",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q11],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getPathQueryValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/path/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getSwaggerQueryValidOperationSpec: coreClient.OperationSpec = {
  path: "/azurespecials/skipUrlEncoding/swagger/query/valid",
  httpMethod: "GET",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.q12],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
