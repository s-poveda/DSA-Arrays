const memory = new (require('./memory'));

class Array {
	constructor() {
		this.length = 0;
		this.capacity = 0;
		this.ptr = memory.allocate(this.length);
	}

	push(val) {
		if (this.length >= this.capacity){
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		memory.set(this.ptr + this.length, val);
		this.length++;
	}

	_resize(size) {
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
		if (this.ptr === null) throw new Error('fresh out of memory');
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this.capacity = size;
	}

	pop() {
		if (this.length === 0) throw new ReferenceError('Cannot "pop" from an empty array');
		const val = memory.get(this.ptr + this.length - 1);
		this.length--;
		return val;
	}

	get(idx) {
		if (this.length < 0 || idx >= this.length) throw new ReferenceError('Cannot access index');
		return memory.get(this.ptr + idx);
	}

	insert(idx, val) {
		if (this.length < 0 || idx >= this.length) throw new ReferenceError('Cannot access index');
		if (this.length >= this.capacity){
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		memory.copy(this.ptr + idx + 1, this.ptr + idx, this.length - idx);
		memory.set(this.ptr + idx, val);
		this.length++;
	}
}

Array.SIZE_RATIO = 2;

function main() {
	const arr = new Array();
	arr.push('string');
	console.log(arr);
	const arr2 = new Array();
	arr2.push(23);
	arr2.push(5);
	arr2.push(5.52);
	console.log(arr2.get(2), arr2.pop());
}

main();
