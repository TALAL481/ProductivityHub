const display = document.getElementById("display");

function append(value) {

  display.value += value;

}

function clearDisplay() {

  display.value = "";

}

function deleteLast() {

  display.value = display.value.slice(0, -1);

}

function calculate() {

  try {

    display.value = eval(display.value);

  } 

  catch {

    display.value = "Error";

  }

}

document.addEventListener("keydown", function(event) {

  const key = event.key;

  if (

    "0123456789+-*/.%".includes(key)

  ) {

    append(key);

  }

  if (key === "Enter") {

    calculate();

  }

  if (key === "Backspace") {

    deleteLast();

  }

  if (key === "Escape") {

    clearDisplay();

  }

});
