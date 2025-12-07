"use strict";

const prompt = require("prompt-sync")();

const cars = Number(prompt("Automobilių skaičius: "));
const capacity = Number(prompt("Į keltą telpa automobilių: "));

const ferryTrips = cars / capacity;
const carsLeft = cars % capacity;

console.log(`Perkels per kartų: ${Math.floor(ferryTrips)} `);
console.log(`Liks neperkelta: ${carsLeft} `);
