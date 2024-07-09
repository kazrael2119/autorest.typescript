// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { BooleanLiteralProperty } from "../../models/models.js";
import {
  BooleanLiteralGet200Response,
  BooleanLiteralPut204Response,
  ValueTypesContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  BooleanLiteralGetOptionalParams,
  BooleanLiteralPutOptionalParams,
} from "../../models/options.js";

export function _booleanLiteralGetSend(
  context: Client,
  options: BooleanLiteralGetOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralGet200Response> {
  return context
    .path("/type/property/value-types/boolean/literal")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _booleanLiteralGetDeserialize(
  result: BooleanLiteralGet200Response,
): Promise<BooleanLiteralProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as BooleanLiteralGet200Response;
  return {
    property: _result.body["property"],
  };
}

/** Get call */
export async function booleanLiteralGet(
  context: Client,
  options: BooleanLiteralGetOptionalParams = { requestOptions: {} },
): Promise<BooleanLiteralProperty> {
  const result = await _booleanLiteralGetSend(context, options);
  return _booleanLiteralGetDeserialize(result);
}

export function _booleanLiteralPutSend(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutOptionalParams = { requestOptions: {} },
): StreamableMethod<BooleanLiteralPut204Response> {
  return context
    .path("/type/property/value-types/boolean/literal")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"] },
    });
}

export async function _booleanLiteralPutDeserialize(
  result: BooleanLiteralPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function booleanLiteralPut(
  context: Client,
  body: BooleanLiteralProperty,
  options: BooleanLiteralPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _booleanLiteralPutSend(context, body, options);
  return _booleanLiteralPutDeserialize(result);
}
