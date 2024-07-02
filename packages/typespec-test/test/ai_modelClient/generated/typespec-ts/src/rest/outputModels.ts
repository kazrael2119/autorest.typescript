// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * An abstract representation of a tool call that must be resolved in a subsequent request to perform the requested
 * chat completion.
 */
export interface ChatCompletionsToolCallOutputParent {
  /** The ID of the tool call. */
  id: string;
  type: string;
}

/**
 * A tool call to a function tool, issued by the model in evaluation of a configured function tool, that represents
 * a function invocation needed for a subsequent chat completions request to resolve.
 */
export interface ChatCompletionsFunctionToolCallOutput
  extends ChatCompletionsToolCallOutputParent {
  /** The type of tool call, in this case always 'function'. */
  type: "function";
  /** The details of the function invocation requested by the tool call. */
  function: FunctionCallOutput;
}

/** The name and arguments of a function that should be called, as generated by the model. */
export interface FunctionCallOutput {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format.
   * Note that the model does not always generate valid JSON, and may hallucinate parameters
   * not defined by your function schema. Validate the arguments in your code before calling
   * your function.
   */
  arguments: string;
}

/**
 * Representation of the response data from a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletionsOutput {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsageOutput;
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: Array<ChatChoiceOutput>;
}

/**
 * Representation of the token counts processed for a completions request.
 * Counts consider all tokens across prompts, choices, choice alternates, best_of generations, and
 * other consumers.
 */
export interface CompletionsUsageOutput {
  /** Indicates whether your capacity has been affected by the usage amount (token count) reported here. */
  capacity_type: CapacityTypeOutput;
  /** The number of tokens generated across all completions emissions. */
  completion_tokens: number;
  /** The number of tokens in the provided prompts for the completions request. */
  prompt_tokens: number;
  /** The total number of tokens processed for the completions request and response. */
  total_tokens: number;
}

/**
 * The representation of a single prompt completion as part of an overall chat completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface ChatChoiceOutput {
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finish_reason;
  /** The chat message for a given chat completions prompt. */
  message: ChatResponseMessageOutput;
}

/** A representation of a chat message as received in a response. */
export interface ChatResponseMessageOutput {
  /** The chat role associated with the message. */
  role: ChatRoleOutput;
  /** The content of the message. */
  content: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  tool_calls?: Array<ChatCompletionsToolCallOutput>;
}

/** Represents some basic information about the AI model. */
export interface ModelInfoOutput {
  /** The name of the AI model. For example: `Phi21` */
  model_name: string;
  /** The type of the AI model. A Unique identifier for the profile. */
  model_type: ModelTypeOutput;
  /** The model provider name. For example: `Microsoft Research` */
  model_provider_name: string;
}

/**
 * Representation of the response data from an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface EmbeddingsResultOutput {
  /** Unique identifier for the embeddings result. */
  id: string;
  /** Embedding values for the prompts submitted in the request. */
  data: Array<EmbeddingItemOutput>;
  /** Usage counts for tokens input using the embeddings API. */
  usage: EmbeddingsUsageOutput;
  /** The model ID used to generate this result. */
  model: string;
}

/** Representation of a single embeddings relatedness comparison. */
export interface EmbeddingItemOutput {
  /**
   * List of embeddings value for the input prompt. These represent a measurement of the
   * vector-based relatedness of the provided input.
   */
  embedding: number[];
  /** Index of the prompt to which the EmbeddingItem corresponds. */
  index: number;
}

/** Measurement of the amount of tokens used in this request and response. */
export interface EmbeddingsUsageOutput {
  /** Indicates whether your capacity has been affected by the usage amount (token count) reported here. */
  capacity_type: CapacityTypeOutput;
  /** Number of tokens in the request prompt. */
  input_tokens: number;
  /**
   * Number of tokens used for the prompt sent to the AI model. Typically identical to `input_tokens`.
   * However, certain AI models may add extra tokens to the input hence the number can be higher.
   * (for example when input_type="query").
   */
  prompt_tokens: number;
  /** Total number of tokens transacted in this request/response. */
  total_tokens: number;
}

/**
 * An abstract representation of a tool call that must be resolved in a subsequent request to perform the requested
 * chat completion.
 */
export type ChatCompletionsToolCallOutput =
  | ChatCompletionsToolCallOutputParent
  | ChatCompletionsFunctionToolCallOutput;
/** Alias for ChatRoleOutput */
export type ChatRoleOutput = string;
/** Alias for CapacityTypeOutput */
export type CapacityTypeOutput = string;
/** Alias for CompletionsFinishReasonOutput */
export type CompletionsFinishReasonOutput = string;
/** Alias for ModelTypeOutput */
export type ModelTypeOutput = string;
