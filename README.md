## Project structure

- **math-lib/** contains some Rust code.

- **web/** is the root directory for the web-related stuff.

## Prerequisites

- Rust and Cargo version >= 1.62.1
- Node version >= 16.17.0
- `wasm-pack` ([install here](https://rustwasm.github.io/wasm-pack/installer/))

## Common commands

### Install dependencies

```sh
npm install
npm run build:wasm
```

### Build web application with vite

Builds the project and places it into the **/web/dist** folder.

```sh
npm run build
```

### Run tests with vitest.

```sh
pnpm test:js

> vitest-wasm-pack-error-repro@0.1.0 test:js /home/hiroshi/code/tmp/vitest-wasm-pack-error-repro
> vitest run


 RUN  v0.26.3 /home/hiroshi/code/tmp/vitest-wasm-pack-error-repro

 ✓ web/test.ts (1)

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  13:57:48
   Duration  1.08s (transform 259ms, setup 0ms, collect 21ms, tests 3ms)
```
