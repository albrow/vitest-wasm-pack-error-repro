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
npm test:js
```
