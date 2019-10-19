// function to determine whether an integer is odd or even
function isEvenOrOdd(int) {
	if (int % 2 == 0) {
		return "Even";
	}
	else {
		return "Odd";
	}
}

// test the function

console.log(isEvenOrOdd(3));
console.log(isEvenOrOdd(146));
console.log(isEvenOrOdd(19));