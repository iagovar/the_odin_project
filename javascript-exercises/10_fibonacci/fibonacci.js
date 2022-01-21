const fibonacci = function fibonacciIndex(indice) {

	// Sanitizando el imput

	indice = Number(indice);
	if (indice < 0) {return "OOPS"}

	// Ejecutando el cálculo

	let matriz = [1, 1];

	for (let i = 0; i < indice; i++) {
		if (i>1) {matriz[i] = matriz[i-1] + matriz[i-2]}
	};
	
	return matriz[indice-1];
  

};

// Do not edit below this line
module.exports = fibonacci;
