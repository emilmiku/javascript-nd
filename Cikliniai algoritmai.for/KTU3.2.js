"use strict";

const prompt = require("prompt-sync")();

const totalSteps = parseInt(prompt("Įveskite žingsnių kiekį iki mokyklos: "));

let clapCount = 0;
let snapCount = 0;

for (let step = 1; step <= totalSteps; step++) {
  if (step % 10 === 0) {
    clapCount++;
  } else if (step % 10 === 5) {
    snapCount++;
  }
}

console.log(`Suplojimų bus: ${clapCount}`);
console.log(`Spragtelėjimų bus: ${snapCount}`);
