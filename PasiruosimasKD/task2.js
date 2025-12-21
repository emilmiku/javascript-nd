/* # 2. Filter and sort products with multiple conditions

Given:

```js
const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true }
];
```

Write a function that:

1. **Filters** only products that are `inStock`.
2. **Filters** only products with `price >= 10`.
3. **Sorts** the result by price from **cheapest to most expensive**.
4. Returns an array of **titles only**. */
"use strict";
const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true },
];

const result1 = products.filter((item) => {
  return item.inStock === true;
});
console.log(result1);

const result2 = products.filter((item) => {
  return item.price >= 10;
});
console.log(result2);

const productsCopy = [...products];
const result3 = productsCopy.sort(function (a, b) {
  return a.price - b.price;
});
console.log(result3);

const result4 = products.map((product) => {
  return product.title;
});
console.log(result4);
