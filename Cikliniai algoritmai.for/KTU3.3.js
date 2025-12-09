"use strict";

const prompt = require("prompt-sync")();

const firstSec = parseInt(prompt("Įveskite, kiek snaigių nukrito per pirmąją sekundę: "));
const totalSec = parseInt(prompt("Įveskite, kiek sekundžių snigo: "));

let currentCount = firstSec;
let totalCount = 0;

for (let sec = 1; sec <= totalSec; sec++) {
    totalCount += currentCount;
    currentCount *= 2;
}

console.log(`Per ${totalSec} sek. bus nukritę ${totalCount} snaigės.`);