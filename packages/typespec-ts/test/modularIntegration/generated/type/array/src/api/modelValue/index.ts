// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { innerModelSerializer, InnerModel } from "../../models/models.js";
import {
  ArrayContext as Client,
  ModelValueGet200Response,
  ModelValuePut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  ModelValueGetOptionalParams,
  ModelValuePutOptionalParams,
} from "../../models/options.js";

export function _modelValueGetSend(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelValueGet200Response> {
  return context
    .path("/type/array/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _modelValueGetDeserialize(
  result: ModelValueGet200Response,
): Promise<InnerModel[]> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  const _result = result as unknown as ModelValueGet200Response;
  return _result.body === undefined
    ? _result.body
    : _result.body.map((p) => {
        return {
          property: p["property"],
          children: !p.children ? undefined : p.children,
        };
      });
}

export async function modelValueGet(
  context: Client,
  options: ModelValueGetOptionalParams = { requestOptions: {} },
): Promise<InnerModel[]> {
  const result = await _modelValueGetSend(context, options);
  return _modelValueGetDeserialize(result);
}

export function _modelValuePutSend(
  context: Client,
  body: InnerModel[],
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): StreamableMethod<ModelValuePut204Response> {
  return context.path("/type/array/model").put({
    ...operationOptionsToRequestParameters(options),
    body: (body ?? []).map((p) => {
      return {
        property: p["property"],
        children:
          p["children"] === undefined
            ? p["children"]
            : p["children"].map(innerModelSerializer),
      };
    }),
  });
}

export async function _modelValuePutDeserialize(
  result: ModelValuePut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

export async function modelValuePut(
  context: Client,
  body: InnerModel[],
  options: ModelValuePutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _modelValuePutSend(context, body, options);
  return _modelValuePutDeserialize(result);
}
