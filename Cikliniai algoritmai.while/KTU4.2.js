"use strict";

const prompt = require("prompt-sync")();

const gasTank = Number(prompt("Įveskite kuro bako talpą: "));
const gasConsumption = Number(prompt("Įveskite kuro sąnaudas n: "));


let currentDay = 1;
let currentGas = gasTank;
 
while(currentGas > 0) {
    const dayIsOdd = currentDay % 2 !== 0;
    if(dayIsOdd) {
        currentGas -= 2 * gasConsumption;
    } else {
        currentGas -= gasConsumption;
    }
    currentDay++;
}

console.log(`Keliauti bus galima ${currentDay - 1} dienų/(as)/(ą).`);