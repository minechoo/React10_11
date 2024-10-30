//반복연산자

//for문
for (i = 1; i <= 10; i++) {}
arr = [3, 4, 5];
for (i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

//for in문
for (i in arr) {
	console.log(i); //index 추출
}

//for of 문
for (i of arr) {
	console.log(i); //Data 값
}

//구구단
dan = 2;
for (i = 0; i <= 9; i++) {
	console.log(dan, 'X', i, '=', dan * i);
}

for (i of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
	console.log(dan, 'X', i, '=', dan * i);
}

//Spread
withDan = '123456789';
for (i of [...withDan]) {
	// [1, 2, 3, 4, 5, 6, 7, 8, 9]
	console.log(dan, 'X', i, '=', dan * i);
}

//문자열 반복
const repeat = 3;
console.log(`${'Na'.repeat(repeat)} Batman!`);
