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
  Math.pow(n1, n2);
};

const mod = (n1, n2) => {
  // % is the remainder operator in JavaScript and only works on positive values.
  // The below formula allows JavaSript to replicate true modulo. For more information
  // please see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  ((n1 % n2) + n2) % n2;
};

// const factorial = (n1) => {
//   return n1 * factorial(n1 - 1);
// };

const operate = (op, n1, n2) => {
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
