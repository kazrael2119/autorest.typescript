// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** Sample Model */
export interface User {
  /** The user's id. */
  readonly id: number;
  /** The user's name. */
  name?: string;
}

/** User action param */
export interface UserActionParam {
  /** User action value. */
  userActionValue: string;
}

/** User action response */
export interface UserActionResponse {
  /** User action result. */
  userActionResult: string;
}

/** Service versions */
/** */
export type Versions = "2022-12-01-preview";

export interface ErrorResponse {
  /** The error object. */
  error: ErrorModel;
}

/** Repeatability Result header options */
/** */
export type RepeatabilityResult = "accepted" | "rejected";
