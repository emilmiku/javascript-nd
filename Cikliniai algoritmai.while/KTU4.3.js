"use strict";

const prompt = require("prompt-sync")();

let candyCount = Number(prompt("Petriukas gavo saldainių: "));
let candyEaten = 0;

let days = 0;

while (true) {
  const candyEaten = Number(prompt("Per dieną suvalgė: "));
  if (candyEaten <= candyCount) {
    days++;
    candyCount -= candyEaten;
  } else {
    break;
  }
}
console.log(
  `Petriukui saldainių užteks ${days} dienoms ir jam liks ${candyCount} saldainiai.`
);
