"use strict";

import { books } from "./data.js";


function totalPrice(books) {
    let total = 0;
    for (let i = 0; i < books.length; i++) {
        total += books[i].price;
    }
    return total;
}

console.log("Bendra knygu verte (EUR): ");
console.log(totalPrice(books).toFixed(2));