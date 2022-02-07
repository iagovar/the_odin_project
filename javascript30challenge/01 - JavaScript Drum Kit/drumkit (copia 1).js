/*

This script is NOT resembling the code in the JS30 challenge video

*/


// Putting all nodes in memory and adding the event listeners so we
// avoid a messy html
const keyArea = document.querySelectorAll(".key");

for (element of keyArea) {
	const dataKey = element.getAttributeNode("data-key").value;

	// Why a function call inside an anonymous function?
	// This guy happily explains it to you! 
	// https://www.reddit.com/r/learnprogramming/comments/siv73i/i_cant_figure_out_this_behavior_on/
	element.addEventListener("click", () => fnKey(dataKey));
};

function fnKey(dataKey) {
	// Calling fadein css
	const dataKeyString = "[data-key='" + dataKey + "']";
	const currentElement = document.querySelector("div" + dataKeyString);
	currentElement.classList.add("playing");
	
	// playing sound
	const audioFile = document.querySelector("audio" + dataKeyString);
	audioFile.play();
		// Method below is so you don't have to wait for the whole
		// audio to play it again.
	audioFile.currentTime = 0;

	// Calling fadeout css
	//currentElement.classList.remove("playing");
};