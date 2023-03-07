const calculateBmi = document.getElementById("calculate-bmi");
let bmiResult = document.getElementById("bmi-result");
let mifflinResult = document.getElementById("mifflin-result");
const calculateMifflin = document.getElementById("calculate-mifflin");

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

function mifflinMale(mifflinM) {
  let weight = document.getElementById("weightInput").value.trim();
  let height = document.getElementById("heightInput").value.trim();
  let age = document.getElementById("ageInput").value.trim();
  let sex = document.getElementById("male").checked;

  //convert height to centimeters
  height = height * 2.54;
  //convert pounds to kilograms
  weight = weight * 0.45359237;
  if (sex === true) {
    let mifflinM = weight * 10 + 6.25 * height - 5 * age + 5;
    mifflinResult.textContent = mifflinM;
  } else {
    let mifflinM = weight * 10 + 6.25 * height - 5 * age - 161;
    mifflinResult.textContent = "Mifflin St.Jeor:" + mifflinM;
  }
  return console.log(mifflinM);
}

calculateBmi.addEventListener("click", function (event) {
  BMI();
  event.preventDefault();
});

calculateMifflin.addEventListener("click", function (event) {
  mifflinMale();
  event.preventDefault();
});

function harrisBenedictMale() {
  let weight = document.getElementById("weightInput").value.trim();
  let height = document.getElementById("heightInput").value.trim();
  let age = document.getElementById("ageInput").value.trim();
  //convert height to centimeters
  height = height * 2.54;
  //convert pounds to kilograms
  weight = weight * 0.45359237;
  if (sex === true) {
    let harrisB = 66 + 13.8 * weight + 5 * height - 6.8 * age;
  } else {
    let harrisB = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }
}
