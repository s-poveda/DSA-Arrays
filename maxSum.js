function maxSum(arr) {
	// let sum = 0,
	// zeros = 0,
	// lowestNegative = Infinity,
	// secondLowestNegative = Infinity;
	//
	// arr.forEach( item => {
	// 	if (item === 0) return zeros ++;
	// 	if (item < 0) {
	// 		if (Math.abs(item) <= Math.abs(lowestNegative)) {
	// 			secondLowestNegative = lowestNegative;
	// 			lowestNegative = item;
	// 		} else if (Math.abs(item) > Math.abs(lowestNegative) && Math.abs(item) <= Math.abs(secondLowestNegative)) {
	// 			secondLowestNegative = item;
	// 		}
	// 	} else {
	// 		sum += item;
	// 	}
	// });
	// if (zeros === 0 && sum === 0) return lowestNegative + secondLowestNegative; //No zeros and no positive numbers
	// if (zeros === 1 && sum === 0) return lowestNegative; //this represents $lowestNegative
	// return sum

	const sums = [];
	for (let i = 0; i < arr.length; i++) {
		let sum = arr[i];
		for (let j = arr.length - i -1; j > 0; j--) {
			sum += arr[j];
		}
		sums.push(sum);
	}
	return Math.max(...sums);
}

const input = [4, 6, -3, 5, -2, 1];

console.log(maxSum(input));
