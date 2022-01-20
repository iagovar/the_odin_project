const ftoc = function farenheitToCelsius(fdegree) {
  // Expects number, converts from farenheit to celsius
  // returns value rounded to 1 decimal

  let celsius = (fdegree-32) / 1.8;
  let roundedCelsius = redondeo(celsius, 1);

};

const ctof = function celsiusToFarenheit(cdegree) {
  // Expects number, converts from celsius to farenheit
  // returns value rounded to 1 decimal
};

function redondeo(numero, longitud) {
  // Redondea un número con el método común a 1 decimal, siendo >= 5 un incremento.
  // Hay métodos como .round() y otros disponibles, el objeto de esta función es practicar.

    // Dividimos el número en dos partes.
    // El primer loop itera hasta el separador y coloca en la variable natural
    // El segundo loop itera desde el separador y coloca en la variable decimal

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
    // HAY QUE CONVERTIR LOS STRINGS EN NUMBER PARA PODER HACER LOS CALCULOS
    // Solo he puesto la lógica baśica

  let aproximado = "";

  for (let i = decimal.lenght -1; i >= 0; i--) {
    if (number(decimal[i]) >= 5 && i >= longitud -1) {
      aproximado[i-1] = string(number(decimal[i-1]) + 1);
    } else if (number(decimal[i]) < 5 && i >= longitud -1) {
      
    };
  };



}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
