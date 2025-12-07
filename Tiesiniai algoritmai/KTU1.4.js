"use strict";

const prompt = require("prompt-sync")();

const velocity = Number(prompt("Koks automobilio greitis? "));

const time = (0.264 / velocity) * 3600;
console.log(`Automobilis tunelį pravažiuos per ${time.toFixed(2)} s`);
