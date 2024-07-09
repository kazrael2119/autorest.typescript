// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DecimalVerifyPrepareVerify200Response,
  DecimalVerifyVerify204Response,
  ScalarContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  DecimalVerifyPrepareVerifyOptionalParams,
  DecimalVerifyVerifyOptionalParams,
} from "../../models/options.js";

export function _decimalVerifyPrepareVerifySend(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod<DecimalVerifyPrepareVerify200Response> {
  return context
    .path("/type/scalar/decimal/prepare_verify")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _decimalVerifyPrepareVerifyDeserialize(
  result: DecimalVerifyPrepareVerify200Response,
): Promise<number[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as DecimalVerifyPrepareVerify200Response;
  return _result.body;
}

export async function decimalVerifyPrepareVerify(
  context: Client,
  options: DecimalVerifyPrepareVerifyOptionalParams = { requestOptions: {} },
): Promise<number[]> {
  const result = await _decimalVerifyPrepareVerifySend(context, options);
  return _decimalVerifyPrepareVerifyDeserialize(result);
}

export function _decimalVerifyVerifySend(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptionalParams = { requestOptions: {} },
): StreamableMethod<DecimalVerifyVerify204Response> {
  return context
    .path("/type/scalar/decimal/verify")
    .post({ ...operationOptionsToRequestParameters(options), body: body });
}

export async function _decimalVerifyVerifyDeserialize(
  result: DecimalVerifyVerify204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function decimalVerifyVerify(
  context: Client,
  body: number,
  options: DecimalVerifyVerifyOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _decimalVerifyVerifySend(context, body, options);
  return _decimalVerifyVerifyDeserialize(result);
}
