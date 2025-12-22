/* ## 2. Filter and sort movie list with multiple conditions **1 point**
Given:
```js
const movies = [
  { title: "Skyfall", year: 2012, rating: 7.8, genre: "action" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "The Room", year: 2003, rating: 3.7, genre: "drama" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];
```
### **Your task**
1. **Filter** the list to keep only movies that:

   - were released **after 2010**
   - have a rating **7.5 or higher**

2. From the filtered results, **sort the movies by rating** in **descending** order.

### **Expected result:**
```js
[
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];
``` */
"use strict";
const movies = [
  { title: "Skyfall", year: 2012, rating: 7.8, genre: "action" },
  { title: "Inside Out", year: 2015, rating: 8.2, genre: "animation" },
  { title: "The Room", year: 2003, rating: 3.7, genre: "drama" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "action" },
  { title: "Interstellar", year: 2014, rating: 8.6, genre: "sci-fi" },
  { title: "Frozen", year: 2013, rating: 7.5, genre: "animation" },
];

const filteredMovies = movies.filter((movie) => {
  return movie.year > 2010 && movie.rating >= 7.5;
});

const sortedFilteredMovies = filteredMovies.sort((a, b) => {
  return b.rating - a.rating;
});

console.log(sortedFilteredMovies);
