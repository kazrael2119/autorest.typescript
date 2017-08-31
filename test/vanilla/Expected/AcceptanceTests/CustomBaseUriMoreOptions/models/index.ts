/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-ts";
import { RequestOptionsBase } from "ms-rest-ts";


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing AutoRestParameterizedCustomHostTestClientOptions.
 * @extends ServiceClientOptions
 */
export interface AutoRestParameterizedCustomHostTestClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [dnsSuffix] A string value that is used as a global part
   * of the parameterized host. Default value 'host'. Default value: 'host' .
   */
  dnsSuffix?: string;
}

/**
 * @interface
 * An interface representing PathsGetEmptyOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface PathsGetEmptyOptionalParams extends RequestOptionsBase {
  /**
   * @member {string} [keyVersion] The key version. Default value 'v1'. Default
   * value: 'v1' .
   */
  keyVersion?: string;
}
