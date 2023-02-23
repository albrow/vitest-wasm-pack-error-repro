// vite.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["./web/**/*.{js,ts,jsx,tsx}"],
    environment: "jsdom",
  },
});
