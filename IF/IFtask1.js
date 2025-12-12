// Write function which returns true if the given number is positive (greater than 0) and false otherwise.

"use strict";

const prompt = require("prompt-sync")();

const givenNumber = Number(prompt("Write a number: "));

if (givenNumber > 0) {
  console.log("True");
} else {
  console.log("False");
}
