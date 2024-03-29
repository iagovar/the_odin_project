/*

This script is NOT resembling the code in the JS30 challenge video

*/


// Putting all nodes in memory and adding the event listeners so we
// avoid a messy html
const keyArea = document.querySelectorAll(".key");

for (element of keyArea) {
	element.addEventListener('transitionend', removeTransition);
};

window.addEventListener("keydown", fnKey)

function fnKey(e) {
	// Calling fadein css
	const dataKeyString = "[data-key='" + e.keyCode + "']";
	const currentElement = document.querySelector("div" + dataKeyString);
	currentElement.classList.add("playing");
	
	// playing sound
	const audioFile = document.querySelector("audio" + dataKeyString);
	audioFile.play();
		// Method below is so you don't have to wait for the whole
		// audio to play it again.
	audioFile.currentTime = 0;

	// Calling fadeout css
	// Done with RemoveTransition();
};
function removeTransition(e) {
	this.classList.remove("playing");
};