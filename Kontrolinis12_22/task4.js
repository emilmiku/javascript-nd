/* ## 4. Count character types in a text (using loops only) **1 point**
Given:
```js
const text = "Hello123! Welcome to JS 2025.";
```

### **Your task**
Write a loop (or multiple loops) that analyzes the string and produces an object like:
```js
{
  letters: 16,
  digits: 6,
  spaces: 4,
  symbols: 3
}
```
### **Rules**

- **letters** → all A–Z or a–z
- **digits** → 0–9
- **spaces** → `' '` (space character)
- **symbols** → anything that is _not_ a letter, digit, or space
- You **must use a loop** (`for`, `while`, or `for...of`) to iterate over characters. */
"use strict";

const text = "Hello123! Welcome to JS 2025.";

const results = {
  letters: 0,
  digits: 0,
  spaces: 0,
  symbols: 0,
};

for (const char of text) {
  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    results.letters++;
  } else if (char >= "0" && char <= "9") {
    results.digits++;
  } else if (char === " ") {
    results.spaces++;
  } else {
    results.symbols++;
  }
}

console.log(results);