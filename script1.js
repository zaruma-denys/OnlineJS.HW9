function getArea(number) {
  if (number === undefined) {
    return "Будь ласка, введіть радіус!";
  }

  if (typeof number !== "number") {
    return "Повинно бути числове значення.";
  }

  if (isNaN(number)) {
    return "Повинно бути числове значення.";
  }

  let area = Math.PI * Math.pow(number, 2);
  return "Площа дорівнює " + area.toFixed(1) + " квадратних одиниць.";

}
