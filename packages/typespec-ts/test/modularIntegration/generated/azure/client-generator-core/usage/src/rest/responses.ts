// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { OutputModelOutput, RoundTripModelOutput } from "./outputModels.js";

/** There is no content to send for this request, but the headers may be useful. */
export interface InputToInputOutput204Response extends HttpResponse {
  status: "204";
}

/** The request has succeeded. */
export interface OutputToInputOutput200Response extends HttpResponse {
  status: "200";
  body: OutputModelOutput;
}

/** The request has succeeded. */
export interface ModelInReadOnlyProperty200Response extends HttpResponse {
  status: "200";
  body: RoundTripModelOutput;
}
