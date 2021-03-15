const display = document.querySelector(".display");

const numButtons = document.querySelectorAll(".num");

const opButtons = document.querySelectorAll(".op");

const eqButton = document.querySelector(".equals");

const decButton = document.querySelector(".dec");

const delButton = document.querySelector(".del");

const ceButton = document.querySelector(".ce");

let opOne = "";
let opTwo = "";
let currOp = null;

ceButton.addEventListener("click", clearEverything);

delButton.addEventListener("click", delLast);

numButtons.forEach((button) => {
  button.addEventListener("click", () => appendNum(button.textContent));
});

opButtons.forEach((button) => {
  button.addEventListener("click", () => setOp(button.textContent));
});

function appendNum(num) {
  if (display.textContent === "0") {
    clearDisplay();
  }
  display.textContent += num;
}

function clearEverything() {
  display.textContent = "0";
  opOne = "";
  opTwo = "";
  currOp = null;
}

function delLast() {
  display.textContent = display.textContent.slice(0, -1);
  // if the element has 0 child nodes then the element is empty
  if (display.childNodes.length === 0) {
    display.textContent = "0";
  }
}

function clearDisplay() {
  display.textContent = "";
}

const add = (n1, n2) => {
  return n1 + n2;
};

const subtract = (n1, n2) => {
  return n1 - n2;
};

const multiply = (n1, n2) => {
  return n1 * n2;
};

const divide = (n1, n2) => {
  return n1 / n2;
};

const exponent = (n1, n2) => {
  return Math.pow(n1, n2);
};

const mod = (n1, n2) => {
  // % is the remainder operator in JavaScript and only works on positive values.
  // The below formula allows JavaSript to replicate true modulo. For more information
  // please see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  return ((n1 % n2) + n2) % n2;
};

// const factorial = (n1) => {
//   return n1 * factorial(n1 - 1);
// };

const operate = (n1, op, n2) => {
  n1 = Number(n1);
  n2 = Number(n2);
  switch (op) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      if (n2 === 0) {
        return "Cannot divide by zero";
      }
      return divide(n1, n2);
    case "^":
      return exponent(n1, n2);
    case "%":
      return mod(n1, n2);
    default:
      return null;
  }
};
