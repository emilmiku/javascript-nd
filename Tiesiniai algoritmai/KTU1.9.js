"use strict";

const prompt = require("prompt-sync")();

const cookies = Number(prompt("Kiek sausainių iškepė Tautvydas? "));
const friendsWithCookies = Number(
  prompt("Keli draugai dar atsinešė po tiek pat sausainių? ")
);
const totalPeople = Number(prompt("Kiek žmonių iš viso dalyvavo šventėje? "));

const cookiesPerPerson = (cookies * (friendsWithCookies + 1)) / totalPeople;
const additionalCookies = (cookies * (friendsWithCookies + 1)) % totalPeople;

console.log(
  `Kiekvienas šventės dalyvis gavo po ${Math.floor(
    cookiesPerPerson
  )} sausainius.`
);
console.log(`Tautvydui papildomai atiteko ${additionalCookies} sausainiai.`);
