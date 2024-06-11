// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getClient } from "@azure-rest/core-client";
import { logger } from "../logger.js";
/**
 * Initialize a new instance of `AVSContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials, options = {}) {
    const endpointUrl = options.endpoint ?? options.baseUrl ?? `https://management.azure.com`;
    options.apiVersion = options.apiVersion ?? "2023-09-01";
    const userAgentInfo = `azsdk-js-arm-avs-rest/1.0.0-beta.1`;
    const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
        : `${userAgentInfo}`;
    options = {
        ...options,
        userAgentOptions: {
            userAgentPrefix,
        },
        loggingOptions: {
            logger: options.loggingOptions?.logger ?? logger.info,
        },
        credentials: {
            scopes: options.credentials?.scopes ?? [`${endpointUrl}/.default`],
        },
    };
    const client = getClient(endpointUrl, credentials, options);
    return client;
}
//# sourceMappingURL=aVSClient.js.map