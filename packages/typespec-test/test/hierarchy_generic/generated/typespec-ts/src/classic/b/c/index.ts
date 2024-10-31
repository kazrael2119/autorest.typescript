// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FooContext } from "../../../api/fooContext.js";
import { op1 } from "../../../api/b/c/index.js";
import { BCOp1OptionalParams } from "../../../api/options.js";
import { BA } from "../../../models/models.js";

/** Interface representing a BC operations. */
export interface BCOperations {
  op1: (body: BA, options?: BCOp1OptionalParams) => Promise<void>;
}

export function getBC(context: FooContext) {
  return {
    op1: (body: BA, options?: BCOp1OptionalParams) =>
      op1(context, body, options),
  };
}

export function getBCOperations(context: FooContext): BCOperations {
  return {
    ...getBC(context),
  };
}
