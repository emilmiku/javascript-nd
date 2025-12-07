"use strict";

const prompt = require("prompt-sync")();

const grades = prompt(
  "Kokius pažymius gavo Petriukas?(pažymius atskirti kableliais) "
).split(",");

const average =
  (Number(grades[0]) +
    Number(grades[1]) +
    Number(grades[2]) +
    Number(grades[3]) +
    Number(grades[4])) /
  5;

if (average > 9) {
  console.log("Petriukas gaus tris saldainius");
} else if (average >= 7) {
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}
