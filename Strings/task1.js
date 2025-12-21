/* ##1 Remove Blanks: 
Create a function that, given a string, 
returns all of that string’s contents, but without blanks. */
"use strict";
const prompt = require("prompt-sync")();

const string = prompt("Give a string: ");

function withoutBlanks(string) {
  return string.replaceAll(" ", "");
}

console.log(withoutBlanks(string));
