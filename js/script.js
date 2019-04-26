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
    handleOperator(target.value);
    updateScreen();
  }

  if (target.classList.contains('btn-number')) {
    inputNumber(target.value);
    updateScreen();
  }

  if (target.classList.contains('btn-equals')) {
  }
})

function inputNumber(digit) {
  const { displayNumber, waitingforSecondNumber } = calculator;

  if (calculator.waitingForSecondNumber === true) {
    calculator.displayNumber = digit;
    calculator.waitingForSecondNumber = false;
  } else {
    calculator.displayNumber = displayNumber === '0' ? digit : displayNumber + digit;
  }
  console.log(calculator);
}

function handleOperator(newOperator) {
  const { firstNumber, displayNumber, operator } = calculator;
  const inputValue = parseFloat(displayNumber);

  if (firstNumber === null) {
    calculator.firstNumber = inputValue;
  }

  calculator.waitingForSecondNumber = true;
  calculator.operator = newOperator;
  console.log(calculator);
}

function clearScreen() {
  calculator.displayNumber = "0";
  updateScreen();
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
