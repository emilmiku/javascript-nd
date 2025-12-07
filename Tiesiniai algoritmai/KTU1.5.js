"use strict";

const prompt = require("prompt-sync")();

const wallLenght = Number(prompt("Sienos ilgis (metrais) "));
const wallHeight = Number(prompt("Sienos aukštis (metrais) "));
const brickCost = Number(prompt("Plytos kaina (Lt) "));

const brickAmount = (wallLenght / 0.2) * (wallHeight / 0.1);
const totalCost = brickAmount * brickCost;

console.log(`Plytų kiekis: ${Math.ceil(brickAmount)}`);
console.log(`Plytos kainuos ${totalCost} Lt`);
