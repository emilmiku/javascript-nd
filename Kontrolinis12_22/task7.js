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
/* BMI pavyzdys: 
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let height = Number(document.getElementById("height").value);
  let weight = Number(document.getElementById("weight").value);
  let BMI = weight / (height / 100) ** 2;
  let BMIgroup = "";

  if (BMI < 18.5) {
    BMIgroup = "Underweight";
  } else if (BMI < 25) {
    BMIgroup = "Healthy Weight";
  } else if (BMI < 30) {
    BMIgroup = "Overweight";
  } else {
    BMIgroup = "Obesity";
  }

  const resultEl = document.getElementById("result");
  resultEl.innerHTML = `${BMIgroup} - BMI: ${BMI.toFixed(2)}`;
}); */

//  °C = (°F - 32) × 5/9
//°F = (°C × 9/5) + 32