// function to negate all elements in an array
function negate(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = -arr[i];
	}

	return arr;
}

// test the function

console.log(negate([1,2,3,4]));
console.log(negate([-1,2,-3,4]));
console.log(negate([]));