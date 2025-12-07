"use strict";

const prompt = require("prompt-sync")();

let height = Number(
  prompt("Iš kokio aukščio (metrais) šoka parašiutininkas? ")
);
let parachuteTime = Number(
  prompt("Per kiek sekundžių išsiskleidžia jo parašiutas? ")
);

let fallTime = Math.sqrt((2 * height) / 9.8);

if (fallTime > parachuteTime) {
  console.log("Parašiutas išsiskleis");
} else {
  console.log("Parašiutas neišsiskleis");
}
