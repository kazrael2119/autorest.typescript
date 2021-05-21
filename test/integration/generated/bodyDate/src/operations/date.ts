/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DateOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyDateClientContext } from "../bodyDateClientContext";
import {
  DateGetNullOptionalParams,
  DateGetNullResponse,
  DateGetInvalidDateOptionalParams,
  DateGetInvalidDateResponse,
  DateGetOverflowDateOptionalParams,
  DateGetOverflowDateResponse,
  DateGetUnderflowDateOptionalParams,
  DateGetUnderflowDateResponse,
  DatePutMaxDateOptionalParams,
  DateGetMaxDateOptionalParams,
  DateGetMaxDateResponse,
  DatePutMinDateOptionalParams,
  DateGetMinDateOptionalParams,
  DateGetMinDateResponse
} from "../models";

/** Class representing a DateOperations. */
export class DateOperationsImpl implements DateOperations {
  private readonly client: BodyDateClientContext;

  /**
   * Initialize a new instance of the class DateOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDateClientContext) {
    this.client = client;
  }

  /**
   * Get null date value
   * @param options The options parameters.
   */
  getNull(options?: DateGetNullOptionalParams): Promise<DateGetNullResponse> {
    return this.client.sendOperationRequest({ options }, getNullOperationSpec);
  }

  /**
   * Get invalid date value
   * @param options The options parameters.
   */
  getInvalidDate(
    options?: DateGetInvalidDateOptionalParams
  ): Promise<DateGetInvalidDateResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidDateOperationSpec
    );
  }

  /**
   * Get overflow date value
   * @param options The options parameters.
   */
  getOverflowDate(
    options?: DateGetOverflowDateOptionalParams
  ): Promise<DateGetOverflowDateResponse> {
    return this.client.sendOperationRequest(
      { options },
      getOverflowDateOperationSpec
    );
  }

  /**
   * Get underflow date value
   * @param options The options parameters.
   */
  getUnderflowDate(
    options?: DateGetUnderflowDateOptionalParams
  ): Promise<DateGetUnderflowDateResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUnderflowDateOperationSpec
    );
  }

  /**
   * Put max date value 9999-12-31
   * @param dateBody date body
   * @param options The options parameters.
   */
  putMaxDate(
    dateBody: Date,
    options?: DatePutMaxDateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { dateBody, options },
      putMaxDateOperationSpec
    );
  }

  /**
   * Get max date value 9999-12-31
   * @param options The options parameters.
   */
  getMaxDate(
    options?: DateGetMaxDateOptionalParams
  ): Promise<DateGetMaxDateResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMaxDateOperationSpec
    );
  }

  /**
   * Put min date value 0000-01-01
   * @param dateBody date body
   * @param options The options parameters.
   */
  putMinDate(
    dateBody: Date,
    options?: DatePutMinDateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { dateBody, options },
      putMinDateOperationSpec
    );
  }

  /**
   * Get min date value 0000-01-01
   * @param options The options parameters.
   */
  getMinDate(
    options?: DateGetMinDateOptionalParams
  ): Promise<DateGetMinDateResponse> {
    return this.client.sendOperationRequest(
      { options },
      getMinDateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreClient.OperationSpec = {
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
const getInvalidDateOperationSpec: coreClient.OperationSpec = {
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
const getOverflowDateOperationSpec: coreClient.OperationSpec = {
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
const getUnderflowDateOperationSpec: coreClient.OperationSpec = {
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
const putMaxDateOperationSpec: coreClient.OperationSpec = {
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
const getMaxDateOperationSpec: coreClient.OperationSpec = {
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
const putMinDateOperationSpec: coreClient.OperationSpec = {
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
const getMinDateOperationSpec: coreClient.OperationSpec = {
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
