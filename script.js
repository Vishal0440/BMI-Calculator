let heightInput = document.querySelector(".height_input");
let weightInput = document.querySelector(".weight_input");
let calculate = document.querySelector(".calculate");
let result = document.querySelector(".result");
let data = document.querySelector(".data");
let BMI, height, weight;

calculate.addEventListener("click", () => {
  height = heightInput.value / 100;
  weight = weightInput.value;

  if (!weight || !height) {
    result.textContent = "⚠️ Please enter valid values!";
    data.textContent = "";
    return;
  }
  BMI = (weight / (height * height)).toFixed(2);
  result.innerText = BMI;

  if (BMI < 18.5) {
    data.innerText = "Underweight";
    data.style.color = "#ffcc00";
  } else if (BMI < 24.9) {
    data.innerText = "Normal";
    data.style.color = "#22c55e";
  } else if (BMI < 29.9) {
    data.innerText = "Overweight";
    data.style.color = "#f97316";
  } else {
    data.innerText = "Your BMI falls within the obese range";
    data.style.color = "#ef4444";
  }
});
