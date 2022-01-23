const getTheTitles = function titleReturner(booksArray) {
	// Expects an array of objects, returns the "title" values in array trype

	const bookTitles = [];

	for (index in booksArray) {
	bookTitles.push(booksArray[index].title)
	};

	return bookTitles;
}

// Do not edit below this line
module.exports = getTheTitles;
