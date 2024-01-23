import { defineConfig } from "vite";
import wasmPack from "vite-plugin-wasm-pack";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    clearScreen: false,
    root: "web",
    plugins: [wasmPack("./math-lib")],
  };
});
