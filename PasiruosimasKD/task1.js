/* ## 1. Complex transformation with conditions

Given:

```js
const temperatures = [18, 25, 30, 10, 28];
```

Use **map** to return an array of objects:

```js
[
  { temp: 18, status: "warm" },
  { temp: 25, status: "hot" },
  { temp: 30, status: "hot" },
  { temp: 10, status: "cold" },
  { temp: 28, status: "hot" }
]
```

Rules:

* temp < 15 → `"cold"`
* temp >= 15 && temp < 25 → `"warm"`
* temp >= 25 → `"hot"`
*/

"use strict";

const temperatures = [18, 25, 30, 10, 28];

const result = temperatures.map((value) => {
  if (value < 15) {
    return { temp: value, status: "cold" };
  }
  if (value >= 15 && value < 25) {
    return { temp: value, status: "warm" };
  }
  return { temp: value, status: "hot" };
});

console.log(result);
