"use strict";

const prompt = require("prompt-sync")();

let nuts = Number(prompt("Sukauptas riešutų kiekis: "));
const kids = Number(prompt("Voveriukų skaičius: "));

let dayNorm = (kids + 1) * 3;
let days = 0;

while (nuts >= dayNorm) {
  nuts -= dayNorm;
  days++;
}

console.log(`Riešutų sukaupta ${days} dienoms`);

if (days >= 92) {
  console.log("Riešutų užteks visai žiemai.");
} else {
  console.log("Riešutų neužteks visai žiemai.");
}
