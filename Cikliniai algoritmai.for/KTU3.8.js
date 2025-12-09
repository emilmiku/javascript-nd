"use strict";

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Kiek dalyvavo bėgikų: "));

const times = [];

for (let i = 1; i <= n; i++) {
    const runnerTime = Number(prompt(`Įveskite ${i} bėgiko laiką: `));
times.push(runnerTime);
}

const fastest = Math.min(...times);

let sum = 0;

for (const time of times) {
    sum += time;
}

const average = sum / n;

const diff = average - fastest;

console.log(`Greičiausio bėgiko laikas: ${fastest} sek.`);
console.log(`Jis buvo ${diff.toFixed(1)} sek geresnis už vidurkį.`);