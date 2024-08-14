// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import { Operation } from "../../models/models.js";
import { list } from "../../api/operations/index.js";
<<<<<<< HEAD
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { OperationsListOptionalParams } from "../../api/options.js";
=======
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { OperationsListOptionalParams } from "../../models/options.js";
>>>>>>> main

/** Interface representing a Operations operations. */
export interface OperationsOperations {
  /** List the operations for the provider */
  list: (
    options?: OperationsListOptionalParams,
  ) => PagedAsyncIterableIterator<Operation>;
}

export function getOperations(context: NetworkAnalyticsContext) {
  return {
    list: (options?: OperationsListOptionalParams) => list(context, options),
  };
}

export function getOperationsOperations(
  context: NetworkAnalyticsContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
