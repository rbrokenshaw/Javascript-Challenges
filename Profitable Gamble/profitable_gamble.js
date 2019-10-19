// fuction to calculate whether a gamble is profitable based on probability, prize and pay
function profitableGamble(prob,prize,pay) {
	if ((prob * prize) > pay) {
		return true;
	}
	else {
		return false;
	}
}

// test the function

console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));