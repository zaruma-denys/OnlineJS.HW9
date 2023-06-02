function getSqrt(number) {
  if (number === undefined) {
    return "Будь ласка, введіть число!";
  }

  if (typeof number !== "number") {
    return "Повинно бути числове значення.";
  }

  if (number < 0) {
    return "Введіть додатнє число.";
  }

  let sqrt = Math.sqrt(number);
  return "Квадратний корінь з " + number + " дорівнює " + sqrt.toFixed(1) + ".";
}
