// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The exported user data. */
export interface ExportedUserOutput {
  /** The name of user. */
  name: string;
  /** The exported URI. */
  resourceUri: string;
}

/** Enum describing allowed operation states. */
export type OperationStateOutput =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled";
