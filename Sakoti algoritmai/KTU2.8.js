"use strict";

const prompt = require("prompt-sync")();

const a = Number(prompt("Įveskite a reikšmę: "));
const b = Number(prompt("Įveskite b reikšmę: "));
const c = Number(prompt("Įveskite c reikšmę: "));

if (a % 3 === 0) {
  console.log(`Atsakymas: ${a}`);
} else if (b % 3 === 0) {
  console.log(`Atsakymas: ${b}`);
} else if (c % 3 === 0) {
  console.log(`Atsakymas: ${c}`);
} else {
  console.log("Atsakymas: nėra");
}
