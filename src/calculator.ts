function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;

const multiply = (a: number, b: number): number => a * b;

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by Zero");
  }
  return a / b;
}
