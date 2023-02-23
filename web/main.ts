import { add } from "../math-lib/pkg";
import init from "../math-lib/pkg";

(async () => {
  await init();
  const result = add(2, 2);
  console.log(
    `We called add function from rust/wasm and the result is ${result}`
  );
})();
