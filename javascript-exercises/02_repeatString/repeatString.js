const repeatString = function stringRepeat(string, times) {
	// Espera una cadena de texto y un numero natural.
	// Devuelve ERROR en no natural, y una cadena vacía en 0.

		// Verificamos precondiciones
		// La cadena vacía se devuelve porque 0 < i, variable declarada más abajo.
    if (times < 0) {
      return "ERROR";
    }

		// Variables que usaremos en el loop
	let finalString = "";
	let i = 1;

		// loop de construcción

    while (i <= times) {
      finalString += string;
      i++;
    }

		// devolvemos el resultado
	return finalString;
};


// Do not edit below this line
module.exports = repeatString;
