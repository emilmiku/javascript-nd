"use strict";

import { books } from "./data.js";

function addBook(books, title, price) {
    books.push({
        title: title,
        price: price
    });
}
addBook(books, "Knyga #6", 2.75);

console.log(books);