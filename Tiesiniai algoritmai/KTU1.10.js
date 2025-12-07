"use strict";

const prompt = require("prompt-sync")();

const candyDaily = Number(prompt("Kiek saldainių gauna Marius? "));
const candyEaten = Number(prompt("Po kiek saldainių suvalgo? "));
const daysLeft = Number(prompt("Kelios dienos liko iki Kalėdų? "));

const giftSets = ((candyDaily - candyEaten) * daysLeft) / candyEaten;
const candyLeft = ((candyDaily - candyEaten) * daysLeft) % candyEaten;

console.log(`Marius dovanas paruoš ${Math.floor(giftSets)} draugų.`);
console.log(`Supakavus dovanas liks ${candyLeft} saldainiai.`);
