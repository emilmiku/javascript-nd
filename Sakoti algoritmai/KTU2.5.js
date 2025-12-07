"use strict";

const prompt = require("prompt-sync")();

const averages = prompt("Įveskite klasių vidurkius: ").split(" ");

const classA = Number(averages[0]);
const classB = Number(averages[1]);
const classC = Number(averages[2]);
const classD = Number(averages[3]);

const maxAverage = Math.max(classA, classB, classC, classD);

console.log(`Didžiausias vidurkis: ${maxAverage}`);

if (maxAverage === classA) {
  const diffB = classA - classB;
  const diffC = classA - classC;
  const diffD = classA - classD;
  console.log(`Kitų klasių vidurkiai skiriasi: ${diffB}, ${diffC}, ${diffD}`);
} else if (maxAverage === classB) {
  const diffA = classB - classA;
  const diffC = classB - classC;
  const diffD = classB - classD;
  console.log(`Kitų klasių vidurkiai skiriasi: ${diffA}, ${diffC}, ${diffD}`);
} else if (maxAverage === classC) {
  const diffA = classC - classA;
  const diffB = classC - classB;
  const diffD = classC - classD;
  console.log(`Kitų klasių vidurkiai skiriasi: ${diffA}, ${diffB}, ${diffD}`);
} else {
  const diffA = classD - classA;
  const diffB = classD - classB;
  const diffC = classD - classC;
  console.log(`Kitų klasių vidurkiai skiriasi: ${diffA}, ${diffB}, ${diffC}`);
}

// bet jei dvi klases turei vienodus auksciausius vidurkius, tada problema
