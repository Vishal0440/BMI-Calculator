var heightInput = document.querySelector(".height_input");
var weightInput = document.querySelector(".weight_input");
var calculate = document.querySelector(".calculate");
var result = document.querySelector(".result");
var data = document.querySelector(".data");
var BMI, height, weight;

calculate.addEventListener("click", () => {
  height = heightInput.value;
  weight = weightInput.value;
  BMI = weight / height ** 2;
  result.innerText = BMI;

  if (BMI < 18.5) {
    data.innerText = "Your BMI falls within the underweight range";
  } else {
    data.innerText = "Your BMI falls within the obese range";
  }
});
