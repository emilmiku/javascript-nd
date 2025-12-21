/* ## 4. Unique values from array of objects

Given:

```js
const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] }
];
```

Create a function that returns an array of **unique tags**, sorted alphabetically:

```js
["backend", "css", "design", "frontend", "js", "node"] */

"use strict";

const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] },
];

/* function getUniqueTags(posts) {
    const allTags = posts.flatMap(post => post.tags);
    const uniqueTags = [...new Set(allTags)];
    return uniqueTags.sort();
}
console.log(getUniqueTags(posts)); */

const uniqueTags = new Set();

for (const post of posts) {
  for (const tag of post.tags) {
    uniqueTags.add(tag);
  }
}
const uniqueTagsArr = Array.from(uniqueTags);
console.log(uniqueTagsArr.sort());