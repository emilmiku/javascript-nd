/* ##2 Get Digits: 
Create a function that given a string, 
returns the integer made from the strings digits. */
"use strict";

const prompt = require("prompt-sync")();

const string = prompt("Give a string containing numbers: ");

function getDigits(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(string[i]) && string[i] !== " ") {
      result += string[i];
    }
  }
  return result;
}

console.log(getDigits(string));
