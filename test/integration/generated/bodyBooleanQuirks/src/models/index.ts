/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface ErrorModel {
  status?: number;
  message?: string;
}

/** Optional parameters. */
export interface BoolGetTrueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTrue operation. */
export type BoolGetTrueResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface BoolPutTrueOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BoolGetFalseOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getFalse operation. */
export type BoolGetFalseResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface BoolPutFalseOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BoolGetNullOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getNull operation. */
export type BoolGetNullResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface BoolGetInvalidOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInvalid operation. */
export type BoolGetInvalidResponse = {
  /** The parsed response body. */
  body: boolean;
};

/** Optional parameters. */
export interface BodyBooleanQuirksClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
