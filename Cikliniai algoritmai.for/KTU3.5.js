"use strict";

const prompt = require("prompt-sync")();

let evenCount = 0;

for (let i = 1; i <= 10; i++) {
  const num = Number(prompt(`Įveskite ${i} draugo sugalvotą skaičių: `));

  if (num % 2 === 0) {
    evenCount++;
  }
}

if (evenCount > 0) {
  console.log("Atsakymas: " + evenCount);
} else {
  console.log("Atsakymas: Nėra");
}
