"use strict";

const prompt = require("prompt-sync")();

const variant = prompt("Įveskite užduoties variantą: ");
const a = Number(prompt("Įveskite a reikšmę: "));
const b = Number(prompt("Įveskite b reikšmę: "));

if (variant === "1") {
  const result = a * b + 3;
  console.log(`Atsakymas: x = ${result}`);
} else if (variant === "2") {
  const result = a + b;
  console.log(`Atsakymas: x = ${result}`);
} else {
  const result = a - b;
  console.log(`Atsakymas: x = ${result}`);
}
