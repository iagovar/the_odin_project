const reverseString = function stringReversing(string) {
	// Devuelve la inversa de un string

		// Variables iniciales

	const longitud = string.length
	let indexb = longitud -1

		// Matriz para guardar el reverso
	let finalArray = [];
	
		// Obtenemos el indice inicial, y lo convertimos en su opuesto
	for (let indexa in string) {
        indexReverso = (indexa-indexb)*-1
		finalArray[indexReverso] = string[indexa];
	}

		// Arrejuntamos el array y lo convertimos en string
    let finalString = finalArray.join("");

	return finalString
};


// Do not edit below this line
module.exports = reverseString;
