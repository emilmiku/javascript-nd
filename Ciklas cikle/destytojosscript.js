// ❌ 1. 'x' is defined but never used
let x = 10;

// ❌ 2. Missing 'use strict' in function (ESLint will often suggest strict mode)
function sum(a, b) {
  // ❌ 3. Missing semicolon
  const result = a + b;
  return result;
}

// ❌ 4. Console statements not allowed (no-console)
console.log(sum(2, 3));

// ❌ 5. == instead of === (eqeqeq rule)
if (sum(2, 2) == "4") {
  console.log("Loose comparison!");
}

// ❌ 6. Missing semicolon again
console.log("Done");
