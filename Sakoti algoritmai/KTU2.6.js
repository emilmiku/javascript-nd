"use strict";

const prompt = require("prompt-sync")();

const birdCounts = prompt(
  "Įveskite kiek kiekvienos rūšies paukščių liko žiemoti: "
).split(" ");

const max = Math.max(
  Number(birdCounts[0]),
  Number(birdCounts[1]),
  Number(birdCounts[2])
);
const min = Math.min(
  Number(birdCounts[0]),
  Number(birdCounts[1]),
  Number(birdCounts[2])
);
const mid =
  Number(birdCounts[0]) +
  Number(birdCounts[1]) +
  Number(birdCounts[2]) -
  max -
  min;

console.log(max);
console.log(mid);
console.log(min);
console.log(`Skirtumas tarp didžiausio ir mažiausio kiekio: ${max - min}`);
