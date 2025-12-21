/* ## 11. Search with multiple filters
Given:
```js
const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] }
];
```
Write a function:

```js
searchBooks(books, { minPages, hasTag })
```
which returns books that:

* have at least `minPages` pages
* **and** contain the tag `hasTag` in their `tags` array

Example:
```js
searchBooks(books, { minPages: 150, hasTag: "css" });
```
Should return books matching both conditions. */
"use strict";
const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] },
];

function searchBooks(books, filters) {
  return books.filter(
    (book) =>
      book.pages >= filters.minPages && book.tags.includes(filters.hasTag)
  );
}

console.log(searchBooks(books, { minPages: 150, hasTag: "css" }));
