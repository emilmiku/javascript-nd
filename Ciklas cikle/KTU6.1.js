"use strict";

const prompt = require("prompt-sync")();

const interval = prompt(
  "Įveskite intervalo pradžią ir pabaigą (pažymius atskirti ; )  "
).split(";");

const firstNumber = Number(interval[0]);
const lastNumber = Number(interval[1]);
let number = firstNumber;

console.log("Skaičius | Dalijasi iš: ");
while (number <= lastNumber) {
  findDividerCount(number)
  number++;
}

function findDividerCount(num) {
  let dividers = 0;
  for (let d = 2; d < num; d++) {
    if (num % d === 0) {
      dividers++;
    }
  }
  console.log(`${num} | ${dividers}`);
}
