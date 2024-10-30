//3. 다음 배열에서 가장 긴 문자열을 찾아 반환하는 함수를 작성하시오
let words = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const findLongestString = (arrs) => {
	let longestWord = '';
	for (let arr of arrs) {
		if (arr.length > longestWord.length) {
			longestWord = arr;
		}
	}
	return longestWord;
};

console.log(findLongestString(words));

//4. 키와 몸무게 데이터를 이용해 bmi지수와 체중범주를 출력하세요
//계산접 : bmi지수 = 체중(kg) /(신장(m)*2)
// 저체중 18.5미만
// 정상 18.5이상 25미만
// 과체중 : 25이상 30미만
// 비만 : 30이상

const weight = 70; //kg
const height = 170; // cm

const calculateBMI = (weight, height) => {
	//미터로 전환
	let heightInMeters = height / 100;
	let bmi = weight / heightInMeters ** 2;
	return bmi;
};

//체중범주
const getBMICategory = (bmi) => {
	let result = '';
	if (bmi < 18.5) result = '저체중';
	else if (bmi < 25) result = '정상';
	else if (bmi < 30) result = '과체중';
	else result = '비만';
	return result;
};

const bmi = calculateBMI(weight, height);
const category = getBMICategory(bmi);

console.log(`BMI : ${bmi}`);
console.log(`체중범주 : ${category}`);

//5.함수를 이용하여 홀짝수 분류하기
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const seperatedEvenOdd = (numbers) => {
	let xx = [];
	let yy = [];
	for (let arr of numbers) {
		if (arr % 2 === 0) {
			xx.push(arr);
		} else {
			yy.push(arr);
		}
	}
	return { even: xx, odd: yy };
};
let result = seperatedEvenOdd(num1);

console.log('짝수 : ', result.even);
console.log('홀수 : ', result.odd);

//6.함수를 이용하여 배열에서 최대값 찾기
let nums = [3, 7, 2, 9, 1, 5];
const findMax = (ns) => {
	let max = ns[0];

	for (let n of ns) {
		if (n > max) max = n;
	}
	return max;
};

console.log('최대값 :', findMax(nums));

//7. 함수를 이용하여 문자열 뒤집기
let text = 'Hello, world!';
const reverseString = (word) => {
	let reversed = '';

	for (let i = word.length - 1; i >= 0; i--) {
		reversed += word[i];
	}
	return reversed;
};

console.log('뒤집힌 문자열 :', reverseString(text));

//8.함수를 이용하여 학생 성적관리
let students = [
	{ name: 'Alice', scores: [80, 85, 90] },
	{ name: 'Bob', scores: [70, 80, 75] },
	{ name: 'Charie', scores: [90, 95, 85] },
];

//평규 구하는 함수
const claculateAverage = (scores) => {
	// let sum = 0;
	// for (let score of scores) {
	// 	sum += score;
	// }
	let sum = scores.reduce((acc, score) => acc + score, 0);
	return sum / scores.length;
};
//학점 구하는 함수
const reportGrade = (students) => {
	for (let student of students) {
		let average = claculateAverage(student.scores);
	}
	let grade =
		average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F';
	return grade;
};
reportGrade(students);

//recude
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = numbers1.reduce((acc, num) => acc + num, 0);
console.log(sum1);
