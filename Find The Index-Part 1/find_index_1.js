// function to get the index of given value in array
function search(array,value) {
	if (array.includes(value)) {
		return array.indexOf(value);
	}
	else {
		return -1;
	}
}

// test the function

console.log(search([1,5,3], 5));
console.log(search([9,8,3], 3));
console.log(search([1,2,3], 4));