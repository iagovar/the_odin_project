// Global variables

let TURN = 0 		// Current turn
const MAXTURNS = 5	// Max number of turns
let HSCORE = 0		// Human score count
let MSCORE = 0		// Machine score count

const PPLAYS = ["Rock", "Paper", "Scissors"] // Possibility space

// Main loop

while (TURN < MAXTURNS) {

	game();

	TURN += 1;

}

	// Who wins after all turns?

if (HSCORE == MSCORE) {
	console.log("It's finaly a draw!");
} else if (HSCORE > MSCORE) {
	console.log("You won! " + HSCORE + " to " + MSCORE + " against the machine!");
} else if (HSCORE < MSCORE) {
	console.log("You lose! " + HSCORE + " to " + MSCORE + " against the machine!");
}


// Main function

function game() {
	/* This function basically:

	1. Is responsible for USER IMPUT.
	2. Integrates and calls all other logic functions.
	3. DOES NOT count turns. This is done outside of any function, into the main loop.
	
	*/


	// Asking imputs from the possibility space (PPLAYS)

	let promptMsg = "Please, choose from " + PPLAYS.join([separator = ', ']);

	let userInput = prompt(promptMsg);

	let computerInput = computerPlay();

	// Who wins this round?

	let whoWins = playRound(userInput, computerInput);

	console.log(whoWins);	

}


// Picking / Playing functions

function computerPlay() {
	// Picks a random option from a space of possibility

		// Defining space
	let possiblePlays = PPLAYS;

		// Performing math for random picking
		// Getting an index value for the possibility space from random JS method

	let arrayLenght = possiblePlays.length;

		/*
			
			Following lines of code do this:

			.random()		*arrayLenght		.round()

			Output		->		Calc	->		Integer

			0.9					2.7				3

			0.5					1.5				2


			There are many recommendations over the internet to use Math.floor()
			for reasons I'm not sure make sense. Yes, there isn't true randomness,
			and yes this is opinionated rounding, but you won't scape that with
			Math.floor() method no matter how convoluted you make it, you're still
			under the constrainst of formal logic.


		*/

	let randomNumber = Math.random() * arrayLenght;

	let finalIndex = Math.round(randomNumber);

		// Picking from possibility space

	let finalChoose = possiblePlays[finalIndex];

	return finalChoose;


}

function playRound(playerSelection, computerSelection) {
	/* Expects two strings. Decides who's winning.


	Logic could be done with way less code, but I chose this way for practicing
	stuff I'll likely will need down the line.


	
					WHO WINS MATRIX

					Computer
					0			1			2
		User		Rock		Paper		Scissors
	0	Rock		Draw		Paper		Rock
	1	Paper		Paper		Draw		Scissors
	2	Scissors	Rock		Scissors	Draw

	*/

		// Sanitizing imputs

	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	let possiblePlays = PPLAYS;

	possiblePlays = possiblePlays.map(index => index.toLowerCase());

		// Transforming strings to indexes

	playerIndex = possiblePlays.indexOf(playerSelection);
	computerIndex = possiblePlays.indexOf(computerSelection);

		// Comparation logic
		// Somewhere in the future I should make this matrix build itself from Global Var PPLAYS,
		// so it can be used with any number of options or different strings

	let logicMatrix = [
		["Draw", "Paper", "Rock"],
		["Paper", "Draw", "Scissors"],
		["Rock", "Scissors", "Draw"]
	];

	let logicString = logicMatrix[playerIndex][computerIndex];

	if (logicString == "Draw") {

		return "No one wins! It's a Draw!";

	} else if (logicString.toLowerCase() == playerSelection) {

		HSCORE += 1;

		return "You Win! " + PPLAYS[playerIndex] + " beats " + PPLAYS[computerIndex] + "!";

	} else {

		MSCORE += 1;

		return "Computer wins! " + PPLAYS[computerIndex] + " beats " + PPLAYS[playerIndex] + "!";
	}



}