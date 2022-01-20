const leapYears = function isLeapYear(year) {
	// Espera un conjunto de numeros enteros, devuelve si es un año bisiesto o no

	// Arbol de condiciones

	let meetsConditions = false;

	if (year % 4 == 0) {meetsConditions = true};
	if (year % 100 == 0) {
		meetsConditions = false;
		if (year % 400 == 0) {meetsConditions = true};
	};

	return meetsConditions;


};

// Do not edit below this line
module.exports = leapYears;
