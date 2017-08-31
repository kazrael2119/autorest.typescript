"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Models = require("./models");
exports.AutoRestParameterizedHostTestModels = Models;
const Mappers = require("./models/mappers");
exports.AutoRestParameterizedHostTestMappers = Mappers;
const msRest = require("ms-rest-ts");
const msRestAzure = require("ms-rest-azure-ts");
const operations = require("./operations");
const packageName = 'foo';
const packageVersion = '3.0.0-preview';
class AutoRestParameterizedHostTestClient extends msRestAzure.AzureServiceClient {
    /**
     * @class
     * Initializes a new instance of the AutoRestParameterizedHostTestClient class.
     * @constructor
     *
     * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
     * {@link https://github.github.io/fetch/#Request Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.host] - A string value that is used as a global part of the parameterized host
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials, options) {
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (!options)
            options = {};
        super(credentials, options);
        this.host = 'host';
        this.acceptLanguage = 'en-US';
        this.longRunningOperationRetryTimeout = 30;
        this.generateClientRequestId = true;
        this.baseUri = 'http://{accountName}{host}';
        this.credentials = credentials;
        this.addUserAgentInfo(`${packageName}/${packageVersion}`);
        if (options.host !== null && options.host !== undefined) {
            this.host = options.host;
        }
        if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
            this.acceptLanguage = options.acceptLanguage;
        }
        if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
            this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
        }
        if (options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
            this.generateClientRequestId = options.generateClientRequestId;
        }
        this.paths = new operations.Paths(this);
        this.serializer = new msRest.Serializer(Mappers);
    }
}
exports.AutoRestParameterizedHostTestClient = AutoRestParameterizedHostTestClient;
//# sourceMappingURL=autoRestParameterizedHostTestClient.js.map