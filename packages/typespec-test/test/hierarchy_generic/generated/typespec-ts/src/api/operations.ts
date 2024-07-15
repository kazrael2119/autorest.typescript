// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { A_0 } from "../models/models.js";
import { FooContext as Client, Op1204Response } from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { Op1OptionalParams } from "./options.js";

export function _op1Send(
  context: Client,
  body: A_0,
  options: Op1OptionalParams = { requestOptions: {} },
): StreamableMethod<Op1204Response> {
  return context
    .path("/")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { prop1: body["prop1"] },
    });
}

export async function _op1Deserialize(result: Op1204Response): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function op1(
  context: Client,
  body: A_0,
  options: Op1OptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _op1Send(context, body, options);
  return _op1Deserialize(result);
}
