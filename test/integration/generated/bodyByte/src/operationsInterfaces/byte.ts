/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ByteGetNullOptionalParams,
  ByteGetNullResponse,
  ByteGetEmptyOptionalParams,
  ByteGetEmptyResponse,
  ByteGetNonAsciiOptionalParams,
  ByteGetNonAsciiResponse,
  BytePutNonAsciiOptionalParams,
  ByteGetInvalidOptionalParams,
  ByteGetInvalidResponse
} from "../models";

/** Interface representing a Byte. */
export interface Byte {
  /**
   * Get null byte value
   * @param options The options parameters.
   */
  getNull(options?: ByteGetNullOptionalParams): Promise<ByteGetNullResponse>;
  /**
   * Get empty byte value ''
   * @param options The options parameters.
   */
  getEmpty(options?: ByteGetEmptyOptionalParams): Promise<ByteGetEmptyResponse>;
  /**
   * Get non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  getNonAscii(
    options?: ByteGetNonAsciiOptionalParams
  ): Promise<ByteGetNonAsciiResponse>;
  /**
   * Put non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param byteBody Base64-encoded non-ascii byte string hex(FF FE FD FC FB FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putNonAscii(
    byteBody: Uint8Array,
    options?: BytePutNonAsciiOptionalParams
  ): Promise<void>;
  /**
   * Get invalid byte value ':::SWAGGER::::'
   * @param options The options parameters.
   */
  getInvalid(
    options?: ByteGetInvalidOptionalParams
  ): Promise<ByteGetInvalidResponse>;
}
