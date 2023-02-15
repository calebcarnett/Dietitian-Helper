let button = document.getElementById("calculate-button");
let bmiResult = document.getElementById("bmi-result");

function BMI(bmi) {
  let weight = document.getElementById("weightInput").value.trim();
  let height = document.getElementById("heightInput").value.trim();
  if (weight && height) {
    //convert height to meters
    height = height * 0.0254;
    //calculate bmi and convert weight in lbs to kilos
    bmi = (weight * 0.45359237) / (height * height);

    bmi = Math.round(bmi * 10) / 10;
    bmiResult.textContent = "BMI: " + bmi;
    return console.log(bmi);
  } else {
    alert("For BMI you must enter both weight and height");
  }
}

function mifflinSJ() {}

button.addEventListener("click", BMI);
