/* ## 9. Create a “short description” for products

Given:

```js
const items = [
  { name: "Phone", description: "A very nice smartphone with good camera", price: 500 },
  { name: "Laptop", description: "Powerful laptop for work and games", price: 1200 }
];
```

Write a function that returns an array of **strings** in format:

```txt
"Phone (500€): A very nice smartphone..."
"Laptop (1200€): Powerful laptop for work..."
```

Rules:

* If `description.length > 25`, cut it and add `"..."`.
* Use **template literals**, **conditions**, and **string methods**. */

const items = [
  {
    name: "Phone",
    description: "A very nice smartphone with good camera",
    price: 500,
  },
  {
    name: "Laptop",
    description: "Powerful laptop for work and games",
    price: 1200,
  },
];

const shortDescriptions = items.map((item) => {
  let { description } = item; // senas destructuring budas let description = item.description
  if (description.length > 25) {
    description = description.slice(0, 25) + "...";
  }
  return `${item.name} (${item.price}): ${description}`;
});

console.log(shortDescriptions);
