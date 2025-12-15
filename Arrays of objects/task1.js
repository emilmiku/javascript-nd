//Write a function "coolCities" which takes an array of city Objects and returns a new array 
// containing only those cities whose temperature is cooler than 70 degrees.

"use strict";

// function coolCities(cities) {
// let result+[];
// for (let i=0; i < cities.length; i++){
// if (cities[i].temperature < 70){
// result.push(cities[i]);
// }
// }
// return result;
// }

let cities = [
  { name: "Los Angeles", temperature: 60.0 },
  { name: "Atlanta", temperature: 52.0 },
  { name: "Detroit", temperature: 48.0 },
  { name: "New York", temperature: 80.0 },
];


function coolCities(cities) {
    return cities.filter(city => city.temperature <70);
}
console.log(coolCities(cities));