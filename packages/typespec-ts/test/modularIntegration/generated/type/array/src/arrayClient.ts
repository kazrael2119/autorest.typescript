// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getInt32ValueOperations,
  Int32ValueOperations,
} from "./classic/int32Value/index.js";
import {
  getInt64ValueOperations,
  Int64ValueOperations,
} from "./classic/int64Value/index.js";
import {
  getBooleanValueOperations,
  BooleanValueOperations,
} from "./classic/booleanValue/index.js";
import {
  getStringValueOperations,
  StringValueOperations,
} from "./classic/stringValue/index.js";
import {
  getFloat32ValueOperations,
  Float32ValueOperations,
} from "./classic/float32Value/index.js";
import {
  getDatetimeValueOperations,
  DatetimeValueOperations,
} from "./classic/datetimeValue/index.js";
import {
  getDurationValueOperations,
  DurationValueOperations,
} from "./classic/durationValue/index.js";
import {
  getUnknownValueOperations,
  UnknownValueOperations,
} from "./classic/unknownValue/index.js";
import {
  getModelValueOperations,
  ModelValueOperations,
} from "./classic/modelValue/index.js";
import {
  getNullableFloatValueOperations,
  NullableFloatValueOperations,
} from "./classic/nullableFloatValue/index.js";
import {
  getNullableInt32ValueOperations,
  NullableInt32ValueOperations,
} from "./classic/nullableInt32Value/index.js";
import {
  getNullableBooleanValueOperations,
  NullableBooleanValueOperations,
} from "./classic/nullableBooleanValue/index.js";
import {
  getNullableStringValueOperations,
  NullableStringValueOperations,
} from "./classic/nullableStringValue/index.js";
import {
  getNullableModelValueOperations,
  NullableModelValueOperations,
} from "./classic/nullableModelValue/index.js";
import {
  createArray,
  ArrayClientOptionalParams,
  ArrayContext,
} from "./api/index.js";

export class ArrayClient {
  private _client: ArrayContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates various types of arrays. */
  constructor(options: ArrayClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createArray({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.int32Value = getInt32ValueOperations(this._client);
    this.int64Value = getInt64ValueOperations(this._client);
    this.booleanValue = getBooleanValueOperations(this._client);
    this.stringValue = getStringValueOperations(this._client);
    this.float32Value = getFloat32ValueOperations(this._client);
    this.datetimeValue = getDatetimeValueOperations(this._client);
    this.durationValue = getDurationValueOperations(this._client);
    this.unknownValue = getUnknownValueOperations(this._client);
    this.modelValue = getModelValueOperations(this._client);
    this.nullableFloatValue = getNullableFloatValueOperations(this._client);
    this.nullableInt32Value = getNullableInt32ValueOperations(this._client);
    this.nullableBooleanValue = getNullableBooleanValueOperations(this._client);
    this.nullableStringValue = getNullableStringValueOperations(this._client);
    this.nullableModelValue = getNullableModelValueOperations(this._client);
  }

  /** The operation groups for Int32Value */
  public readonly int32Value: Int32ValueOperations;
  /** The operation groups for Int64Value */
  public readonly int64Value: Int64ValueOperations;
  /** The operation groups for BooleanValue */
  public readonly booleanValue: BooleanValueOperations;
  /** The operation groups for StringValue */
  public readonly stringValue: StringValueOperations;
  /** The operation groups for Float32Value */
  public readonly float32Value: Float32ValueOperations;
  /** The operation groups for DatetimeValue */
  public readonly datetimeValue: DatetimeValueOperations;
  /** The operation groups for DurationValue */
  public readonly durationValue: DurationValueOperations;
  /** The operation groups for UnknownValue */
  public readonly unknownValue: UnknownValueOperations;
  /** The operation groups for ModelValue */
  public readonly modelValue: ModelValueOperations;
  /** The operation groups for NullableFloatValue */
  public readonly nullableFloatValue: NullableFloatValueOperations;
  /** The operation groups for NullableInt32Value */
  public readonly nullableInt32Value: NullableInt32ValueOperations;
  /** The operation groups for NullableBooleanValue */
  public readonly nullableBooleanValue: NullableBooleanValueOperations;
  /** The operation groups for NullableStringValue */
  public readonly nullableStringValue: NullableStringValueOperations;
  /** The operation groups for NullableModelValue */
  public readonly nullableModelValue: NullableModelValueOperations;
}
