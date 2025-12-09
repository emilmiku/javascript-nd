"use strict";

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Kiek buvo pirkinių: "));
const prices = [];
const weights = [];

for (let i = 1; i <= n; i++) {
  const item = prompt(`Įveskite ${i} pirkinio kainą ir svorį: `).split(" ");
  const price = Number(item[0]);
  const weight = Number(item[1]);
  prices.push(price);
  weights.push(weight);
}

let sum = 0;
let totalWeight = 0;

for (const price of prices) {
  sum += price;
}

for (const weight of weights) {
  totalWeight += weight;
}

const average = sum / n;

const avgCt = average % 100;
const avgLt = Math.floor(average / 100);

console.log(`Pirkinio vidutinė kaina: ${avgLt} Lt ${avgCt} ct.`);

if (totalWeight <= 5000) {
  console.log("Petriukas galės parnešti pirkinius.");
} else {
  console.log("Petriukas negalės parnešti pirkinių.");
}
