//object to hold numbers and operators
const calculator = {
  displayNumber: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
}

const keys = document.querySelector("#buttons");
keys.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('btn-operator')) {
    console.log("operator", target.value);
  }

  if (target.classList.contains('btn-number')) {
    console.log("number", target.value);
  }

  if (target.classList.contains('btn-equals')) {
    console.log("equals", target.value);
  }
})

function clearScreen() {
  document.querySelector("#screen").value = "0";
}

function updateScreen() {
  const display = document.querySelector("#screen");
  display.value = calculator.displayNumber;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Not Like This...Not Like This..."
  } else {
  return a / b;
  }
}

function operate(op, a, b) {
  if (op === "+") {
    add(a,b);
  } else if (op === "-") {
    subtract(a,b);
  } else if (op === "*") {
    multiply(a,b);
  } else if (op === "/") {
    divide(a,b);
  }
}

window.onLoad = clearScreen();
