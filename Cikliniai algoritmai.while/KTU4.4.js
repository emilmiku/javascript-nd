"use strict";

const prompt = require("prompt-sync")();

let bookChapters = Number(prompt("Įveskite knygos skyrių skaičių: "));

let days = 0;
let chaptersToday = 1;
let totalRead = 0;

while (bookChapters > 0) {
  days++;

  if (chaptersToday <= bookChapters) {
    bookChapters -= chaptersToday;
    totalRead += chaptersToday;
  } else {
    totalRead += bookChapters;
    bookChapters = 0;
  }
  chaptersToday++;
}

const avgChapters = totalRead / days;

console.log(`Tadas visą knygą perskaitys per ${days} dienas (-ų).`);
console.log(
  `Tadas vidutiniškai per dieną perskaitė ${avgChapters.toFixed(
    2
  )} skyrius (-ų).`
);
