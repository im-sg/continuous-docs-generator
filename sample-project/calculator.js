/**
 * Sample Calculator API
 * A simple calculator service for demonstration purposes
 * @module calculator
 */

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @example
 * add(2, 3) // returns 5
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first
 * @param {number} a - Number to subtract from
 * @param {number} b - Number to subtract
 * @returns {number} Difference of a and b
 * @example
 * subtract(5, 3) // returns 2
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 * @example
 * multiply(4, 5) // returns 20
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a and b
 * @throws {Error} If divisor is zero
 * @example
 * divide(10, 2) // returns 5
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Calculator class for complex operations
 * @class
 */
export class Calculator {
  /**
   * Creates a new Calculator instance
   * @param {number} initialValue - Starting value
   */
  constructor(initialValue = 0) {
    this.value = initialValue;
    this.history = [];
  }

  /**
   * Add to current value
   * @param {number} n - Number to add
   * @returns {Calculator} This calculator instance for chaining
   */
  add(n) {
    this.history.push(`add ${n}`);
    this.value += n;
    return this;
  }

  /**
   * Subtract from current value
   * @param {number} n - Number to subtract
   * @returns {Calculator} This calculator instance for chaining
   */
  subtract(n) {
    this.history.push(`subtract ${n}`);
    this.value -= n;
    return this;
  }

  /**
   * Get current value
   * @returns {number} Current calculated value
   */
  getValue() {
    return this.value;
  }

  /**
   * Get operation history
   * @returns {string[]} Array of operations performed
   */
  getHistory() {
    return [...this.history];
  }

  /**
   * Reset calculator to zero
   * @returns {Calculator} This calculator instance
   */
  reset() {
    this.value = 0;
    this.history = [];
    return this;
  }
}
