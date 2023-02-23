import { expect, test } from "vitest";

import { add } from "../math-lib/pkg";

test("wasm add function", () => {
  expect(add(2, 2)).toBe(2);
});
