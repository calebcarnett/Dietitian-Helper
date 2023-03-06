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
    return bmi;
  } else {
    alert("For BMI you must enter both weight and height");
  }
}

button.addEventListener("click", BMI);

// function mifflinMale() {
//   let weight = document.getElementById("weightInput").value.trim();
//   let height = document.getElementById("heightInput").value.trim();
//   let age = document.getElementById("ageInput").value.trim();
//   //convert height to centimeters
//   height = height * 2.54;
//   //convert pounds to kilograms
//   weight = weight * 0.45359237;
//   if (input === male) {
//     mifflinM = weight * 10 + 6.25 * height - 5 * age + 5;
//   }
// }

// function mifflinFemale() {
//   let weight = document.getElementById("weightInput").value.trim();
//   let height = document.getElementById("heightInput").value.trim();
//   let age = document.getElementById("ageInput").value.trim();
//   //convert height to centimeters
//   height = height * 2.54;
//   //convert pounds to kilograms
//   weight = weight * 0.45359237;
//   if (input === female) {
//     mifflinF = weight * 10 + 6.25 * height - 5 * age - 161;
//   }
// }

// function harrisBenedictMale() {
//   let weight = document.getElementById("weightInput").value.trim();
//   let height = document.getElementById("heightInput").value.trim();
//   let age = document.getElementById("ageInput").value.trim();
//   //convert height to centimeters
//   height = height * 2.54;
//   //convert pounds to kilograms
//   weight = weight * 0.45359237;
//   if (input === male) {
//     harrisMale = 66 + 13.8 * weight + 5 * height - 6.8 * age;
//   }
// }

// function harrisBenedictFemale() {
//   let weight = document.getElementById("weightInput").value.trim();
//   let height = document.getElementById("heightInput").value.trim();
//   let age = document.getElementById("ageInput").value.trim();
//   //convert height to centimeters
//   height = height * 2.54;
//   //convert pounds to kilograms
//   weight = weight * 0.45359237;
//   if (input === male) {
//     harrisFemale = 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
//   }
// }
