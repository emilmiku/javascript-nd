/* ## All tasks must be performed using functions.
## 1. Transform list of usernames into detailed user objects **1 point**
Given
```js
const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];
```
Use **`map`** to transform the array into:

```js
[
  { original: "alice_01", lower: "alice_01", length: 8, hasNumber: true },
  { original: "Bob99", lower: "bob99", length: 5, hasNumber: true },
  {
    original: "charlie_dev",
    lower: "charlie_dev",
    length: 11,
    hasNumber: false,
  },
  { original: "DANA", lower: "dana", length: 4, hasNumber: false },
  { original: "eve-test", lower: "eve-test", length: 8, hasNumber: false },
];
```

### **Rules**

For each username:

- **original** → the original string
- **lower** → the username converted to lowercase
- **length** → number of characters
- **hasNumber** → `true` if the string contains at least one digit (`0–9`), otherwise `false` */
"use strict";

const usernames = ["alice_01", "Bob99", "charlie_dev", "DANA", "eve-test"];

const userObjects = usernames.map((username) => ({
  original: username,
  lower: username.toLowerCase(),
  length: username.length,
  hasNumber: username.split("").some((symbol) => !isNaN(symbol)),
}));

console.log(userObjects);
