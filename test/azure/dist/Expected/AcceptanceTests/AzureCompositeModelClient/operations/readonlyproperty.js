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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-ts");
const Mappers = require("../models/mappers");
const WebResource = msRest.WebResource;
/** Class representing a Readonlyproperty. */
class Readonlyproperty {
    /**
     * Create a Readonlyproperty.
     * @param {AzureCompositeModel} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get complex types that have readonly properties
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/readonlyproperty/valid';
            let queryParameters = [];
            if (queryParameters.length > 0) {
                requestUrl += '?' + queryParameters.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            httpRequest.body = null;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
                // Deserialize Response
                if (statusCode === 200) {
                    let parsedResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedResponse !== null && parsedResponse !== undefined) {
                            let resultMapper = Mappers.ReadonlyObj;
                            operationRes.bodyAsJson = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.bodyAsJson');
                        }
                    }
                    catch (error) {
                        let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
                        deserializationError.request = msRest.stripRequest(httpRequest);
                        deserializationError.response = msRest.stripResponse(response);
                        return Promise.reject(deserializationError);
                    }
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Put complex types that have readonly properties
     *
     * @param {ReadonlypropertyPutValidOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    putValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let size = (options && options.size !== undefined) ? options.size : undefined;
            // Validate
            try {
                if (size !== null && size !== undefined && typeof size !== 'number') {
                    throw new Error('size must be of type number.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            let complexBody = {};
            try {
                if (size !== null && size !== undefined) {
                    complexBody.size = size;
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'complex/readonlyproperty/valid';
            let queryParameters = [];
            if (queryParameters.length > 0) {
                requestUrl += '?' + queryParameters.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'PUT';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Serialize Request
            let requestContent = null;
            let requestModel = null;
            try {
                if (complexBody !== null && complexBody !== undefined) {
                    let requestModelMapper = Mappers.ReadonlyObj;
                    requestModel = client.serializer.serialize(requestModelMapper, complexBody, 'complexBody');
                    requestContent = JSON.stringify(requestModel);
                }
            }
            catch (error) {
                let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
                    `payload - ${JSON.stringify(complexBody, null, 2)}.`);
                return Promise.reject(serializationError);
            }
            httpRequest.body = requestContent;
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    getValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    putValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.putValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.putValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.Readonlyproperty = Readonlyproperty;
//# sourceMappingURL=readonlyproperty.js.map