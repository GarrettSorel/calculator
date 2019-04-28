//object to hold numbers and operators
const calculator = {
  displayNumber: "0",
  firstNumber: null,
  waitingForSecondNumber: false,
  operator: null,
}

//logic for button click events
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
    handleOperator(target.value);
    updateScreen();
  }
})

//changes the display number based on user inputs
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

//uses one of the operators and helps create chains
//example: 2 + 3 * 4
function handleOperator(newOperator) {
  const { firstNumber, displayNumber, operator } = calculator;
  const inputValue = parseFloat(displayNumber);

  if (firstNumber === null) {
    calculator.firstNumber = inputValue;
  } else if (operator != '=') {
    operate();
    calculator.firstNumber = calculator.displayNumber;
  } else if (operator === '=') {
    operate();
  }

  calculator.waitingForSecondNumber = true;
  calculator.operator = newOperator;
  console.log(calculator);
}

//resets the calculator objects
function clearScreen() {
  calculator.displayNumber = "0";
  calculator.firstNumber = null;
  calculator.waitingForSecondNumber = false;
  calculator.operator = null;
  updateScreen();
}

//used to display the current displayNumber on the screen
function updateScreen() {
  const display = document.querySelector("#screen");
  display.value = calculator.displayNumber;
}

//basic math functions
function add(a, b) {
  calculator.displayNumber = parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  calculator.displayNumber = parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  calculator.displayNumber = parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (b === 0) {
    alert("Not Like This...Not Like This...");
  } else {
    calculator.displayNumber = parseFloat(a) / parseFloat(b);
  }
}

//called on operator click to fire a math function
function operate() {
  if (calculator.operator === '+') {
    add(calculator.firstNumber, calculator.displayNumber);
    updateScreen();
  } else if (calculator.operator === '-') {
    subtract(calculator.firstNumber, calculator.displayNumber);
    updateScreen();
  } else if (calculator.operator === '*') {
    multiply(calculator.firstNumber, calculator.displayNumber);
    updateScreen();
  } else if (calculator.operator === '/') {
    divide(calculator.firstNumber, calculator.displayNumber);
    updateScreen();
  }
}

window.onLoad = clearScreen();
