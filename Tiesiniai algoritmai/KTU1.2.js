"use strict";

const prompt = require("prompt-sync")();

const startCount = Number(prompt("Kiek žuvų gyvena akvariume? "));
const dailyAddition = Number(
  prompt("Kiek žuvų į akvariumą įdedama kiekvieną dieną? ")
);
const daysPassed = Number(prompt("Kiek dienų praėjo? "));

const totalCount = startCount + dailyAddition * daysPassed;

console.log(`Po ${daysPassed} d. akvariume gyvens ${totalCount} žuvų.`);
