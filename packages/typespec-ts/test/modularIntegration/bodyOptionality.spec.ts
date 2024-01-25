import { BodyOptionalityClient } from "./generated/parameters/body-optionality/src/index.js";
import { assert } from "chai";

const body = {name: "foo" };
describe.only("Empty Client", () => {
  let client: BodyOptionalityClient;

  beforeEach(() => {
    client = new BodyOptionalityClient({
      allowInsecureConnection: true
    });
  });

  it("Body Optionality requiredExplicit test", async () => {
    try {
      const result = await client.requiredExplicit(body);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("Body Optionality set test", async () => {
    try {
      const result = await client.set(body);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("Body Optionality omit test", async () => {
    try {
      const result = await client.omit(body);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("Body Optionality requiredImplicit test", async () => {
    try {
      const result = await client.requiredImplicit(body);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

});