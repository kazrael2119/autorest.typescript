// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Pipeline } from "@azure/core-rest-pipeline";
import { Siamese } from "./models/models.js";
import {
  createNotDiscriminated,
  NotDiscriminatedClientOptionalParams,
  NotDiscriminatedContext,
  postValid,
  getValid,
  putValid,
  PostValidOptionalParams,
  GetValidOptionalParams,
  PutValidOptionalParams,
} from "./api/index.js";

export class NotDiscriminatedClient {
  private _client: NotDiscriminatedContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Illustrates not-discriminated inheritance model. */
  constructor(options: NotDiscriminatedClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";

    this._client = createNotDiscriminated({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
  }

  postValid(
    input: Siamese,
    options: PostValidOptionalParams = { requestOptions: {} },
  ): Promise<void> {
    return postValid(this._client, input, options);
  }

  getValid(
    options: GetValidOptionalParams = { requestOptions: {} },
  ): Promise<Siamese> {
    return getValid(this._client, options);
  }

  putValid(
    input: Siamese,
    options: PutValidOptionalParams = { requestOptions: {} },
  ): Promise<Siamese> {
    return putValid(this._client, input, options);
  }
}
