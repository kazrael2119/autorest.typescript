/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

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

/** Interface representing a Header. */
export interface Header {
  /**
   * Send a post request with header value "User-Agent": "overwrite"
   * @param userAgent Send a post request with header value "User-Agent": "overwrite"
   * @param options The options parameters.
   */
  paramExistingKey(
    userAgent: string,
    options?: HeaderParamExistingKeyOptionalParams
  ): Promise<void>;
  /**
   * Get a response with header value "User-Agent": "overwrite"
   * @param options The options parameters.
   */
  responseExistingKey(
    options?: HeaderResponseExistingKeyOptionalParams
  ): Promise<HeaderResponseExistingKeyResponse>;
  /**
   * Send a post request with header value "Content-Type": "text/html"
   * @param contentType Send a post request with header value "Content-Type": "text/html"
   * @param options The options parameters.
   */
  paramProtectedKey(
    contentType: string,
    options?: HeaderParamProtectedKeyOptionalParams
  ): Promise<void>;
  /**
   * Get a response with header value "Content-Type": "text/html"
   * @param options The options parameters.
   */
  responseProtectedKey(
    options?: HeaderResponseProtectedKeyOptionalParams
  ): Promise<HeaderResponseProtectedKeyResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header value "value": 1 or -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseInteger(
    scenario: string,
    options?: HeaderResponseIntegerOptionalParams
  ): Promise<HeaderResponseIntegerResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header value "value": 105 or -2
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseLong(
    scenario: string,
    options?: HeaderResponseLongOptionalParams
  ): Promise<HeaderResponseLongResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header value "value": 0.07 or -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseFloat(
    scenario: string,
    options?: HeaderResponseFloatOptionalParams
  ): Promise<HeaderResponseFloatResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header value "value": 7e120 or -3.0
   * @param scenario Send a post request with header values "scenario": "positive" or "negative"
   * @param options The options parameters.
   */
  responseDouble(
    scenario: string,
    options?: HeaderResponseDoubleOptionalParams
  ): Promise<HeaderResponseDoubleResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header value "value": true or false
   * @param scenario Send a post request with header values "scenario": "true" or "false"
   * @param options The options parameters.
   */
  responseBool(
    scenario: string,
    options?: HeaderResponseBoolOptionalParams
  ): Promise<HeaderResponseBoolResponse>;
  /**
   * Send a post request with header values "scenario": "valid", "value": "The quick brown fox jumps over
   * the lazy dog" or "scenario": "null", "value": null or "scenario": "empty", "value": ""
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  paramString(
    scenario: string,
    options?: HeaderParamStringOptionalParams
  ): Promise<void>;
  /**
   * Get a response with header values "The quick brown fox jumps over the lazy dog" or null or ""
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  responseString(
    scenario: string,
    options?: HeaderResponseStringOptionalParams
  ): Promise<HeaderResponseStringResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header values "2010-01-01" or "0001-01-01"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDate(
    scenario: string,
    options?: HeaderResponseDateOptionalParams
  ): Promise<HeaderResponseDateResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header values "2010-01-01T12:34:56Z" or "0001-01-01T00:00:00Z"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDatetime(
    scenario: string,
    options?: HeaderResponseDatetimeOptionalParams
  ): Promise<HeaderResponseDatetimeResponse>;
  /**
   * Send a post request with header values "scenario": "valid", "value": "Wed, 01 Jan 2010 12:34:56 GMT"
   * or "scenario": "min", "value": "Mon, 01 Jan 0001 00:00:00 GMT"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  paramDatetimeRfc1123(
    scenario: string,
    options?: HeaderParamDatetimeRfc1123OptionalParams
  ): Promise<void>;
  /**
   * Get a response with header values "Wed, 01 Jan 2010 12:34:56 GMT" or "Mon, 01 Jan 0001 00:00:00 GMT"
   * @param scenario Send a post request with header values "scenario": "valid" or "min"
   * @param options The options parameters.
   */
  responseDatetimeRfc1123(
    scenario: string,
    options?: HeaderResponseDatetimeRfc1123OptionalParams
  ): Promise<HeaderResponseDatetimeRfc1123Response>;
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
  ): Promise<void>;
  /**
   * Get a response with header values "P123DT22H14M12.011S"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param options The options parameters.
   */
  responseDuration(
    scenario: string,
    options?: HeaderResponseDurationOptionalParams
  ): Promise<HeaderResponseDurationResponse>;
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
  ): Promise<void>;
  /**
   * Get a response with header values "啊齄丂狛狜隣郎隣兀﨩"
   * @param scenario Send a post request with header values "scenario": "valid"
   * @param options The options parameters.
   */
  responseByte(
    scenario: string,
    options?: HeaderResponseByteOptionalParams
  ): Promise<HeaderResponseByteResponse>;
  /**
   * Send a post request with header values "scenario": "valid", "value": "GREY" or "scenario": "null",
   * "value": null
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  paramEnum(
    scenario: string,
    options?: HeaderParamEnumOptionalParams
  ): Promise<void>;
  /**
   * Get a response with header values "GREY" or null
   * @param scenario Send a post request with header values "scenario": "valid" or "null" or "empty"
   * @param options The options parameters.
   */
  responseEnum(
    scenario: string,
    options?: HeaderResponseEnumOptionalParams
  ): Promise<HeaderResponseEnumResponse>;
  /**
   * Send x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 in the header of the request
   * @param options The options parameters.
   */
  customRequestId(options?: HeaderCustomRequestIdOptionalParams): Promise<void>;
}
