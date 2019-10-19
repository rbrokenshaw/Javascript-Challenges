// function to get the last item in an array
function getLastItem(array) {
	return array.slice(-1);
}

// test the function

console.log(getLastItem([1,2,3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true,false,true]));