//대입 연산자
let num1 = 2;
let num2 = 3;

//누적덧셈
num1 = num1 + num2;
num1 += num2;

//문자열 보간법 (String Interpolation)
//따옴표가 아닌 악센트 기호를 사영

//기본 변수 삽입
const name1 = 'Alice';
//name1 = 'jim'//에러
console.log(`Hello, ${name1}!`);

//수식 계산
const a = 5,
	b = 0;
console.log(`The sum of ${a} and ${b} is ${a + b}`);

const multiline = `
  First line  
        Second line
  Third line
`;
console.log(multiline);

//숫자 형식화
const price = 19.99;
console.log(`The cost ${price}`);
