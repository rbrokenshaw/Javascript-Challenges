// function to return the volume of a box
function volume(box) {
	return box.width * box.length * box.height;
}

// test the function

console.log(volume({width:2, length:5, height:1}));
console.log(volume({width:4, length:2, height:2}));
console.log(volume({width:2, length:3, height:5}));