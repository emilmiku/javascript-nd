"use strict";

const prompt = require("prompt-sync")();

const monday = Number(prompt("How many lessons are on monday? "));
const tuesday = Number(prompt("How many lessons are on tuesday? "));
const wednesday = Number(prompt("How many lessons are on wednesday? "));
const thursday = Number(prompt("How many lessons are on thursday? "));
const friday = Number(prompt("How many lessons are on friday? "));

const totalLessons = monday + tuesday + wednesday + thursday + friday;
const totalMinutes = totalLessons * 45;

console.log(`Number of lessond per week: ${totalLessons}`);
console.log(`That in minutes: ${totalMinutes}`);
