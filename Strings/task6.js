/* ##6 Write a JavaScript function to check whether an `input` is a string or not.

- console.log(is_string('w3resource')); --> true
- console.log(is_string([1, 2, 4, 0])); -->false */
"use strict";

const input = "gaga";

function is_string(input) {
  if (typeof input === "string") {
    console.log("True");
  } else {
    console.log("False");
  }
}

is_string(input);
