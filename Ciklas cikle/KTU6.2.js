"use strict";

const fs = require("fs"); //include file system

const data = fs.readFileSync("KTU6.2Duomenys.txt", { encoding: "utf8" });

const [studentCount, ...studentInfo] = data.split("\n");

let total = 0;

for (let i = 0; i < studentCount; i++) {
  const [dayCount, ...exerciseCounts] = studentInfo[i].split(" ");

  let sum = 0;
  for (let j = 0; j < Number(dayCount); j++) {
    sum += Number(exerciseCounts[j]);
    total += Number(exerciseCounts[j]);
  }

  fs.appendFileSync("KTU6.2Rezultatai.txt", `${sum}\n`, { encoding: "utf8" });
}

fs.appendFileSync("KTU6.2Rezultatai.txt", `${total}`, { encoding: "utf8" });

// version 2

// const data = fs.readFileSync("KTU6.2Duomenys.txt", { encoding: "utf8" });

// const studentInfo = data.split("\n").slice(1);

// let total = 0;
// for (const info of studentInfo) {
//   const exerciseCounts = info.split(" ").slice(1).map(Number);

//   const sum = exerciseCounts.reduce((a, b) => a + b, 0);
//   total += sum;

//   fs.appendFileSync("KTU6.2Rezultatai.txt", `${sum}\n`, { encoding: "utf8" });
// }

// fs.appendFileSync("KTU6.2Rezultatai.txt", `${total}`, { encoding: "utf8" });
