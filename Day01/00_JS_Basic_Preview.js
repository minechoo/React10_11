// --------------------------------------------//
// Preview
// --------------------------------------------//

//Dynamic Type : 변수 선언시 변수에 대한 타입을 정의하지 않고 데이터에 의한 변수 타입이 결정

//Number Type
let n1 = 1234; //정수
let n2 = 1.234; //실수
n1 = 12340; //assignment
console.log('n1 :', n1, 'n2 :', n2);
console.log(typeof n1);
/*
let 키워드는 변수를 선언하는데 사용되고 ES6에서 도입
let 주요특징
1. 블록 스코프(Block Scope)
- let으로 선언된 변수는 해당볍수가 선언된 블록내애서만 유효
- 중괄호 {} 내에사 선언돤 변수는 그 블록 외부에서 접근할 수 없다
2. 재선언 불가
- 같은 스코프 내이서 동일한 이름으로 변수를 재선언 할 수 없다
- 다른 블록에서는 같은 이름으로 선언가능
3. Data 재할당 가능
- let으로 선언된 변수는 값을 재할당 할 수 있음

** 현 javascript에서는 var 대신에 let, const
*/

//String Type
let s0 = 'Hello world!';
let s1 = 'Hello world!';
let s2 = "'Hello world!'";
let s3 = '"Hello world!"';
console.log('statement #0', s0);
console.log('statement #1', s1);
console.log('statement #2', s2);
console.log('statement #3', s3);
console.log('--------------');

//Boolean Type
let b1 = true;
let b2 = false;
console.log(b1, b2);
console.log('--------------');

//null type
let n = null;
console.log(n);
n = 'abc';
console.log(n);
console.log('--------------');

//undefined
let u1;
let u2 = undefined;
console.log(u1, u2);
console.log('--------------');

//Array Type
let arr = [10, 20, 30, 40]; //배열 리터럴(Arrat Literal)
console.log(arr);
console.log(arr[0]);
console.log(arr[1] - arr[0]);

//맨 뒤에 요소(index) 출력 --> 1
console.log(arr[arr.length - 1]);
//맨 뒤에 요소(index) 출력 --> 2 ECMA2022 이상
console.log('Last Element:', arr.at(-1));
console.log('First Element:', arr.at(0));
// 배열의 범위로 데이터 출력
console.log('Start Range:', arr.slice(2)); //세번째부터 끝까지
console.log('Range:', arr.slice(1, 3));
console.log('Range:', arr.slice(1, 3)[0]);
console.log('--------------');

//객체 type
let obj = { a: 'apple', b: 'banana', c: 'cherry' }; //객체 리터럴 (Object Literal)
let arr2 = ['apple', 'banana', 'cherry'];
console.log('객체의 key가 b :', obj['b']);
console.log('1번지 배열 :', arr2[1]);

//객체와 배열의 value 변경
obj['b'] = 'orange';
arr2[1] = 'orange';
console.log(obj);
console.log(arr2);
console.log('--------------');

//객체와 배열의 삭제
delete obj['b'];
console.log(obj);
// delete arr2[1];
// console.log(arr2);
// arr2[1] = ''
// console.log(arr2);
// arr2[1] = undefined
// console.log(arr2);
arr2.splice(1, 1);
console.log(arr2);
