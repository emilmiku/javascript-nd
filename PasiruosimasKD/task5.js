/* ## 5. Find the most frequent character in a string

Write a function `mostFrequentChar(str)` that returns the **character** that appears **most often** in the string (ignore spaces, case-insensitive).

Example:
`"Hello world"` → `"l"`

If there’s a tie, you can return **any one** of the most frequent characters. */

"use strict";

const string = "What could go wrong?";

const characterCount = {}; // susikuriam tuscia objekta i kuri desim savo raidziu countus

// stringa pavest i mazasias raides
const stringLower = string.toLowerCase();
// iteruot per stringa
for (const char of stringLower) {
  if (char === " ") {
    continue;
  }
  //jei yra raide, tai ++ prie jos counto, jei nera, tai pridedam raide i characterCount objekta
  if (Object.hasOwn(characterCount, char) === false) {
    characterCount[char] = 1;
  } else {
    characterCount[char]++;
  }
}

const keys = Object.keys(characterCount); // dabar turiu masyva su keysais( nu tipo raidem)

let maxKeyCount = 0;
let maxKey = "";

for (const key of keys) {
  const keyCount = characterCount[key];
  if (keyCount > maxKeyCount) {
    maxKeyCount = keyCount;
    maxKey = key;
  }
}

console.log(`${maxKey} (${maxKeyCount})`);
