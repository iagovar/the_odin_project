// Putting event listeners where it's necessary

	// Buttons
const buttonArea = document.querySelectorAll("button");

for (let button of buttonArea) {
	button.addEventListener("click", sendInput);
};

// Functions for interacting with UI
export function getMaxTurns() {
	// returns the values in the turns ui field for use in logic.js
	let maxTurns = document.querySelector("input").value;
	return maxTurns;
};


export function sendInput(e) {
	// Transforms click input into digerible text for
	// calling logic functions in logic.js
	let userSelection = e.target.className;
	userSelection = userSelection.toLowerCase();
	return userSelection;
};

export function thisRound(whoWins) {
	// Writes string about this very round result and final msg
	// calling from logic.js
	const whoDiv = document.querySelector(".thisround");
	whoDiv.innerHTML = whoWins;
};

export function writeScores(hscore, mscore) {
	// Writes accumulated scores
	// calling from logic.js
	const hdiv = document.querySelector(".human");
	const mdiv = document.querySelector(".computer");

	hdiv.innerHTML = hscore;
	mdiv.innerHTML = mscore;
};