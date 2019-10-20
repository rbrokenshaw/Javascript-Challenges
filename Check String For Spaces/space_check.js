// function to detect whether a string contains any spaces
function hasSpaces(str) {
	return str.includes(' ');
}

// test the function

console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world!"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));