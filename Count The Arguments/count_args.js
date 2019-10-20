// function to count the number of arguments it was called with
function numArgs() {
	return arguments.length;
}

// test the function

console.log(numArgs());
console.log(numArgs("foo"));
console.log(numArgs("foo", "bar"));
console.log(numArgs(true, false));
console.log(numArgs({}));