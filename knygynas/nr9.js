"use strict";

import { books } from "./data.js";

let pricierBooks = books.filter(book => book.price > 7.5);
console.log(pricierBooks);