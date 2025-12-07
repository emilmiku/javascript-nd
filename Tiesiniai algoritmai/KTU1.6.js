"use strict";

const prompt = require("prompt-sync")();

const longerBase = Number(prompt("Trapecijos ilgesniojo pagrindo ilgis: "));
const shorterBase = Number(prompt("Trapecijos trumpesniojo pagrindo ilgis: "));
const height = Number(prompt("Trapecijos aukštinės ilgis: "));

const trapezoidArea = ((longerBase + shorterBase) * height) / 2;

console.log(`Trapecijos plotas: ${trapezoidArea}`);
