"use strict";

import { books } from "./data.js";

function booksByPrice(books) {
    let booksCopy = books.slice();

    booksCopy.sort(function (a, b) {
        return a.price - b.price;
    }); 
    return booksCopy;
}

console.log(booksByPrice(books));