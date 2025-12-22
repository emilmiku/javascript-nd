/* ## 7 DOM: Build a Temperature Converter  **3 points**
Create a small temperature converter tool similar to the one shown in the image.
The user should be able to:
1. **Enter a number** (temperature value)
2. **Choose the unit** (Celsius or Fahrenheit)
3. **Click a button** to convert the temperature
4. See the **converted result** displayed on the page
### **Requirements**
1. Create an HTML form with:
 - An input field for the number
   - A dropdown menu with two options: `"Celsius"` and `"Fahrenheit"`
   - A button labeled **Convert**
2. Write JavaScript code that:
   - Reads the user input and selected unit
   - Uses **conditions** (`if / else`) to determine which conversion formula to apply
   - Celsius → Fahrenheit formula:
     ```
     F = (C * 9/5) + 32
     ```
   - Fahrenheit → Celsius formula:
     ```
     C = (F - 32) * 5/9
     ```
   - Displays the result below the form
3. Format the result like :
   ```
   46.4° Fahrenheit
   ```
   or
   ```
   8° Celsius
   ``` */
"use strict";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let givenNumber = Number(document.getElementById("temperature").value);
  let celsiusScale = String(
    document.getElementById("scales").selectedOptions[0].value
  );
  let fahrenheitScale = String(
    document.getElementById("scales").selectedOptions[1].value
  );
  let chosenScale = "";
  let answer = 0;
  if (chosenScale === celsiusScale) {
    answer = Number(givenNumber * (9 / 5) + 32);
  } else if (chosenScale === fahrenheitScale) {
    answer = Number((givenNumber - 32) * (5 / 9));
  }
  const result = document.getElementById("result");
  result.innerHTML = `${answer} °`;
});

//  °C = (°F - 32) × 5/9
//°F = (°C × 9/5) + 32
