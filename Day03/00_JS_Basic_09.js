//함수
//일반 함수
function sum(num1, num2) {
	return num1 + num2;
}
console.log(sum(10, 20));

//Fat Arrow 함수
const subtract = (num1, num2) => {
	//const abc = 32
	return num1 - num2;
};
console.log(subtract(10, 20));

const subtract1 = (num1, num2) => num1 - num2;
console.log(subtract1(10, 20));

//덧셈, 뺄셈, 곱셈, 나눗셈의 구분값을 입력받아 2개의 숫자를 계산하는 함수 만들기

const calc = (role, num1, num2) => {
	let result = 0;
	if (role === 'add') {
		result = num1 + num2;
	} else if (role === 'sub') {
		result = num1 - num2;
	} else if (role === 'mul') {
		result = num1 * num2;
	} else if (role === 'div') {
		result = num1 / num2;
	} else {
		result = 'what!';
	}
	return result;
};

console.log(calc('add', 3, 4));
console.log(calc('sub', 3, 4));
console.log(calc('mul', 3, 4));
console.log(calc('div', 3, 4));
console.log(calc('division', 3, 4));

//Ex : 월별 계절 판별기를 함수로 작성하여 출력
//3 ~ 5 : 봄
//6 ~ 8 : 여름
//9 ~ 11 : 가을
//12 ~ 2 : 겨울

const detemineSeasin = (month) => {
	result = '';
	month < 1 || month > 12
		? (result = '유효하지 않는 월 입니다')
		: month >= 3 && month <= 5
		? (result = '봄')
		: month >= 6 && month <= 8
		? (result = '여름')
		: month >= 9 && month <= 11
		? (result = '가을')
		: (result = '겨울');

	return result;
};

console.log(detemineSeasin(3)); //봄
console.log(detemineSeasin(7)); //여름
console.log(detemineSeasin(10)); //가을
console.log(detemineSeasin(12)); //겨울
console.log(detemineSeasin(13)); //유효하지 않는 월 입니다
