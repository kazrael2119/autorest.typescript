/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ReadonlypropertyGetValidOptionalParams,
  ReadonlypropertyGetValidResponse,
  ReadonlyObj,
  ReadonlypropertyPutValidOptionalParams
} from "../models";

/** Interface representing a Readonlyproperty. */
export interface Readonlyproperty {
  /**
   * Get complex types that have readonly properties
   * @param options The options parameters.
   */
  getValid(
    options?: ReadonlypropertyGetValidOptionalParams
  ): Promise<ReadonlypropertyGetValidResponse>;
  /**
   * Put complex types that have readonly properties
   * @param complexBody
   * @param options The options parameters.
   */
  putValid(
    complexBody: ReadonlyObj,
    options?: ReadonlypropertyPutValidOptionalParams
  ): Promise<void>;
}
