//간단한 덧셈함수
// 두 숫자를 인자로 받아 그 합을 반환하는 화살표 함수을 작성하시오

const add = (a, b) => {
	return a + b;
};

console.log(add(5, 3));
console.log(add(-1, 7));

//2.문자열 반복 함수
//문자열과 반복 횟수을 인자로 받아 해당 문자열을 주어진 횟수만큼 반복
//새로운 문자열을 반환하는 화살표함수을 작성하세요

const repeatString = (str, num) => {
	let result = '';
	for (let i = 0; i < num; i++) {
		result += str;
	}
	return result;
};

console.log(repeatString('hello', 3));

//3. 짝수, 홀수 판별 함수
// 숫자를 인자로 받아 짝수인 경우에는 "짝수"
//홀수인 경우에는 "홀수"를 반화놔는 화살표 함수를 작성하세여

const isEvenOdd = (num) => {
	if (num % 2 === 0) {
		return '짝수';
	} else {
		return '홀수';
	}
};

console.log(isEvenOdd(4));
console.log(isEvenOdd(7));

//4. 최대값 찾기 함수
// 3개의 숫자를 인자로 받아 그중 가장 큰 수를 반화놔는 화살표함수극 작성하세여
const findMax = (n1, n2, n3) => Math.max(n1, n2, n3);
// let num = []
// num.push(n1)
// num.push(n2)
// num.push(n3)

console.log(findMax(10, 5, 8)); //10
