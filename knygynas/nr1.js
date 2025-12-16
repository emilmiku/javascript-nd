"use strict"

import {books} from "./data.js";


function printBookList(books) {
    books
    .map(function(books, index) {
        return (index + 1) + ". " + books.title;
    })
    .forEach(function (line) {
        console.log(line);    
    });
}

printBookList(books);