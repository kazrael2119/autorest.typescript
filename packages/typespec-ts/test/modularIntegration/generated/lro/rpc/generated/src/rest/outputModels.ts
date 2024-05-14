// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Result of the generation. */
export interface GenerationResultOutput {
  /** The data. */
  data: string;
}

/** Enum describing allowed operation states. */
export type OperationStateOutput =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Canceled";
