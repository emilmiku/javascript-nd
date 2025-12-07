"use strict";

const prompt = require("prompt-sync")();

const cups = Number(prompt("Puodelių, kuriuos reikia supakuoti, skaičius: "));

const boxes = cups / 3;
const cupsLeft = cups % 3;

console.log(`Pilnų dėžučių skaičius: ${Math.floor(boxes)} `);
console.log(`Nesupakuotų puodelių skaičius: ${cupsLeft} `);
