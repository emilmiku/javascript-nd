"use strict";

const prompt = require("prompt-sync")();

const a = parseInt(prompt("Įveskite intervalo pradžią: "));
const b = parseInt(prompt("Įveskite intervalo pabaigą: "));

let count = 0;

for (let i = a; i <= b; i++) {
  if (i % 6 === 0) {
    count++;
  }
}

console.log(`Reikalingų marškinėlių skaičius: ${count}`);
