//Quiz
// 다음 배열에서 문자열 타입의 요소만 새로운 배열로 만들어 반환하는 함수를 작성하세요

// hint
// let test = 'abc';
// console.log(typeof test);

let mixedArray = [1, 'apple', true, 'banana', 42, 'cherry'];

const getStrings = (arrs) => {
	let result = [];
	for (let key of arrs) {
		if (typeof key === 'string') {
			result.push(key);
		}
	}
	return result;
};
console.log(getStrings(mixedArray));

const getStrings1 = (arrs) => {
	let result = [];
	for (let i = 0; i < arrs.length; i++) {
		if (typeof arrs[i] === 'string') {
			result.push(arrs[i]);
		}
	}
	return result;
};
console.log(getStrings1(mixedArray));

//2. 주어진 배열의 모든 숫자 요소의 합을 계산하는 함수를 작성하세요
let numbers = [10, 20, 30, 40, 50];

const setNumbers = (num) => {
	let sum = 0;
	for (let key of num) {
		sum += key;
	}
	return sum;
};

console.log(setNumbers(numbers));
