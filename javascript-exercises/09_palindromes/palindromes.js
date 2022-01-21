const palindromes = function esPalindromo(cadena) {

	const aminusculas = cadena.toLowerCase();
	const sinpuntuacion = aminusculas.replace(/[^A-Z0-9]/ig, ""); // Eliminamos espacios y caracteres especiales
    const matrizado = Array.from(sinpuntuacion);
  
	let alreves = [];
	let j = 0;

	for (let i = sinpuntuacion.length -1; i >= 0; i--) {
		alreves[j] = matrizado[i];
		j++;
	};

	const resultado = (matrizado.toString() == alreves.toString()) ? true : false;

	return resultado;


};

// Do not edit below this line
module.exports = palindromes;