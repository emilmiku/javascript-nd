"use strict";

import { books } from "./data.js";

function printLastBook(books) {
    let lastBook = books[books.length - 1];
    console.log("Paskutine knyga:")
    console.log(lastBook.title + " - kaina " + lastBook.price);
}
printLastBook(books);