"use strict";

import { books } from "./data.js";

function bookDiscount(books) {

    console.log("Nukainuota !!!");

for (let i = 0; i < books.length; i++) {
    if (books[i].price > 10) {
        let oldPrice = books[i].price;
        let newPrice = oldPrice * 0.75;
        console.log(
            "Knyga: " + books[i].title +
            " Sena kaina: " + oldPrice.toFixed(2) +
            " Pardavimo kaina: " + newPrice.toFixed(2) +
            " Pritaikyta nuolaida - 25%"
        );
    }
}

}

bookDiscount(books);