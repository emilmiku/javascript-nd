/* ## 7. Add new property during mapping

Given:
```js
const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 }
];
```
Use **map** to return:

```js
[
  { title: "Phone", price: 500, priceWithVAT: 605 },
  { title: "Laptop", price: 1200, priceWithVAT: 1452 },
  { title: "Tablet", price: 800, priceWithVAT: 968 }
]
```

Assume VAT = 21%. */
"use strict";
const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 },
];

const productsWithVAT = products.map((item) => {
  return {
    title: item.title,
    price: item.price,
    priceWithVAT: Math.round(item.price * 1.21),
  };
});

/*const productsWithVAT = products.map((item) => {
    return {
    ...product,
        priceWithVAT: Math.round(item.price * 1.21)
    }
}); cia svariausias budas turbut*/

console.log(productsWithVAT);
