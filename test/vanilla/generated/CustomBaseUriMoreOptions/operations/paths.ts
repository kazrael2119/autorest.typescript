/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { AutoRestParameterizedCustomHostTestClient } from "../autoRestParameterizedCustomHostTestClient";

const WebResource = msRest.WebResource;

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedCustomHostTestClient;
  /**
   * Create a Paths.
   * @param {AutoRestParameterizedCustomHostTestClient} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedCustomHostTestClient) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} vault The vault name, e.g. https://myvault
   *
   * @param {string} secret Secret value.
   *
   * @param {string} keyName The key name with value 'key1'.
   *
   * @param {PathsGetEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getEmptyWithHttpOperationResponse(vault: string, secret: string, keyName: string, options?: Models.PathsGetEmptyOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    let keyVersion = (options && options.keyVersion !== undefined) ? options.keyVersion : 'v1';
    // Validate
    try {
      if (vault === null || vault === undefined || typeof vault.valueOf() !== 'string') {
        throw new Error('vault cannot be null or undefined and it must be of type string.');
      }
      if (secret === null || secret === undefined || typeof secret.valueOf() !== 'string') {
        throw new Error('secret cannot be null or undefined and it must be of type string.');
      }
      if (this.client.dnsSuffix === null || this.client.dnsSuffix === undefined || typeof this.client.dnsSuffix.valueOf() !== 'string') {
        throw new Error('this.client.dnsSuffix cannot be null or undefined and it must be of type string.');
      }
      if (keyName === null || keyName === undefined || typeof keyName.valueOf() !== 'string') {
        throw new Error('keyName cannot be null or undefined and it must be of type string.');
      }
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (keyVersion !== null && keyVersion !== undefined && typeof keyVersion.valueOf() !== 'string') {
        throw new Error('keyVersion must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'customuri/{subscriptionId}/{keyName}';
    requestUrl = requestUrl.replace('{vault}', vault);
    requestUrl = requestUrl.replace('{secret}', secret);
    requestUrl = requestUrl.replace('{dnsSuffix}', this.client.dnsSuffix);
    requestUrl = requestUrl.replace('{keyName}', encodeURIComponent(keyName));
    requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
    let queryParamsArray: Array<any> = [];
    if (keyVersion !== null && keyVersion !== undefined) {
      queryParamsArray.push('keyVersion=' + encodeURIComponent(keyVersion));
    }
    if (queryParamsArray.length > 0) {
      requestUrl += '?' + queryParamsArray.join('&');
    }

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendRequest(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} vault The vault name, e.g. https://myvault
   *
   * @param {string} secret Secret value.
   *
   * @param {string} keyName The key name with value 'key1'.
   *
   * @param {PathsGetEmptyOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(vault: string, secret: string, keyName: string): Promise<void>;
  getEmpty(vault: string, secret: string, keyName: string, options: Models.PathsGetEmptyOptionalParams): Promise<void>;
  getEmpty(vault: string, secret: string, keyName: string, callback: msRest.ServiceCallback<void>): void;
  getEmpty(vault: string, secret: string, keyName: string, options: Models.PathsGetEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getEmpty(vault: string, secret: string, keyName: string, options?: Models.PathsGetEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getEmptyWithHttpOperationResponse(vault, secret, keyName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(vault, secret, keyName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}
