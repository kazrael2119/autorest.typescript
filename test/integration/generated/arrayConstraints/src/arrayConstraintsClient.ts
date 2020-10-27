/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { ArrayConstraintsClientContext } from "./arrayConstraintsClientContext";
import {
  ArrayConstraintsClientOptionalParams,
  Enum0,
  Product,
  ArrayConstraintsClientPostValueOptionalParams,
  ArrayConstraintsClientPostValueResponse,
  ArrayConstraintsClientApiV1ValueGetOptionalParams,
  ArrayConstraintsClientApiV1ValueGetResponse
} from "./models";

export class ArrayConstraintsClient extends ArrayConstraintsClientContext {
  /**
   * Initializes a new instance of the ArrayConstraintsClient class.
   * @param $host server parameter
   * @param apiVersion
   * @param options The parameter options
   */
  constructor(
    $host: string,
    apiVersion: Enum0,
    options?: ArrayConstraintsClientOptionalParams
  ) {
    super($host, apiVersion, options);
  }

  /**
   * @param arrayBody array of complex type with [{'integer': 1 'string': '2'}, {'integer': 3, 'string':
   *                  '4'}, {'integer': 5, 'string': '6'}]
   * @param options The options parameters.
   */
  postValue(
    arrayBody: Product[],
    options?: ArrayConstraintsClientPostValueOptionalParams
  ): Promise<ArrayConstraintsClientPostValueResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { arrayBody, options: operationOptions },
      postValueOperationSpec
    ) as Promise<ArrayConstraintsClientPostValueResponse>;
  }

  /**
   * @param options The options parameters.
   */
  apiV1ValueGet(
    options?: ArrayConstraintsClientApiV1ValueGetOptionalParams
  ): Promise<ArrayConstraintsClientApiV1ValueGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      apiV1ValueGetOperationSpec
    ) as Promise<ArrayConstraintsClientApiV1ValueGetResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const postValueOperationSpec: coreHttp.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    }
  },
  requestBody: Parameters.arrayBody,
  queryParameters: [Parameters.pageRange],
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.apiVersion
  ],
  mediaType: "json",
  serializer
};
const apiV1ValueGetOperationSpec: coreHttp.OperationSpec = {
  path: "/api/v1/value",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    }
  },
  queryParameters: [Parameters.pageRange],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.apiVersion, Parameters.accept1],
  serializer
};
