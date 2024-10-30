//배열(Array)

//Number Type으로만 배열 생성
let arr1 = [10, 20, 30, 40, 50];
let num1 = arr1[4];
let num2 = arr1[3];
console.log(num1 - num2);

//String Type으로만 배열생성
let arr2 = ['apple', 'banana', 'cherry'];
console.log(arr2[1]);

//변수로 배열 생성
let arr3 = [num1, num2];
console.log(arr3[0]);

//Number 와 String Type으로 배열 생성
let arr4 = ['apple', 10, 'banana', 20];
console.log(arr4[0], ':', arr4[0 + 1]);

//다양한 자료형으로 배열
let arr5 = ['apple', 10, true, null, undefined];

//혼합 데이터 타입 배열
let mixed = [42, 'hello', true, null, { name: 'john' }];
console.log(mixed[4].name);

//2차원 배열
let matrix = [
	[1, 2],
	[3, 4],
	[5, 6],
];
//3만 출력하기
console.log(matrix[1][0]);

//배열에 데이터 추가하기
let colors1 = ['red', 'green', 'blue'];
colors1.push('yellow');
console.log(colors1);

let colors2 = [];
//red, green, blue 라는 string 추가
colors2.push('red');
colors2.push('green');
colors2.push('blue');
colors2.push(['red', 'green', 'blue']);
colors2.push({ name: 'james' });
console.log(colors2);
//console.log((colors2 = [...colors1]));

//배얼 길이 확인
let animals = ['dog', 'cat', 'bird'];
console.log(animals.length);

//배열 요소 변경
let season = ['spring', 'summer', 'autumn', 'winter'];
//summer를 hot summer로 변경
season[1] = 'hot summer';
console.log(season);

//배열 슬라이싱
let numbers = [1, 2, 3, 4, 5];
//[2,3,4]
let sliced = numbers.slice(1, 4);
console.log(sliced);

//배열 연결
let array1 = [1, 2];
let array2 = [3, 4];
let combined = array1.concat(array2);
console.log(combined);

//배열 요소 찾기
let fruits = ['apple', 'banana', 'cherry', 'date'];
let index = fruits.indexOf('cherry1');
console.log(index); //-1

console.log('-----------------------------');

//배열에서 마지막 요소(index)를 제거하고 제거된 요소를 출력
let numbers2 = [1, 2, 3, 4, 5];
let removedNumber = numbers2.pop();
console.log(removedNumber);
console.log(numbers2);

//************************** */
//Ex 다음 배열에서 "banana"를 출력하는 코드를 작성 하세요
let fruits2 = ['apple', 'banana', 'cherry'];
console.log(fruits2[1]);

//Ex : numbers3라는 빈배열을 생성하고 그 배열에 숫자 1,2,3을 순서대로 추가하는 코드를 작성하세요
let numbers3 = [];
numbers3.push(1);
numbers3.push(2);
numbers3.push(3);
console.log(numbers3);

//Ex : 다음 배열의 길이를 구하는 코드를 작성하세요
let colors3 = ['red', 'green', 'blue', 'yellow'];
console.log(colors3.length);

//Ex : 다음 2개의 배열을 합쳐서 새로운 배열을 만드는 코드를 작성하세요
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];
let arr8 = arr6.concat(arr7);
console.log(arr8);
let arr9 = [...arr6, ...arr7];
console.log(arr9);

//Ex : 문자열 보간법을 이용해 배열 속성 접근
let fruits3 = ['apple', 'banana', 'cherry'];
console.log(`I like ${fruits3[1]}.`);

//Ex : 문자열 거꾸로 출력하기
const str = 'Hello, world!';
let reversed = '';

for (let i = str.length - 1; i >= 0; i--) {
	reversed += str[i];
}
//reversed += str[str.length - 1];
console.log(reversed);
