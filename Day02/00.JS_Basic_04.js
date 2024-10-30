//관계연산자

//비교연산자
let num1 = 1,
	num2 = 2;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

//동등연산자
console.log(num1 == num2);
console.log(num1 != num2);

//일치연산자
num1 = '1';
num2 = 1;
console.log(num1 == num2); //Data의 일치여부
console.log(num1 != num2);
console.log(num1 === num2); //일치비교: type과 Data가 일치 //false
console.log(num1 !== num2);

//2진 논리연산자
let var1 = true;
let var2 = false;
console.log(var1 && var2); //T && T -> T
console.log(var1 || var2); //F || F -> F
