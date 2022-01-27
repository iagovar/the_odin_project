const caesar = function caesarShift(toShiftString, toShiftPositions) {
	// Expects string that converts into an array, and an integer.
	// Shifts english alphabet letters toShiftPositions times. Returns the result.
	// Respects capitalization.

	const engAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	const alphLength = engAlph.length;

	/* 
	Stores all the input string as objects of an array, with attributes (keys) such:

	letter -> Just the letter as it comes from toShiftString.
	comesCap  -> Does it come capitalized? Not really neccessary but makes for les noise in the code afterwards.
	letterCap -> Stores a capitalized version (always). Again, not really neccessary but makes this is how I like it.
	*/

	let inputObjs = [];

	for (i in toShiftString) {
		inputObjs[i] = new Object();
		inputObjs[i].letter = toShiftString[i];
		inputObjs[i].comesCap = (toShiftString[i].toUpperCase() == toShiftString[i]) ? true : false;
		inputObjs[i].letterCap = toShiftString[i].toUpperCase();
	};


	let finalString = [];

	for (i in inputObjs) {
		if(checkForLetter(inputObjs[i].letter)) {
			let currentIndex = engAlph.indexOf(inputObjs[i].letterCap);
			let shiftedIndex = currentIndex + toShiftPositions;
			let finalIndex = getNewIndex(alphLength, shiftedIndex);

			// .comesCap used to transform the new letter
			finalString[i] = (inputObjs[i].comesCap) ? engAlph[finalIndex] : engAlph[finalIndex].toLowerCase();
		} else {
			finalString[i] = inputObjs[i].letter;
		};
	};


	// Transforming finalString from array to String

	let stringToReturn = "";

	for (e of finalString) {stringToReturn += e};

	return stringToReturn;
};


function getNewIndex(largo, nuevo) {
	/*
		This function checks if the new index (nuevo) is inside the bounds of
		the alphabet length (largo), being 26 for the typical english alpahabet.

		For +-122					|	For +- 10
		Math.abs(122) > 26 -1 		|	Math.abs(8) < 26 -1
					-26				|			8 - > End of loop
				96					|
					-26				|
				70					|
					-26				|
				44					|
					-26				|
				18 -> En of loop.	|
		
		Then checks if it's positive or negative, perform some calc and return an integer
	
	*/

	let isNegative = (nuevo < 0) ? -1 : 1;

	let tempIndex = (Math.abs(nuevo) < largo -1) ? Math.abs(nuevo) : Math.abs(nuevo) - largo;

	while (tempIndex > largo -1) {tempIndex -= largo};

	tempIndex *= isNegative;

	let finalIndex = (tempIndex < 0) ? largo + tempIndex : tempIndex;

	return finalIndex;

};

function checkForLetter(letra) {
	// Checks if the input is a letter or not, returns boolean
	// JS has no built-in method like isalpha() in python.

	isItALetter = (letra.toLowerCase() != letra.toUpperCase()) ? true : false;

	return isItALetter;
}

// Do not edit below this line
module.exports = caesar;
