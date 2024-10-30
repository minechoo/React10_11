// --------------------------------------------//
// 산술연산자
// --------------------------------------------//

let num1 = 2;
let num2 = 3;

//덧셈 연산
console.log('덧셈', num1 + num2);

//뺄셈 연산
console.log('뺄셈', num1 - num2);

//곱샘 연산
console.log('곱샘', num1 * num2);

//나눗셈 연산
console.log('나눗셈', num1 / num2);
console.log('나눗셈', (num1 / num2).toFixed(3)); //소수점 자리수 제한

//나머지 나머지 연산
console.log('나머지', num1 % num2);

//제곱 연산
console.log('제곱:', num1 ** num2);
console.log('제곱:', Math.pow(num1, num2));

//제곱근 연산
console.log('제곱근:', Math.sqrt(num1).toFixed(3));
