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
});
