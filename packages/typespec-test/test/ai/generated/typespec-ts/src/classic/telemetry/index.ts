// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AIProjectContext } from "../../api/aiProjectContext.js";
import { TelemetryGetAppInsightsOptionalParams } from "../../api/options.js";
import { getAppInsights } from "../../api/telemetry/index.js";
import { GetAppInsightsResponse } from "../../models/models.js";

/** Interface representing a Telemetry operations. */
export interface TelemetryOperations {
  /** Gets the properties of the specified Application Insights resource */
  getAppInsights: (
    appInsightsResourceUrl: string,
    options?: TelemetryGetAppInsightsOptionalParams,
  ) => Promise<GetAppInsightsResponse>;
}

export function getTelemetry(context: AIProjectContext) {
  return {
    getAppInsights: (
      appInsightsResourceUrl: string,
      options?: TelemetryGetAppInsightsOptionalParams,
    ) => getAppInsights(context, appInsightsResourceUrl, options),
  };
}

export function getTelemetryOperations(
  context: AIProjectContext,
): TelemetryOperations {
  return {
    ...getTelemetry(context),
  };
}
