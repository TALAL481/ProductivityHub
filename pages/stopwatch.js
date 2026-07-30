let startTime = 0;

let elapsedTime = 0;

let timerInterval = null;

const display = document.getElementById("display");

const laps = document.getElementById("laps");

function updateDisplay() {

  const time = elapsedTime + (Date.now() - startTime);

  const milliseconds = time % 1000;

  const seconds = Math.floor(time / 1000) % 60;

  const minutes = Math.floor(time / 60000) % 60;

  const hours = Math.floor(time / 3600000);

  display.textContent =

    String(hours).padStart(2, "0") + ":" +

    String(minutes).padStart(2, "0") + ":" +

    String(seconds).padStart(2, "0") + "." +

    String(milliseconds).padStart(3, "0");

}

document.getElementById("start").onclick = function () {

  if (timerInterval === null) {

    startTime = Date.now();

    timerInterval = setInterval(updateDisplay, 10);

  }

};

document.getElementById("pause").onclick = function () {

  if (timerInterval !== null) {

    clearInterval(timerInterval);

    elapsedTime += Date.now() - startTime;

    timerInterval = null;

  }

};

document.getElementById("reset").onclick = function () {

  clearInterval(timerInterval);

  timerInterval = null;

  elapsedTime = 0;

  display.textContent = "00:00:00.000";

  laps.innerHTML = "";

};

document.getElementById("lap").onclick = function () {

  if (timerInterval !== null) {

    const lap = document.createElement("li");

    lap.textContent = display.textContent;

    laps.appendChild(lap);

  }

};
