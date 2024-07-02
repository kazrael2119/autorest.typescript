// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential, KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { ModelClientContext } from "../../rest/index.js";
import getClient from "../../rest/index.js";

/** Optional parameters for the client. */
export interface ImageEmbeddingsClientOptions extends ClientOptions {
  /** The API version to use for this operation. */
  apiVersion?: string;
}

export { ModelClientContext } from "../../rest/index.js";

export function createImageEmbeddings(
  endpoint: string,
  credential: KeyCredential | TokenCredential,
  options: ImageEmbeddingsClientOptions = {},
): ModelClientContext {
  const clientContext = getClient(endpoint, credential, options);
  return clientContext;
}
