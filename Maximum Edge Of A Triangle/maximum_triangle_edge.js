// function to calculate maximum edge of a triangle
function nextEdge(side1,side2) {
	return (side1 + side2) - 1;
}

// test the function

// choose two sides
side1 = 5;
side2 = 7;

// display the result of the function
if (nextEdge(side1,side2) >= 0) {
	console.log("The maximum range of the triangles third edge is " + nextEdge(side1,side2) + ".");
}
else {
	console.log("Triangle side lengths must be positive integers.");
}