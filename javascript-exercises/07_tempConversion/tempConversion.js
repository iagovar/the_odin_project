const ftoc = function farenheitToCelsius(fdegree) {
  // Expects number, converts from farenheit to celsius
  // returns value rounded to 1 decimal

  let celsius = (fdegree-32) / 1.8;
  let roundedCelsius = celsius.round(1);

};

const ctof = function celsiusToFarenheit(cdegree) {
  // Expects number, converts from celsius to farenheit
  // returns value rounded to 1 decimal
};

function redondeo(numero, posiciones) {
  // Redondea un número con el método común a 1 decimal, siendo >= 5 un incremento.
  // Hay métodos como .round() y otros disponibles, el objeto de esta función es practicar.

    // Dividimos el número en dos partes.
    // El primer loop itera hasta el separador y coloca en la variable natural
    // El segundo loop itera desde el separador y coloca en la variable decmal

  let cadena = numero.toString();

  let natural = "";
  let decimal = "";

  let lastIndex = 0;

    // Loop 1

  for (i of cadena) {
    if (i != ".") {
      natural += i;
    } else {
      lastIndex = i;
      break;
    };
  };

    // Loop 2

  for (i of cadena) {
    if (i > lastIndex) {decimal += i};
  };

    // Ejecutamos aproximación



}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
