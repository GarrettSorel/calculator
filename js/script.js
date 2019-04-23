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
}
