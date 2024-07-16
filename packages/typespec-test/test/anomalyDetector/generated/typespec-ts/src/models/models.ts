// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  VariableState as VariableStateRest,
  MultivariateBatchDetectionOptions as MultivariateBatchDetectionOptionsRest,
  ModelInfo as ModelInfoRest,
  AlignPolicy as AlignPolicyRest,
  DiagnosticsInfo as DiagnosticsInfoRest,
  ModelState as ModelStateRest,
  MultivariateLastDetectionOptions as MultivariateLastDetectionOptionsRest,
  VariableValues as VariableValuesRest,
  UnivariateDetectionOptions as UnivariateDetectionOptionsRest,
  TimeSeriesPoint as TimeSeriesPointRest,
  UnivariateChangePointDetectionOptions as UnivariateChangePointDetectionOptionsRest,
} from "../rest/index.js";

/** Detection results for the given resultId. */
export interface MultivariateDetectionResult {
  /** Result identifier, which is used to fetch the results of an inference call. */
  readonly resultId: string;
  /** Multivariate anomaly detection status. */
  summary: MultivariateBatchDetectionResultSummary;
  /** Detection result for each timestamp. */
  results: AnomalyState[];
}

/** Multivariate anomaly detection status. */
export interface MultivariateBatchDetectionResultSummary {
  /** Status of detection results. One of CREATED, RUNNING, READY, and FAILED. */
  status: MultivariateBatchDetectionStatus;
  /** Error message when detection is failed. */
  errors?: ErrorResponse[];
  /** Variable Status. */
  variableStates?: VariableState[];
  /**
   * Detection request for batch inference. This is an asynchronous inference which
   * will need another API to get detection results.
   */
  setupInfo: MultivariateBatchDetectionOptions;
}

/** Type of MultivariateBatchDetectionStatus */
export type MultivariateBatchDetectionStatus =
  | "CREATED"
  | "RUNNING"
  | "READY"
  | "FAILED";

/** ErrorResponse contains code and message that shows the error information. */
export interface ErrorResponse {
  /** The error code. */
  code: string;
  /** The message explaining the error reported by the service. */
  message: string;
}

/** Variable Status. */
export interface VariableState {
  /** Variable name in variable states. */
  variable?: string;
  /** Proportion of missing values that need to be filled by fillNAMethod. */
  filledNARatio?: number;
  /** Number of effective data points before applying fillNAMethod. */
  effectiveCount?: number;
  /** First valid timestamp with value of input data. */
  firstTimestamp?: Date;
  /** Last valid timestamp with value of input data. */
  lastTimestamp?: Date;
}

export function variableStateSerializer(
  item: VariableState,
): VariableStateRest {
  return {
    variable: item["variable"],
    filledNARatio: item["filledNARatio"],
    effectiveCount: item["effectiveCount"],
    firstTimestamp: item["firstTimestamp"]?.toISOString(),
    lastTimestamp: item["lastTimestamp"]?.toISOString(),
  };
}

/**
 * Detection request for batch inference. This is an asynchronous inference which
 * will need another API to get detection results.
 */
export interface MultivariateBatchDetectionOptions {
  /**
   * Source link to the input data to indicate an accessible Azure storage Uri,
   * either pointed to an Azure blob storage folder, or pointed to a CSV file in
   * Azure blob storage based on you data schema selection. The data schema should
   * be exactly the same with those used in the training phase.
   */
  dataSource: string;
  /**
   * An optional field, which is used to specify the number of top contributed
   * variables for one anomalous timestamp in the response. The default number is
   * 10.
   */
  topContributorCount: number;
  /**
   * A required field, indicating the start time of data for detection, which should
   * be date-time of ISO 8601 format.
   */
  startTime: Date;
  /**
   * A required field, indicating the end time of data for detection, which should
   * be date-time of ISO 8601 format.
   */
  endTime: Date;
}

export function multivariateBatchDetectionOptionsSerializer(
  item: MultivariateBatchDetectionOptions,
): MultivariateBatchDetectionOptionsRest {
  return {
    dataSource: item["dataSource"],
    topContributorCount: item["topContributorCount"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
  };
}

/** Anomaly status and information. */
export interface AnomalyState {
  /** The timestamp for this anomaly. */
  timestamp: Date;
  /** The detailed value of this anomalous timestamp. */
  value?: AnomalyValue;
  /** Error message for the current timestamp. */
  errors?: ErrorResponse[];
}

/** Detailed information of the anomalous timestamp. */
export interface AnomalyValue {
  /** True if an anomaly is detected at the current timestamp. */
  isAnomaly: boolean;
  /**
   * Indicates the significance of the anomaly. The higher the severity, the more
   * significant the anomaly is.
   */
  severity: number;
  /**
   * Raw anomaly score of severity, will help indicate the degree of abnormality as
   * well.
   */
  score: number;
  /** Interpretation of this anomalous timestamp. */
  interpretation?: AnomalyInterpretation[];
}

/** Interpretation of the anomalous timestamp. */
export interface AnomalyInterpretation {
  /** Variable. */
  variable?: string;
  /**
   * This score shows the percentage contributing to the anomalous timestamp. A
   * number between 0 and 1.
   */
  contributionScore?: number;
  /** Correlation changes among the anomalous variables */
  correlationChanges?: CorrelationChanges;
}

/** Correlation changes among the anomalous variables */
export interface CorrelationChanges {
  /** The correlated variables that have correlation changes under an anomaly. */
  changedVariables?: string[];
}

/**
 * Training result of a model including its status, errors and diagnostics
 * information.
 */
export interface ModelInfo {
  /**
   * Source link to the input data to indicate an accessible Azure storage Uri,
   * either pointed to an Azure blob storage folder, or pointed to a CSV file in
   * Azure blob storage based on you data schema selection.
   */
  dataSource: string;
  /**
   * Data schema of input data source: OneTable or MultiTable. The default
   * DataSchema is OneTable.
   */
  dataSchema?: DataSchema;
  /**
   * A required field, indicating the start time of training data, which should be
   * date-time of ISO 8601 format.
   */
  startTime: Date;
  /**
   * A required field, indicating the end time of training data, which should be
   * date-time of ISO 8601 format.
   */
  endTime: Date;
  /**
   * An optional field. The display name of the model whose maximum length is 24
   * characters.
   */
  displayName?: string;
  /**
   * An optional field, indicating how many previous timestamps will be used to
   * detect whether the timestamp is anomaly or not.
   */
  slidingWindow?: number;
  /** An optional field, indicating the manner to align multiple variables. */
  alignPolicy?: AlignPolicy;
  /** Model status. One of CREATED, RUNNING, READY, and FAILED. */
  status?: ModelStatus;
  /** Error messages when failed to create a model. */
  readonly errors?: ErrorResponse[];
  /** Diagnostics information to help inspect the states of model or variable. */
  diagnosticsInfo?: DiagnosticsInfo;
}

export function modelInfoSerializer(item: ModelInfo): ModelInfoRest {
  return {
    dataSource: item["dataSource"],
    dataSchema: item["dataSchema"],
    startTime: item["startTime"].toISOString(),
    endTime: item["endTime"].toISOString(),
    displayName: item["displayName"],
    slidingWindow: item["slidingWindow"],
    alignPolicy: !item.alignPolicy
      ? item.alignPolicy
      : alignPolicySerializer(item.alignPolicy),
    status: item["status"],
    diagnosticsInfo: !item.diagnosticsInfo
      ? item.diagnosticsInfo
      : diagnosticsInfoSerializer(item.diagnosticsInfo),
  };
}

/** Data schema of input data source: OneTable or MultiTable. The default DataSchema is OneTable. */
export type DataSchema = "OneTable" | "MultiTable";

/** An optional field, indicating the manner to align multiple variables. */
export interface AlignPolicy {
  /**
   * An optional field, indicating how to align different variables to the same
   * time-range. Either Inner or Outer.
   */
  alignMode?: AlignMode;
  /**
   * An optional field, indicating how missing values will be filled. One of
   * Previous, Subsequent, Linear, Zero, Fixed.
   */
  fillNAMethod?: FillNAMethod;
  /** An optional field. Required when fillNAMethod is Fixed. */
  paddingValue?: number;
}

export function alignPolicySerializer(item: AlignPolicy): AlignPolicyRest {
  return {
    alignMode: item["alignMode"],
    fillNAMethod: item["fillNAMethod"],
    paddingValue: item["paddingValue"],
  };
}

/** Type of AlignMode */
export type AlignMode = "Inner" | "Outer";
/** An optional field, indicating how missing values will be filled. One of Previous, Subsequent, Linear, Zero, Fixed. */
export type FillNAMethod =
  | "Previous"
  | "Subsequent"
  | "Linear"
  | "Zero"
  | "Fixed";
/** Type of ModelStatus */
export type ModelStatus = "CREATED" | "RUNNING" | "READY" | "FAILED";

/** Diagnostics information to help inspect the states of model or variable. */
export interface DiagnosticsInfo {
  /** Model status. */
  modelState?: ModelState;
  /** Variable Status. */
  variableStates?: VariableState[];
}

export function diagnosticsInfoSerializer(
  item: DiagnosticsInfo,
): DiagnosticsInfoRest {
  return {
    modelState: !item.modelState
      ? item.modelState
      : modelStateSerializer(item.modelState),
    variableStates:
      item["variableStates"] === undefined
        ? item["variableStates"]
        : item["variableStates"].map(variableStateSerializer),
  };
}

/** Model status. */
export interface ModelState {
  /**
   * This indicates the number of passes of the entire training dataset the
   * algorithm has completed.
   */
  epochIds?: number[];
  /**
   * List of metrics used to assess how the model fits the training data for each
   * epoch.
   */
  trainLosses?: number[];
  /**
   * List of metrics used to assess how the model fits the validation set for each
   * epoch.
   */
  validationLosses?: number[];
  /** Latency for each epoch. */
  latenciesInSeconds?: number[];
}

export function modelStateSerializer(item: ModelState): ModelStateRest {
  return {
    epochIds: item["epochIds"],
    trainLosses: item["trainLosses"],
    validationLosses: item["validationLosses"],
    latenciesInSeconds: item["latenciesInSeconds"],
  };
}

/** Response of getting a model. */
export interface AnomalyDetectionModel {
  /** Model identifier. */
  readonly modelId: string;
  /** Date and time (UTC) when the model was created. */
  createdTime: Date;
  /** Date and time (UTC) when the model was last updated. */
  lastUpdatedTime: Date;
  /**
   * Training result of a model including its status, errors and diagnostics
   * information.
   */
  modelInfo?: ModelInfo;
}

/** Response of listing models. */
export interface _ModelList {
  /** List of models. */
  models: AnomalyDetectionModel[];
  /** Number of trained multivariate models. */
  currentCount: number;
  /** Maximum number of models that can be trained for this Anomaly Detector resource. */
  maxCount: number;
  /** The link to fetch more models. */
  nextLink?: string;
}

/** Request of last detection. */
export interface MultivariateLastDetectionOptions {
  /**
   * This contains the inference data, including the name, timestamps(ISO 8601) and
   * values of variables.
   */
  variables: VariableValues[];
  /**
   * An optional field, which is used to specify the number of top contributed
   * variables for one anomalous timestamp in the response. The default number is
   * 10.
   */
  topContributorCount: number;
}

export function multivariateLastDetectionOptionsSerializer(
  item: MultivariateLastDetectionOptions,
): MultivariateLastDetectionOptionsRest {
  return {
    variables: item["variables"].map(variableValuesSerializer),
    topContributorCount: item["topContributorCount"],
  };
}

/** Variable values. */
export interface VariableValues {
  /** Variable name of last detection request. */
  variable: string;
  /** Timestamps of last detection request */
  timestamps: string[];
  /** Values of variables. */
  values: number[];
}

export function variableValuesSerializer(
  item: VariableValues,
): VariableValuesRest {
  return {
    variable: item["variable"],
    timestamps: item["timestamps"],
    values: item["values"],
  };
}

/** Results of last detection. */
export interface MultivariateLastDetectionResult {
  /** Variable Status. */
  variableStates?: VariableState[];
  /** Anomaly status and information. */
  results?: AnomalyState[];
}

/** The request of entire or last anomaly detection. */
export interface UnivariateDetectionOptions {
  /**
   * Time series data points. Points should be sorted by timestamp in ascending
   * order to match the anomaly detection result. If the data is not sorted
   * correctly or there is duplicated timestamp, the API will not work. In such
   * case, an error message will be returned.
   */
  series: TimeSeriesPoint[];
  /**
   * Optional argument, can be one of yearly, monthly, weekly, daily, hourly,
   * minutely, secondly, microsecond or none. If granularity is not present, it will
   * be none by default. If granularity is none, the timestamp property in time
   * series point can be absent.
   */
  granularity?: TimeGranularity;
  /**
   * Custom Interval is used to set non-standard time interval, for example, if the
   * series is 5 minutes, request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Optional argument, periodic value of a time series. If the value is null or
   * does not present, the API will determine the period automatically.
   */
  period?: number;
  /** Optional argument, advanced model parameter, max anomaly ratio in a time series. */
  maxAnomalyRatio?: number;
  /**
   * Optional argument, advanced model parameter, between 0-99, the lower the value
   * is, the larger the margin value will be which means less anomalies will be
   * accepted.
   */
  sensitivity?: number;
  /**
   * Used to specify how to deal with missing values in the input series, it's used
   * when granularity is not "none".
   */
  imputeMode?: ImputeMode;
  /**
   * Used to specify the value to fill, it's used when granularity is not "none"
   * and imputeMode is "fixed".
   */
  imputeFixedValue?: number;
}

export function univariateDetectionOptionsSerializer(
  item: UnivariateDetectionOptions,
): UnivariateDetectionOptionsRest {
  return {
    series: item["series"].map(timeSeriesPointSerializer),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    maxAnomalyRatio: item["maxAnomalyRatio"],
    sensitivity: item["sensitivity"],
    imputeMode: item["imputeMode"],
    imputeFixedValue: item["imputeFixedValue"],
  };
}

/** The definition of input timeseries points. */
export interface TimeSeriesPoint {
  /** Optional argument, timestamp of a data point (ISO8601 format). */
  timestamp?: Date;
  /** The measurement of that point, should be float. */
  value: number;
}

export function timeSeriesPointSerializer(
  item: TimeSeriesPoint,
): TimeSeriesPointRest {
  return {
    timestamp: item["timestamp"]?.toISOString(),
    value: item["value"],
  };
}

/** Type of TimeGranularity */
export type TimeGranularity =
  | "yearly"
  | "monthly"
  | "weekly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly"
  | "microsecond"
  | "none";
/** Type of ImputeMode */
export type ImputeMode =
  | "auto"
  | "previous"
  | "linear"
  | "fixed"
  | "zero"
  | "notFill";

/** The response of entire anomaly detection. */
export interface UnivariateEntireDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /**
   * ExpectedValues contain expected value for each input point. The index of the
   * array is consistent with the input series.
   */
  expectedValues: number[];
  /**
   * UpperMargins contain upper margin of each input point. UpperMargin is used to
   * calculate upperBoundary, which equals to expectedValue + (100 -
   * marginScale)*upperMargin. Anomalies in response can be filtered by
   * upperBoundary and lowerBoundary. By adjusting marginScale value, less
   * significant anomalies can be filtered in client side. The index of the array is
   * consistent with the input series.
   */
  upperMargins: number[];
  /**
   * LowerMargins contain lower margin of each input point. LowerMargin is used to
   * calculate lowerBoundary, which equals to expectedValue - (100 -
   * marginScale)*lowerMargin. Points between the boundary can be marked as normal
   * ones in client side. The index of the array is consistent with the input
   * series.
   */
  lowerMargins: number[];
  /**
   * IsAnomaly contains anomaly properties for each input point. True means an
   * anomaly either negative or positive has been detected. The index of the array
   * is consistent with the input series.
   */
  isAnomaly: boolean[];
  /**
   * IsNegativeAnomaly contains anomaly status in negative direction for each input
   * point. True means a negative anomaly has been detected. A negative anomaly
   * means the point is detected as an anomaly and its real value is smaller than
   * the expected one. The index of the array is consistent with the input series.
   */
  isNegativeAnomaly: boolean[];
  /**
   * IsPositiveAnomaly contain anomaly status in positive direction for each input
   * point. True means a positive anomaly has been detected. A positive anomaly
   * means the point is detected as an anomaly and its real value is larger than the
   * expected one. The index of the array is consistent with the input series.
   */
  isPositiveAnomaly: boolean[];
  /**
   * The severity score for each input point. The larger the value is, the more
   * sever the anomaly is. For normal points, the "severity" is always 0.
   */
  severity?: number[];
}

/** Error information returned by the API. */
export interface AnomalyDetectorError {
  /** The error code. */
  code?: AnomalyDetectorErrorCodes;
  /** A message explaining the error reported by the service. */
  message?: string;
}

/** Type of AnomalyDetectorErrorCodes */
export type AnomalyDetectorErrorCodes =
  | "InvalidCustomInterval"
  | "BadArgument"
  | "InvalidGranularity"
  | "InvalidPeriod"
  | "InvalidModelArgument"
  | "InvalidSeries"
  | "InvalidJsonFormat"
  | "RequiredGranularity"
  | "RequiredSeries"
  | "InvalidImputeMode"
  | "InvalidImputeFixedValue";

/** The response of last anomaly detection. */
export interface UnivariateLastDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  period: number;
  /** Suggested input series points needed for detecting the latest point. */
  suggestedWindow: number;
  /** Expected value of the latest point. */
  expectedValue: number;
  /**
   * Upper margin of the latest point. UpperMargin is used to calculate
   * upperBoundary, which equals to expectedValue + (100 - marginScale)*upperMargin.
   * If the value of latest point is between upperBoundary and lowerBoundary, it
   * should be treated as normal value. By adjusting marginScale value, anomaly
   * status of latest point can be changed.
   */
  upperMargin: number;
  /**
   * Lower margin of the latest point. LowerMargin is used to calculate
   * lowerBoundary, which equals to expectedValue - (100 - marginScale)*lowerMargin.
   *
   */
  lowerMargin: number;
  /**
   * Anomaly status of the latest point, true means the latest point is an anomaly
   * either in negative direction or positive direction.
   */
  isAnomaly: boolean;
  /**
   * Anomaly status in negative direction of the latest point. True means the latest
   * point is an anomaly and its real value is smaller than the expected one.
   */
  isNegativeAnomaly: boolean;
  /**
   * Anomaly status in positive direction of the latest point. True means the latest
   * point is an anomaly and its real value is larger than the expected one.
   */
  isPositiveAnomaly: boolean;
  /**
   * The severity score for the last input point. The larger the value is, the more
   * sever the anomaly is. For normal points, the "severity" is always 0.
   */
  severity?: number;
}

/** The request of change point detection. */
export interface UnivariateChangePointDetectionOptions {
  /**
   * Time series data points. Points should be sorted by timestamp in ascending
   * order to match the change point detection result.
   */
  series: TimeSeriesPoint[];
  /**
   * Can only be one of yearly, monthly, weekly, daily, hourly, minutely or
   * secondly. Granularity is used for verify whether input series is valid.
   */
  granularity: TimeGranularity;
  /**
   * Custom Interval is used to set non-standard time interval, for example, if the
   * series is 5 minutes, request can be set as {"granularity":"minutely",
   * "customInterval":5}.
   */
  customInterval?: number;
  /**
   * Optional argument, periodic value of a time series. If the value is null or
   * does not present, the API will determine the period automatically.
   */
  period?: number;
  /**
   * Optional argument, advanced model parameter, a default stableTrendWindow will
   * be used in detection.
   */
  stableTrendWindow?: number;
  /**
   * Optional argument, advanced model parameter, between 0.0-1.0, the lower the
   * value is, the larger the trend error will be which means less change point will
   * be accepted.
   */
  threshold?: number;
}

export function univariateChangePointDetectionOptionsSerializer(
  item: UnivariateChangePointDetectionOptions,
): UnivariateChangePointDetectionOptionsRest {
  return {
    series: item["series"].map(timeSeriesPointSerializer),
    granularity: item["granularity"],
    customInterval: item["customInterval"],
    period: item["period"],
    stableTrendWindow: item["stableTrendWindow"],
    threshold: item["threshold"],
  };
}

/** The response of change point detection. */
export interface UnivariateChangePointDetectionResult {
  /**
   * Frequency extracted from the series, zero means no recurrent pattern has been
   * found.
   */
  readonly period?: number;
  /**
   * isChangePoint contains change point properties for each input point. True means
   * an anomaly either negative or positive has been detected. The index of the
   * array is consistent with the input series.
   */
  isChangePoint?: boolean[];
  /** the change point confidence of each point */
  confidenceScores?: number[];
}

/** Type of Versions */
export type Versions = "v1.1";
