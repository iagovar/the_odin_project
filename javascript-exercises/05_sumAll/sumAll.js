const sumAll = function sumConjunto(initial, end) {
	// Espera dos NATURALEŚ, genera un conjunto de números discretos
	// en un array y devuelve la suma de todos ellos.
	// El ejercicio dice enteros, pero sólo pasan los naturales en el test.

		// Comprobamos si son números naturlaes
		// Usaremos una variable que evaluaremos al final de las condiciones

	esNatural = true;

		// Comprobaos las condiciones
	if (typeof(initial) == "number" && typeof(end) == "number") {
		// Hay números neativos?
		if (initial < 0 || end < 0) {esNatural = false};

		// convertimos string to array para comprobar si hay puntos
		let initialArray = Array.from(String(initial), Number);
		let endArray = Array.from(String(end), Number);

		// Usamos un método de array para ver si hay puntos
		let initialPunto = initialArray.includes(".");
		let endPunto = initialArray.includes(".");

		// Ejecutamos la condición de puntos
		if (initialPunto == true || endPunto == true) {esNatural = false};
	} else {
		esNatural = false;
	}

		// Cerramos la función si alguno de los números no son naturales
	if (esNatural == false) {return "ERROR"};



	// EJECUTAMOS CÁLCULOS
	// Ya sabemos que ambos son números naturales.

		// Array que conformará el conjunto

	let conjunto = []

		// variables para iteración y representación del integer

	let i = 0

	if (initial < end){
		min = initial;
		max = end;
	} else {
		min = end;
		max = initial;
	}

		// Construímos el array, metiendo todos los íntegers >= initial y <= end.

	while (i <= max) {
		if (i >= min) {
			conjunto.push(i);
		};
		i++;
	};

		// ejecutamos la suma del conjunto resultante

	let sumaFinal = 0;

	for (numero of conjunto) {
		sumaFinal += numero;
	};

		// Devolvemos el resultado
	return sumaFinal;
};

// Do not edit below this line
module.exports = sumAll;
