import { expect, test, beforeAll } from "vitest";
import fs from "node:fs"

// can reference full path, otherwise it requires `resolve.mainFields: ["module"]`
import initWasm, { add } from "../math-lib/pkg/math_lib.js";

// wasm-pack's web build is not supposed to run on Vitest/NodeJS.
// but you can still provide wasm module manually to initialize wasm-bindgen based js module.
beforeAll(async () => {
  const wasmSource = await fs.promises.readFile("./math-lib/pkg/math_lib_bg.wasm");
  const wasmModule = await WebAssembly.compile(wasmSource);
  await initWasm(wasmModule);
});

test("wasm add function", () => {
  expect(add(2, 2)).toBe(4);
});
