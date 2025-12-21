/* ## 3. Parse CSV string into array of objects

Given a CSV string:

```js
const input = "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";
```

Write a function that returns:

```js
[
  { name: "Jonas", age: 25, city: "Vilnius" },
  { name: "Ona", age: 30, city: "Kaunas" },
  { name: "Petras", age: 22, city: "Klaipeda" }
]
```

Use **string methods**, **arrays**, and **objects** (no libraries). */
"use strict";
const input =
  "name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

function parseCSV(input) {
  const lines = input.split("\n");
  const headers = lines[0].split(",");
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const objects = {};
    for (let j = 0; j < headers.length; j++) {
        const value = values[j];
        objects[headers[j]] = isNaN(value) ? value : Number(value);
    }
    result.push(objects);
  }
  return result;
}

console.log(parseCSV(input));