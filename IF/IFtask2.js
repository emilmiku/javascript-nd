// ## 2 Implement a function `isLandscape` that can detect whether an image is landscape.
// The function should take two parameters: the width and height of an image.
// If width is greater than height, then the image is landscape and function return true.
// // Otherwise - if the height is greater than the width - it returns false, then the image is portrait.
// Store image parameters comparision result into boolean variable, then use boolean variable in `if` statement.

"use strict";

const prompt = require("prompt-sync")();

function isLandscape(width, height) {
  return width > height;
}

const width = Number(prompt("Enter image width: "));
const height = Number(prompt("Enter image height: "));

const result = isLandscape(width, height); //boolean

if (result) {
  console.log("The image is landscape.");
} else {
  console.log("The image is a portrait. ");
}
