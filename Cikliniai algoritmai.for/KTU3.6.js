"use strict";

const prompt = require("prompt-sync")();

const dices = Number(prompt("Įveskite kauliukų kiekį: "));

let sum = 0;

for (let i = 1; i <= dices; i++) {
  const roll = Number(prompt(`${i}-o kauliuko taškų kiekis: `));
  sum += roll;
}

const max = 6 * dices;
const average = sum / dices;
const half = max / 2;

console.log(`Iš viso buvo galima surinkti taškų: ${max}`);
console.log(`Tomas iš viso surinko: ${sum} taškų`);
console.log(`Jo taškų vidurkis: ${average.toFixed(1)}`);

if (sum > half) {
    console.log("Loterija laimėta.");
} else {
    console.log("Loterija pralaimėta.");
}
