// vite.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./web/test.ts"],
    environment: "jsdom",
  },
  // this is necessary when importing "../math-lib/pkg"
  // resolve: {
  //   mainFields: ["module"]
  // }
});
