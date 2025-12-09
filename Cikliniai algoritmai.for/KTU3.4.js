"use strict";

const prompt = require("prompt-sync")();

const n = Number(prompt("Kiek eglučių atvežta? "));

let sum = 0;

for (let i = 1; i <= n; i++) {
  const height = Number(prompt("Įveskite " + i + " eglutės aukštį: "));
  sum += height; // sum = sum + height
}
const average = sum / n;

console.log("Eglutės aukščio vidurkis: " + average.toFixed(1));
