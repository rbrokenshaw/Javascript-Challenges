// function to return the number of legs on the farm
function animals(chickens,cows,pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
}

// test the function

console.log("The number of legs on the farm is: " + animals(2,3,5));