/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface ErrorModel {
  status?: number;
  constantId: "1";
  message?: string;
}

export interface OdataFilter {
  id?: number;
  name?: string;
}

/**
 * Defines headers for header_customNamedRequestId operation.
 */
export interface HeaderCustomNamedRequestIdHeaders {
  fooRequestId?: string;
}

/**
 * Defines headers for header_customNamedRequestIdParamGrouping operation.
 */
export interface HeaderCustomNamedRequestIdParamGroupingHeaders {
  fooRequestId?: string;
}

/**
 * Defines headers for header_customNamedRequestIdHead operation.
 */
export interface HeaderCustomNamedRequestIdHeadHeaders {
  fooRequestId?: string;
}

/**
 * Parameter group
 */
export interface HeaderCustomNamedRequestIdParamGroupingParameters {
  /**
   * The fooRequestId
   */
  fooClientRequestId: string;
}

/**
 * Optional parameters.
 */
export interface ApiVersionLocalGetMethodLocalNullOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * This should appear as a method parameter, use value null, this should result in no serialized parameter
   */
  apiVersion?: string;
}

/**
 * Optional parameters.
 */
export interface SkipUrlEncodingGetMethodQueryNullOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unencoded query parameter with value null
   */
  q1?: string;
}

/**
 * Optional parameters.
 */
export interface OdataGetWithFilterOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The filter parameter with value '$filter=id gt 5 and name eq 'foo''.
   */
  filter?: string;
  /**
   * The top parameter with value 10.
   */
  top?: number;
  /**
   * The orderby parameter with value id.
   */
  orderby?: string;
}

/**
 * Contains response data for the customNamedRequestId operation.
 */
export type HeaderCustomNamedRequestIdResponse = HeaderCustomNamedRequestIdHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderCustomNamedRequestIdHeaders;
  };
};

/**
 * Contains response data for the customNamedRequestIdParamGrouping operation.
 */
export type HeaderCustomNamedRequestIdParamGroupingResponse = HeaderCustomNamedRequestIdParamGroupingHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderCustomNamedRequestIdParamGroupingHeaders;
  };
};

/**
 * Contains response data for the customNamedRequestIdHead operation.
 */
export type HeaderCustomNamedRequestIdHeadResponse = HeaderCustomNamedRequestIdHeadHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The parsed HTTP response headers.
     */
    parsedHeaders: HeaderCustomNamedRequestIdHeadHeaders;
  };
};

/**
 * Optional parameters.
 */
export interface AzureSpecialPropertiesClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
