function filterArray(arr, cb) {
	const filteredArray = [];
	arr.forEach( item => {
		if (cb(item)) filteredArray.push(item);
	});
	return filteredArray;
}

const arr = [1, 3, 5, 8, 9];

console.log(filterArray(arr, (item)=>item > 5));
