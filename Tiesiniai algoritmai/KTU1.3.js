"use strict";

const prompt = require("prompt-sync")();

const fives = Number(prompt("Kiek yra monetų po 5 ct? "));
const twenties = Number(prompt("Kiek yra monetų po 20 ct? "));
const twos = Number(prompt("Kiek yra monetų po 2 Lt? "));

const total = fives * 0.05 + twenties * 0.2 + twos * 2;

console.log(`Taupyklėje yra ${total} Lt.`);
