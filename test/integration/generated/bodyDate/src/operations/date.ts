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
import { BodyDateClient } from "../bodyDateClient";
import {
  DateGetNullResponse,
  DateGetInvalidDateResponse,
  DateGetOverflowDateResponse,
  DateGetUnderflowDateResponse,
  DateGetMaxDateResponse,
  DateGetMinDateResponse
} from "../models";

/**
 * Class representing a DateOperations.
 */
export class DateOperations {
  private readonly client: BodyDateClient;

  /**
   * Initialize a new instance of the class DateOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateClient) {
    this.client = client;
  }

  /**
   * Get null date value
   * @param options The options parameters.
   */
  getNull(options?: coreHttp.OperationOptions): Promise<DateGetNullResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getNullOperationSpec
    ) as Promise<DateGetNullResponse>;
  }

  /**
   * Get invalid date value
   * @param options The options parameters.
   */
  getInvalidDate(
    options?: coreHttp.OperationOptions
  ): Promise<DateGetInvalidDateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getInvalidDateOperationSpec
    ) as Promise<DateGetInvalidDateResponse>;
  }

  /**
   * Get overflow date value
   * @param options The options parameters.
   */
  getOverflowDate(
    options?: coreHttp.OperationOptions
  ): Promise<DateGetOverflowDateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOverflowDateOperationSpec
    ) as Promise<DateGetOverflowDateResponse>;
  }

  /**
   * Get underflow date value
   * @param options The options parameters.
   */
  getUnderflowDate(
    options?: coreHttp.OperationOptions
  ): Promise<DateGetUnderflowDateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getUnderflowDateOperationSpec
    ) as Promise<DateGetUnderflowDateResponse>;
  }

  /**
   * Put max date value 9999-12-31
   * @param dateBody date body
   * @param options The options parameters.
   */
  putMaxDate(
    dateBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      dateBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putMaxDateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get max date value 9999-12-31
   * @param options The options parameters.
   */
  getMaxDate(
    options?: coreHttp.OperationOptions
  ): Promise<DateGetMaxDateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMaxDateOperationSpec
    ) as Promise<DateGetMaxDateResponse>;
  }

  /**
   * Put min date value 0000-01-01
   * @param dateBody date body
   * @param options The options parameters.
   */
  putMinDate(
    dateBody: Date,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      dateBody,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      putMinDateOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get min date value 0000-01-01
   * @param options The options parameters.
   */
  getMinDate(
    options?: coreHttp.OperationOptions
  ): Promise<DateGetMinDateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getMinDateOperationSpec
    ) as Promise<DateGetMinDateResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/date/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getInvalidDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/invaliddate",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOverflowDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/overflowdate",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getUnderflowDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/underflowdate",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putMaxDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/max",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.dateBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMaxDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/max",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putMinDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/min",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.dateBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getMinDateOperationSpec: coreHttp.OperationSpec = {
  path: "/date/min",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Date" } }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
