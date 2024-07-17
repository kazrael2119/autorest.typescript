// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ClientOptions } from "@azure-rest/core-client";
import { DemoServiceContext } from "../rest/index.js";
import getClient from "../rest/index.js";

/** Optional parameters for the client. */
export interface DemoServiceClientOptions extends ClientOptions {}

export { DemoServiceContext } from "../rest/index.js";

export function createDemoService(
  endpoint: string,
  options: DemoServiceClientOptions = {},
): DemoServiceContext {
  const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
  const userAgentPrefix = prefixFromOptions
    ? `${prefixFromOptions} azsdk-js-api`
    : "azsdk-js-api";

  const clientContext = getClient(endpoint, {
    ...options,
    userAgentOptions: { userAgentPrefix },
  });
  return clientContext;
}
