const ftoc = function fahrenheitToCelsius(fdegree) {
  // Expects number, converts from farenheit to celsius
  // returns value rounded to 1 decimal

  let celsius = (fdegree-32) / 1.8;
  let roundedCelsius = Number(celsius.toFixed(1));

  return roundedCelsius;

};

const ctof = function celsiusToFahrenheit(cdegree) {
  // Expects number, converts from celsius to farenheit
  // returns value rounded to 1 decimal

  let fahrenheit = (cdegree * 1.8) + 32;
  let roundedFahrenheit = Number(fahrenheit.toFixed(1));

  return roundedFahrenheit;

};



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
