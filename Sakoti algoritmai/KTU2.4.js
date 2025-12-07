"use strict";

const prompt = require("prompt-sync")();

const priceRange = prompt("Įveskite kainas (litais) a ir b: ").split(" ");
const bunQuantities = prompt("Įveskite kiekius n1 n2 n3: ").split(" ");
const bunPrice = Number(prompt("Įveskite bandelės kainą (litais): "));

if (bunPrice <= Number(priceRange[0])) {
  const totalPaid = bunPrice * Number(bunQuantities[0]);
  console.log(`Už bandeles bus sumokėta: ${totalPaid.toFixed(2)} Lt.`);
} else if (bunPrice < Number(priceRange[1])) {
  const totalPaid = bunPrice * Number(bunQuantities[1]);
  console.log(`Už bandeles bus sumokėta: ${totalPaid.toFixed(2)} Lt.`);
} else {
  const totalPaid = bunPrice * Number(bunQuantities[2]);
  console.log(`Už bandeles bus sumokėta: ${totalPaid.toFixed(2)} Lt.`);
}
