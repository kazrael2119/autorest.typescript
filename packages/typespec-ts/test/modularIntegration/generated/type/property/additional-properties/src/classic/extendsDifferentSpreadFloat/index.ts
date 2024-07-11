// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AdditionalPropertiesContext } from "../../api/additionalPropertiesContext.js";
import { DifferentSpreadFloatDerived } from "../../models/models.js";
import { get, put } from "../../api/extendsDifferentSpreadFloat/index.js";
import {
  ExtendsDifferentSpreadFloatGetOptionalParams,
  ExtendsDifferentSpreadFloatPutOptionalParams,
} from "../../api/options.js";

/** Interface representing a ExtendsDifferentSpreadFloat operations. */
export interface ExtendsDifferentSpreadFloatOperations {
  /** Get call */
  get: (
    options?: ExtendsDifferentSpreadFloatGetOptionalParams,
  ) => Promise<DifferentSpreadFloatDerived>;
  /** Put operation */
  put: (
    body: DifferentSpreadFloatDerived,
    options?: ExtendsDifferentSpreadFloatPutOptionalParams,
  ) => Promise<void>;
}

export function getExtendsDifferentSpreadFloat(
  context: AdditionalPropertiesContext,
) {
  return {
    get: (options?: ExtendsDifferentSpreadFloatGetOptionalParams) =>
      get(context, options),
    put: (
      body: DifferentSpreadFloatDerived,
      options?: ExtendsDifferentSpreadFloatPutOptionalParams,
    ) => put(context, body, options),
  };
}

export function getExtendsDifferentSpreadFloatOperations(
  context: AdditionalPropertiesContext,
): ExtendsDifferentSpreadFloatOperations {
  return {
    ...getExtendsDifferentSpreadFloat(context),
  };
}
