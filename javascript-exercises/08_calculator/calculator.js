const add = function sumatorio(...numbers) {
	// Espera un número arbitario de números y genera una suma de todos ellos

	suma = 0;

	for (i of numbers) {
		suma += i;
	}

	return suma;

};

const subtract = function restando(...numbers) {
	// Espera un número arbitario de números y genera una resta de todos ellos

	resta = numbers[0] * 2;

	for (i of numbers) {
		resta -= i;
	}

	return resta;

};

const sum = function sumatorioArray(matriz) {
	// Espera un número arbitario de números y genera una suma de todos ellos

	suma = 0;

	for (i of matriz) {
		suma += i;
	}

	return suma;

};

const multiply = function multiplicar(matriz) {
	// Espera un número arbitario de números y genera una multiplicación de todos ellos

	multiplicados = 1;

	for (i of matriz) {
		multiplicados *= i;
	}

	return multiplicados;

};

const power = function potencia(base, exponente) {
	return Math.pow(base, exponente);
	
};

const factorial = function nfactorial(n) {

	let indice = 1;

	let resultado = 1;

	while (indice <= n) {
		resultado *= indice;
		indice++;
	}

	return resultado;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
