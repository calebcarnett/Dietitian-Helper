const calculateBmi = document.getElementById("calculate-bmi");
const calculateMifflin = document.getElementById("calculate-mifflin");
const calculateHarris = document.getElementById("calculate-harris");
let bmiResult = document.getElementById("bmi-result");
let mifflinResult = document.getElementById("mifflin-result");
let harrisResult = document.getElementById("harris-result");

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
    console.log(bmi);
    return bmi;
  } else {
    alert("For BMI you must enter both weight and height");
  }
}

function mifflinMale(mifflin) {
  let weight = document.getElementById("weightInput").value.trim();
  let height = document.getElementById("heightInput").value.trim();
  let age = document.getElementById("ageInput").value.trim();
  let sex = document.getElementById("male").checked;

  //convert height to centimeters
  height = height * 2.54;
  //convert pounds to kilograms
  weight = weight * 0.45359237;
  if (sex === true) {
    let mifflin = weight * 10 + 6.25 * height - 5 * age + 5;
    mifflinResult.textContent = "Mifflin St.Jeor:" + mifflin;
  } else {
    let mifflin = weight * 10 + 6.25 * height - 5 * age - 161;
    mifflinResult.textContent = "Mifflin St.Jeor:" + mifflin;
  }
  return console.log(mifflin);
}

function harrisBenedict(harrisB) {
  let weight = document.getElementById("weightInput").value.trim();
  let height = document.getElementById("heightInput").value.trim();
  let age = document.getElementById("ageInput").value.trim();
  let sex = document.getElementById("male").checked;
  //convert height to centimeters
  height = height * 2.54;
  //convert pounds to kilograms
  weight = weight * 0.45359237;
  if (sex === true) {
    let harrisB = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    harrisResult.textContent = "Harris Benedict: " + harrisB;
  } else {
    let harrisB = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
    harrisResult.textContent = "Harris Benedict: " + harrisB;
  }
  return harrisB;
}

calculateBmi.addEventListener("click", function (event) {
  BMI();
  event.preventDefault();
});

calculateMifflin.addEventListener("click", function (event) {
  mifflinMale();
  event.preventDefault();
});

calculateHarris.addEventListener("click", function (event) {
  harrisBenedict();
  event.preventDefault();
});
