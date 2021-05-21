/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Header } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HeaderClientContext } from "../headerClientContext";
import {
  HeaderParamExistingKeyOptionalParams,
  HeaderResponseExistingKeyOptionalParams,
  HeaderResponseExistingKeyResponse,
  HeaderParamProtectedKeyOptionalParams,
  HeaderResponseProtectedKeyOptionalParams,
  HeaderResponseProtectedKeyResponse,
  HeaderParamIntegerOptionalParams,
  HeaderResponseIntegerOptionalParams,
  HeaderResponseIntegerResponse,
  HeaderParamLongOptionalParams,
  HeaderResponseLongOptionalParams,
  HeaderResponseLongResponse,
  HeaderParamFloatOptionalParams,
  HeaderResponseFloatOptionalParams,
  HeaderResponseFloatResponse,
  HeaderParamDoubleOptionalParams,
  HeaderResponseDoubleOptionalParams,
  HeaderResponseDoubleResponse,
  HeaderParamBoolOptionalParams,
  HeaderResponseBoolOptionalParams,
  HeaderResponseBoolResponse,
  HeaderParamStringOptionalParams,
  HeaderResponseStringOptionalParams,
  HeaderResponseStringResponse,
  HeaderParamDateOptionalParams,
  HeaderResponseDateOptionalParams,
  HeaderResponseDateResponse,
  HeaderParamDatetimeOptionalParams,
  HeaderResponseDatetimeOptionalParams,
  HeaderResponseDatetimeResponse,
  HeaderParamDatetimeRfc1123OptionalParams,
  HeaderResponseDatetimeRfc1123OptionalParams,
  HeaderResponseDatetimeRfc1123Response,
  HeaderParamDurationOptionalParams,
  HeaderResponseDurationOptionalParams,
  HeaderResponseDurationResponse,
  HeaderParamByteOptionalParams,
  HeaderResponseByteOptionalParams,
  HeaderResponseByteResponse,
  HeaderParamEnumOptionalParams,
  HeaderResponseEnumOptionalParams,
  HeaderResponseEnumResponse,
  HeaderCustomRequestIdOptionalParams
} from "../models";

/** Class representing a Header. */
export class HeaderImpl implements Header {
  private readonly client: HeaderClientContext;

  /**
   * Initialize a new instance of the class Header class.
   * @param client Reference to the service client
   */
  constructor(client: HeaderClientContext) {
    this.client = client;
  }

  /**
   * Send a post request with header value "User-Agent": "overwrite"
   * @param userAgent Send a post request with header value "User-Agent": "overwrite"
   * @param options The options parameters.
   */
  paramExistingKey(
    userAgent: string,
    options?: HeaderParamExistingKeyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { userAgent, options },
      paramExistingKeyOperationSpec
    );
  }

  /**
   * Get a response with header value "User-Agent": "overwrite"
   * @param options The options parameters.
   */
  responseExistingKey(
    options?: HeaderResponseExistingKeyOptionalParams
  ): Promise<HeaderResponseExistingKeyResponse> {
    return this.client.sendOperationRequest(
      { options },
      responseExistingKeyOperationSpec
    );
  }

  /**
   * Send a post request with header value "Content-Type": "text/html"
   * @param contentType Send a post request with header value "Content-Type": "text/html"
   * @param options The options parameters.
   */
  paramProtectedKey(
    contentType: string,
    options?: HeaderParamProtectedKeyOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { contentType, options },
      paramProtectedKeyOperationSpec
    );
  }

  /**
   * Get a response with header value "Content-Type": "text/html"
   * @param options The options parameters.
   */
  responseProtectedKey(
    options?: HeaderResponseProtectedKeyOptionalParams
  ): Promise<HeaderResponseProtectedKeyResponse> {
    return this.client.sendOperationRequest(
      { options },
      responseProtectedKeyOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "positive", "value": 1 or "scenario": "negative",
   * "value": -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param value Send a post request with header values 1 or -2
   * @param options The options parameters.
   */
  paramInteger(
    scenario: string,
    value: number,
    options?: HeaderParamIntegerOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramIntegerOperationSpec
    );
  }

  /**
   * Get a response with header value "value": 1 or -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseInteger(
    scenario: string,
    options?: HeaderResponseIntegerOptionalParams
  ): Promise<HeaderResponseIntegerResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseIntegerOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "positive", "value": 105 or "scenario":
   * "negative", "value": -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param value Send a post request with header values 105 or -2
   * @param options The options parameters.
   */
  paramLong(
    scenario: string,
    value: number,
    options?: HeaderParamLongOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramLongOperationSpec
    );
  }

  /**
   * Get a response with header value "value": 105 or -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseLong(
    scenario: string,
    options?: HeaderResponseLongOptionalParams
  ): Promise<HeaderResponseLongResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseLongOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "positive", "value": 0.07 or "scenario":
   * "negative", "value": -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param value Send a post request with header values 0.07 or -3.0
   * @param options The options parameters.
   */
  paramFloat(
    scenario: string,
    value: number,
    options?: HeaderParamFloatOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramFloatOperationSpec
    );
  }

  /**
   * Get a response with header value "value": 0.07 or -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseFloat(
    scenario: string,
    options?: HeaderResponseFloatOptionalParams
  ): Promise<HeaderResponseFloatResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseFloatOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "positive", "value": 7e120 or "scenario":
   * "negative", "value": -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param value Send a post request with header values 7e120 or -3.0
   * @param options The options parameters.
   */
  paramDouble(
    scenario: string,
    value: number,
    options?: HeaderParamDoubleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramDoubleOperationSpec
    );
  }

  /**
   * Get a response with header value "value": 7e120 or -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseDouble(
    scenario: string,
    options?: HeaderResponseDoubleOptionalParams
  ): Promise<HeaderResponseDoubleResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseDoubleOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "true", "value": true or "scenario": "false",
   * "value": false
   * @param scenario Send a post request with header values "scenario": "true" or "false"
   * @param value Send a post request with header values true or false
   * @param options The options parameters.
   */
  paramBool(
    scenario: string,
    value: boolean,
    options?: HeaderParamBoolOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramBoolOperationSpec
    );
  }

  /**
   * Get a response with header value "value": true or false
   * @param scenario Send a post request with header values "scenario": "true" or "false"
   * @param options The options parameters.
   */
  responseBool(
    scenario: string,
    options?: HeaderResponseBoolOptionalParams
  ): Promise<HeaderResponseBoolResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseBoolOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over
   * the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": ""
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  paramString(
    scenario: string,
    options?: HeaderParamStringOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, options },
      paramStringOperationSpec
    );
  }

  /**
   * Get a response with header values "The quick brown fox jumps over the lazy dog" or null or ""
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  responseString(
    scenario: string,
    options?: HeaderResponseStringOptionalParams
  ): Promise<HeaderResponseStringResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseStringOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "2010-01-01" or "scenario":
   * "min", "value": "0001-01-01"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param value Send a post request with header values "2010-01-01" or "0001-01-01"
   * @param options The options parameters.
   */
  paramDate(
    scenario: string,
    value: Date,
    options?: HeaderParamDateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramDateOperationSpec
    );
  }

  /**
   * Get a response with header values "2010-01-01" or "0001-01-01"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDate(
    scenario: string,
    options?: HeaderResponseDateOptionalParams
  ): Promise<HeaderResponseDateResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseDateOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "2010-01-01T12:34:56Z" or
   * "scenario": "min", "value": "0001-01-01T00:00:00Z"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param value Send a post request with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z"
   * @param options The options parameters.
   */
  paramDatetime(
    scenario: string,
    value: Date,
    options?: HeaderParamDatetimeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramDatetimeOperationSpec
    );
  }

  /**
   * Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDatetime(
    scenario: string,
    options?: HeaderResponseDatetimeOptionalParams
  ): Promise<HeaderResponseDatetimeResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseDatetimeOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT"
   * or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  paramDatetimeRfc1123(
    scenario: string,
    options?: HeaderParamDatetimeRfc1123OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, options },
      paramDatetimeRfc1123OperationSpec
    );
  }

  /**
   * Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDatetimeRfc1123(
    scenario: string,
    options?: HeaderResponseDatetimeRfc1123OptionalParams
  ): Promise<HeaderResponseDatetimeRfc1123Response> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseDatetimeRfc1123OperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "P123DT22H14M12.011S"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param value Send a post request with header values "P123DT22H14M12.011S"
   * @param options The options parameters.
   */
  paramDuration(
    scenario: string,
    value: string,
    options?: HeaderParamDurationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramDurationOperationSpec
    );
  }

  /**
   * Get a response with header values "P123DT22H14M12.011S"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param options The options parameters.
   */
  responseDuration(
    scenario: string,
    options?: HeaderResponseDurationOptionalParams
  ): Promise<HeaderResponseDurationResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseDurationOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "啊齄丂狛狜隣郎隣兀﨩"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param value Send a post request with header values "啊齄丂狛狜隣郎隣兀﨩"
   * @param options The options parameters.
   */
  paramByte(
    scenario: string,
    value: Uint8Array,
    options?: HeaderParamByteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, value, options },
      paramByteOperationSpec
    );
  }

  /**
   * Get a response with header values "啊齄丂狛狜隣郎隣兀﨩"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param options The options parameters.
   */
  responseByte(
    scenario: string,
    options?: HeaderResponseByteOptionalParams
  ): Promise<HeaderResponseByteResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseByteOperationSpec
    );
  }

  /**
   * Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null",
   * "value": null
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  paramEnum(
    scenario: string,
    options?: HeaderParamEnumOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scenario, options },
      paramEnumOperationSpec
    );
  }

  /**
   * Get a response with header values "GREY" or null
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  responseEnum(
    scenario: string,
    options?: HeaderResponseEnumOptionalParams
  ): Promise<HeaderResponseEnumResponse> {
    return this.client.sendOperationRequest(
      { scenario, options },
      responseEnumOperationSpec
    );
  }

  /**
   * Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param options The options parameters.
   */
  customRequestId(
    options?: HeaderCustomRequestIdOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      customRequestIdOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const paramExistingKeyOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/existingkey",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.userAgent],
  serializer
};
const responseExistingKeyOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/existingkey",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseExistingKeyHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const paramProtectedKeyOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/protectedkey",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  serializer
};
const responseProtectedKeyOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/protectedkey",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseProtectedKeyHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const paramIntegerOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/integer",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value],
  serializer
};
const responseIntegerOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/integer",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseIntegerHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramLongOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/long",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value],
  serializer
};
const responseLongOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/long",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseLongHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramFloatOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/float",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value1],
  serializer
};
const responseFloatOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/float",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseFloatHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/double",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value1],
  serializer
};
const responseDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/double",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseDoubleHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramBoolOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/bool",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value2],
  serializer
};
const responseBoolOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/bool",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseBoolHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramStringOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/string",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value3],
  serializer
};
const responseStringOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/string",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseStringHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramDateOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/date",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value4],
  serializer
};
const responseDateOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/date",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseDateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramDatetimeOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/datetime",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value5],
  serializer
};
const responseDatetimeOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/datetime",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseDatetimeHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramDatetimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/datetimerfc1123",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value6],
  serializer
};
const responseDatetimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/datetimerfc1123",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseDatetimeRfc1123Headers
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramDurationOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/duration",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value7],
  serializer
};
const responseDurationOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/duration",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseDurationHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramByteOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/byte",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value8],
  serializer
};
const responseByteOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/byte",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseByteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const paramEnumOperationSpec: coreClient.OperationSpec = {
  path: "/header/param/prim/enum",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario, Parameters.value9],
  serializer
};
const responseEnumOperationSpec: coreClient.OperationSpec = {
  path: "/header/response/prim/enum",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.HeaderResponseEnumHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.scenario],
  serializer
};
const customRequestIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/header/custom/x-ms-client-request-id/9C4D50EE-2D56-4CD3-8152-34347DC9F2B0",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
