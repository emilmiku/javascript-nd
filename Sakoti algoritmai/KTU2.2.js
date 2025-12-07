//Didžioji kūdrinė varlė. Didžioji kūdrinė varlė – beuodegis varliagyvis. Ji sveria m gramų (m -
//realusis skaičius). Mokslininkai, tyrinėjantys didžiąsias kūdrines varles, nusprendė n varlių
//stebėti. Jei stebimos varlės svers daugiau kaip 5 kilogramus, ekrane turi būti rodomas pranešimas
//,,Varlių stebėjimui pakanka“, jei mažiau – ,,Varlių stebėjimui per mažai“.

"use strict";

const prompt = require("prompt-sync")();

let frogWeight = Number(prompt("Kiek sveria varlė (gramais)? "));
let frogCount = Number(prompt("Kiek varlių norima stebėti? "));

let totalWeight = (frogWeight * frogCount) / 1000;

if (totalWeight > 5) {
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}
