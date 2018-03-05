class MathUtil {
  // empty constructor
  constructor() {}

  add(number1, number2) {
    return number1 + number2;
  }

  multiply(number1, number2) {
    return number1 * number2;
  }

  divide(numerator, denominator) {
    return numberator / denominator;
  }

  substract(number, from) {
    return from - number;
  }
}

// this variable can not be re-assigned
const PI = 3.14;

export { MathUtil, PI };
