/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Int } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyIntegerClientContext } from "../bodyIntegerClientContext";
import {
  IntGetNullOptionalParams,
  IntGetNullResponse,
  IntGetInvalidOptionalParams,
  IntGetInvalidResponse,
  IntGetOverflowInt32OptionalParams,
  IntGetOverflowInt32Response,
  IntGetUnderflowInt32OptionalParams,
  IntGetUnderflowInt32Response,
  IntGetOverflowInt64OptionalParams,
  IntGetOverflowInt64Response,
  IntGetUnderflowInt64OptionalParams,
  IntGetUnderflowInt64Response,
  IntPutMax32OptionalParams,
  IntPutMax64OptionalParams,
  IntPutMin32OptionalParams,
  IntPutMin64OptionalParams,
  IntGetUnixTimeOptionalParams,
  IntGetUnixTimeResponse,
  IntPutUnixTimeDateOptionalParams,
  IntGetInvalidUnixTimeOptionalParams,
  IntGetInvalidUnixTimeResponse,
  IntGetNullUnixTimeOptionalParams,
  IntGetNullUnixTimeResponse
} from "../models";

/** Class representing a Int. */
export class IntImpl implements Int {
  private readonly client: BodyIntegerClientContext;

  /**
   * Initialize a new instance of the class Int class.
   * @param client Reference to the service client
   */
  constructor(client: BodyIntegerClientContext) {
    this.client = client;
  }

  /**
   * Get null Int value
   * @param options The options parameters.
   */
  getNull(options?: IntGetNullOptionalParams): Promise<IntGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid Int value
   * @param options The options parameters.
   */
  getInvalid(
    options?: IntGetInvalidOptionalParams
  ): Promise<IntGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    );
  }

  /**
   * Get overflow Int32 value
   * @param options The options parameters.
   */
  getOverflowInt32(
    options?: IntGetOverflowInt32OptionalParams
  ): Promise<IntGetOverflowInt32Response> {
    return this.client.sendOperationRequest(
      { options },
      getOverflowInt32OperationSpec
    );
  }

  /**
   * Get underflow Int32 value
   * @param options The options parameters.
   */
  getUnderflowInt32(
    options?: IntGetUnderflowInt32OptionalParams
  ): Promise<IntGetUnderflowInt32Response> {
    return this.client.sendOperationRequest(
      { options },
      getUnderflowInt32OperationSpec
    );
  }

  /**
   * Get overflow Int64 value
   * @param options The options parameters.
   */
  getOverflowInt64(
    options?: IntGetOverflowInt64OptionalParams
  ): Promise<IntGetOverflowInt64Response> {
    return this.client.sendOperationRequest(
      { options },
      getOverflowInt64OperationSpec
    );
  }

  /**
   * Get underflow Int64 value
   * @param options The options parameters.
   */
  getUnderflowInt64(
    options?: IntGetUnderflowInt64OptionalParams
  ): Promise<IntGetUnderflowInt64Response> {
    return this.client.sendOperationRequest(
      { options },
      getUnderflowInt64OperationSpec
    );
  }

  /**
   * Put max int32 value
   * @param intBody int body
   * @param options The options parameters.
   */
  putMax32(
    intBody: number,
    options?: IntPutMax32OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { intBody, options },
      putMax32OperationSpec
    );
  }

  /**
   * Put max int64 value
   * @param intBody int body
   * @param options The options parameters.
   */
  putMax64(
    intBody: number,
    options?: IntPutMax64OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { intBody, options },
      putMax64OperationSpec
    );
  }

  /**
   * Put min int32 value
   * @param intBody int body
   * @param options The options parameters.
   */
  putMin32(
    intBody: number,
    options?: IntPutMin32OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { intBody, options },
      putMin32OperationSpec
    );
  }

  /**
   * Put min int64 value
   * @param intBody int body
   * @param options The options parameters.
   */
  putMin64(
    intBody: number,
    options?: IntPutMin64OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { intBody, options },
      putMin64OperationSpec
    );
  }

  /**
   * Get datetime encoded as Unix time value
   * @param options The options parameters.
   */
  getUnixTime(
    options?: IntGetUnixTimeOptionalParams
  ): Promise<IntGetUnixTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUnixTimeOperationSpec
    );
  }

  /**
   * Put datetime encoded as Unix time
   * @param intBody int body
   * @param options The options parameters.
   */
  putUnixTimeDate(
    intBody: Date,
    options?: IntPutUnixTimeDateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { intBody, options },
      putUnixTimeDateOperationSpec
    );
  }

  /**
   * Get invalid Unix time value
   * @param options The options parameters.
   */
  getInvalidUnixTime(
    options?: IntGetInvalidUnixTimeOptionalParams
  ): Promise<IntGetInvalidUnixTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidUnixTimeOperationSpec
    );
  }

  /**
   * Get null Unix time value
   * @param options The options parameters.
   */
  getNullUnixTime(
    options?: IntGetNullUnixTimeOptionalParams
  ): Promise<IntGetNullUnixTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullUnixTimeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
  path: "/int/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidOperationSpec: coreClient.OperationSpec = {
  path: "/int/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOverflowInt32OperationSpec: coreClient.OperationSpec = {
  path: "/int/overflowint32",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUnderflowInt32OperationSpec: coreClient.OperationSpec = {
  path: "/int/underflowint32",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOverflowInt64OperationSpec: coreClient.OperationSpec = {
  path: "/int/overflowint64",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUnderflowInt64OperationSpec: coreClient.OperationSpec = {
  path: "/int/underflowint64",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Number" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putMax32OperationSpec: coreClient.OperationSpec = {
  path: "/int/max/32",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putMax64OperationSpec: coreClient.OperationSpec = {
  path: "/int/max/64",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putMin32OperationSpec: coreClient.OperationSpec = {
  path: "/int/min/32",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const putMin64OperationSpec: coreClient.OperationSpec = {
  path: "/int/min/64",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getUnixTimeOperationSpec: coreClient.OperationSpec = {
  path: "/int/unixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putUnixTimeDateOperationSpec: coreClient.OperationSpec = {
  path: "/int/unixtime",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.intBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getInvalidUnixTimeOperationSpec: coreClient.OperationSpec = {
  path: "/int/invalidunixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getNullUnixTimeOperationSpec: coreClient.OperationSpec = {
  path: "/int/nullunixtime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "UnixTime" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
