// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Context } from "mocha";
import { Recorder, RecorderStartOptions } from "@azure-tools/test-recorder";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

/**
 * creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */

export async function createRecorder(context: Context): Promise<Recorder> {
  const recorder = new Recorder(context.currentTest);
  await recorder.start(recorderEnvSetup);
  return recorder;
}
