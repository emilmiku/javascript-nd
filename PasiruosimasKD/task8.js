/* ## 8. Merge arrays of objects by id
Given:
```js
const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" }
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 }
];
```
Write a function that returns:
```js
[
  { id: 1, name: "Jonas", score: 10 },
  { id: 2, name: "Ona", score: 9 },
  { id: 3, name: "Petras", score: 7 }
]
```
(Assume each `id` exists in both arrays.) */
"use strict";

const people = [
  { id: 1, name: "Jonas" },
  { id: 2, name: "Ona" },
  { id: 3, name: "Petras" },
];

const scores = [
  { id: 1, score: 10 },
  { id: 3, score: 7 },
  { id: 2, score: 9 },
];

const merged = people.map((person) => {
  const score = scores.find((x) => x.id === person.id);

  return {
    ...person,
    ...score,
  };
});
console.log(merged);
