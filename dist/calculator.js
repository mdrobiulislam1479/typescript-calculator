"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by Zero");
    }
    return a / b;
}
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
function calculate(operation, a, b) {
    switch (operation) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        case "^":
            return power(a, b);
        default:
            throw new Error("Invalid operation");
    }
}
console.log("Add: ", calculate("+", 4, 2));
console.log("Subtract: ", calculate("-", 4, 2));
console.log("Multiply: ", calculate("*", 4, 2));
console.log("Divide: ", calculate("/", 4, 2));
console.log("Power: ", calculate("^", 4, 2));
//# sourceMappingURL=calculator.js.map