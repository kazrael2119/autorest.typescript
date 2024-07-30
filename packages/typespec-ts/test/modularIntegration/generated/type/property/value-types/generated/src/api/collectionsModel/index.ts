// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  innerModelSerializer,
  CollectionsModelProperty,
} from "../../models/models.js";
import {
  ValueTypesContext as Client,
  CollectionsModelGet200Response,
  CollectionsModelPut204Response,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import {
  CollectionsModelGetOptionalParams,
  CollectionsModelPutOptionalParams,
} from "../../models/options.js";

export function _collectionsModelGetSend(
  context: Client,
  options: CollectionsModelGetOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelGet200Response> {
  return context
    .path("/type/property/value-types/collections/model")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _collectionsModelGetDeserialize(
  result: CollectionsModelGet200Response,
): Promise<CollectionsModelProperty> {
  if (result.status !== "200") {
    throw createRestError(result);
  }

  return {
    property: result.body["property"].map((p) => {
      return { property: p["property"] };
    }),
  };
}

/** Get call */
export async function collectionsModelGet(
  context: Client,
  options: CollectionsModelGetOptionalParams = { requestOptions: {} },
): Promise<CollectionsModelProperty> {
  const result = await _collectionsModelGetSend(context, options);
  return _collectionsModelGetDeserialize(result);
}

export function _collectionsModelPutSend(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptionalParams = { requestOptions: {} },
): StreamableMethod<CollectionsModelPut204Response> {
  return context
    .path("/type/property/value-types/collections/model")
    .put({
      ...operationOptionsToRequestParameters(options),
      body: { property: body["property"].map(innerModelSerializer) },
    });
}

export async function _collectionsModelPutDeserialize(
  result: CollectionsModelPut204Response,
): Promise<void> {
  if (result.status !== "204") {
    throw createRestError(result);
  }

  return;
}

/** Put operation */
export async function collectionsModelPut(
  context: Client,
  body: CollectionsModelProperty,
  options: CollectionsModelPutOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _collectionsModelPutSend(context, body, options);
  return _collectionsModelPutDeserialize(result);
}
