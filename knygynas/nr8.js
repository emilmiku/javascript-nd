"use strict";

import { books } from "./data.js";

let booksFromAtoZ = [...books].sort((a, b) => a.title.localeCompare(b.title));
console.log("Nuo A iki Z: ", booksFromAtoZ);

let booksFromZtoA = [...books].sort((a, b) => b.title.localeCompare(a.title));
console.log("Nuo Z iki A: ", booksFromZtoA);
