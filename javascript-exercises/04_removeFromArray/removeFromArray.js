const removeFromArray = function arrayRemoval(initialArray, ...toRemove) {
	// Recibe dos arrays, elimina los elementos de InitialArray presentes en toRemove
	// En esta función ...argumento transforma todos los parámetros de initialArray
	// en un Array.
	// initialArray -> Se asume que será un array.
	// ...toRemove -> El imput se transforma en array, lo sea o no.

		// Array para return posterior

	let finalArray = []

		// Lo que generamos es un "ciclo negativo", incluímos todos los valores
		// de initialArray no presentes en toRemove.

	for (element of initialArray) {
		// for..of nos devuelve un valor, no un indice como for.. in
		if (toRemove.includes(element) == false) {finalArray.push(element)};
	};

		// Hecho :)

		return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
