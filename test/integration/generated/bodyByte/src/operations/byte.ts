/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyByteClient } from "../bodyByteClient";
import {
  ByteGetNullResponse,
  ByteGetEmptyResponse,
  ByteGetNonAsciiResponse,
  ByteGetInvalidResponse
} from "../models";

/**
 * Class representing a Byte.
 */
export class Byte {
  private readonly client: BodyByteClient;

  /**
   * Initialize a new instance of the class Byte class.
   * @param client Reference to the service client
   */
  constructor(client: BodyByteClient) {
    this.client = client;
  }

  /**
   * Get null byte value
   * @param options The options parameters.
   */
  getNull(options?: coreHttp.OperationOptions): Promise<ByteGetNullResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNullOperationSpec
    ) as Promise<ByteGetNullResponse>;
  }

  /**
   * Get empty byte value ''
   * @param options The options parameters.
   */
  getEmpty(options?: coreHttp.OperationOptions): Promise<ByteGetEmptyResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getEmptyOperationSpec
    ) as Promise<ByteGetEmptyResponse>;
  }

  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  getNonAscii(
    options?: coreHttp.OperationOptions
  ): Promise<ByteGetNonAsciiResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNonAsciiOperationSpec
    ) as Promise<ByteGetNonAsciiResponse>;
  }

  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putNonAscii(
    byteBody: Uint8Array,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      byteBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putNonAsciiOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get invalid byte value ':::SWAGGER::::'
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<ByteGetInvalidResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getInvalidOperationSpec
    ) as Promise<ByteGetInvalidResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/byte/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/byte/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNonAsciiOperationSpec: coreHttp.OperationSpec = {
  path: "/byte/nonAscii",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putNonAsciiOperationSpec: coreHttp.OperationSpec = {
  path: "/byte/nonAscii",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.byteBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/byte/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "ByteArray" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
