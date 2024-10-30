//조건연산자

//삼항연산자
let var1 = true;
let var2 = false;
console.log(var1 ? 1 : 2); //true이면 1
console.log(var2 ? 1 : 2); //flase이면 2

//조건문
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
	console.log(num1, 'is greater than', num2);
} else if (num1 < num2) {
	console.log(num1, 'less than', num2);
} else {
	console.log(num1, 'equal to', num2);
}

//학점
let score = 86;
if (score > 100 || score < 0) {
	result = '입력에 문제가있습니다';
} else if (score >= 90) {
	result = 'A학점';
} else if (score >= 80) {
	result = 'B학점';
} else if (score >= 70) {
	result = 'C학점';
} else if (score >= 60) {
	result = 'D학점';
} else {
	result = 'F학점';
}

console.log(`입력하신 점수는 ${score}이고 학점은 ${result} 입니다`);

//3항 연산자로 변경
console.log(
	score > 100 || score < 0
		? '입력에 문제 있습니다'
		: score >= 90
		? 'A학점'
		: score >= 80
		? 'B학점'
		: score >= 70
		? 'C학점'
		: score >= 60
		? 'D학점'
		: 'F학점'
);

//Exercie : bmi 계산
// 계산법 : bmi지수 = 체중(kg) / (신장(m)**2)
// 판별기준
// 저체중 18.5미만
// 정상 18.5이상 25미만
// 과체중 : 25이상 30미만
// 비만 : 30이상

const weight = 70; //kg
const height = 170; // cm

//귀하의 bmi 지수는   이고, 체중범위는   입니다

let bmi = weight / (height / 100) ** 2;
// bmi > 18.5
// 	? (result = '저체중')
// 	: 18.5 <= bmi < 25
// 	? (result = '정상')
// 	: 25 <= bmi < 30
// 	? (result = '과체중')
// 	: (result = '비만');

if (bmi < 18.5) {
	result = '저체중';
} else if (bmi < 25) {
	result = '정상';
} else if (bmi < 30) {
	result = '과체중';
} else {
	result = '비만';
}

console.log(`귀하의 bmi 지수는${bmi}이고, 체중범위는 ${result} 입니다`);

//Exercie :
//정해진 월(month)을 이용해 계절을 판별하는 계산을 하시오
//단 삼항연산자 사용하고 월에 해당하지 않는 숫자는 '유효하지 않는 월입니다'
//봄 : 3월 ~ 5월
//여름 : 6월 ~8월
//가을 : 9월 ~11월
//겨울 : 12월 ~ 2월

const month = 10;

// 3 <= month <= 5
// 	? (result = '봄')
// 	: 6 <= month <= 8
// 	? (result = '여름')
// 	: 9 <= month <= 11
// 	? (result = '가을')
// 	: // : 12 = month < 2
// 	  (result = '겨울');

//console.log(`계절은 ${result}`);

console.log(
	month < 1 || month > 12
		? '유효하지 않는 월 입니다'
		: month >= 3 && month <= 5
		? '봄'
		: month >= 6 && month <= 8
		? '여름'
		: month >= 9 && month <= 11
		? '가을'
		: '겨울'
);
