const weightInput = document.getElementById("weight");

const heightInput = document.getElementById("height");

const bmiResult = document.getElementById("bmiResult");

const status = document.getElementById("status");

const healthyRange = document.getElementById("healthyRange");

document.getElementById("calculate").onclick = function () {

  const weight = parseFloat(weightInput.value);

  const height = parseFloat(heightInput.value);

  if (!weight || !height || weight <= 0 || height <= 0) {

    bmiResult.textContent = "BMI: --";

    status.textContent = "Please enter valid values.";

    healthyRange.textContent = "";

    return;

  }

  const heightM = height / 100;

  const bmi = weight / (heightM * heightM);

  bmiResult.textContent = "BMI: " + bmi.toFixed(1);

  if (bmi < 18.5) {

    status.textContent = "Status: Underweight 🟦";

  } else if (bmi < 25) {

    status.textContent = "Status: Healthy 🟢";

  } else if (bmi < 30) {

    status.textContent = "Status: Overweight 🟡";

  } else {

    status.textContent = "Status: Obese 🔴";

  }

  const min = (18.5 * heightM * heightM).toFixed(1);

  const max = (24.9 * heightM * heightM).toFixed(1);

  healthyRange.textContent =

    "Healthy weight range: " + min + " kg - " + max + " kg";

};
