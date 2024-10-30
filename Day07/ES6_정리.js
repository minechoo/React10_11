//Quiz
//배열에서 짝수만 골라내기(filter 사용)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((even) => even % 2 === 0);

console.log(evenNumbers); //[ 2, 4, 6, 8, 10 ]
console.log('-----------------------------');

//객체 배열에서 특정 속성 추출하기 (map 사용)
const people = [
	{ name: '김철수', age: 30 },
	{ name: '이영희', age: 25 },
	{ name: '김민수', age: 35 },
];

const names = people.map(({ name }) => name);

console.log(names);
console.log('-----------------------------');

//객체 속성 추출 및 기본값 설정(Destructuring)
const user = { name: '홍길동' };

const { name, age = 30 } = user;

console.log(`이름 : ${name}, 나이 : ${age}`);
console.log('-----------------------------');

const [one, , three, ...rest] = [1, 2, 3, 4, 5];
console.log(one, three, rest);
console.log('-----------------------------');

//객체 속성 이름 변경 (Destructuring)
const person = { firstName: '길동', lastName: '홍' };
const { lastName: 성, firstName: 이름 } = person;
console.log(`${성}${이름}`);

console.log('-----------------------------');

//객체 병합 (spread)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergeObj = { ...obj1, ...obj2 };

console.log(mergeObj); //{a:1, b:3, c:4}
console.log('-----------------------------');

//배열 요소 필터링 및 변환(Map, filter).toUpperCase()
const fruites = ['apple', 'banana', 'orange', 'kiwi'];

const longFurites = fruites.filter((el) => el.length > 5);
const upperLongFruites = fruites.filter((el) => el.length > 5).map((el) => el.toUpperCase());

console.log(longFurites); //6글자이상
console.log(upperLongFruites); //6글자이상

//함수 매개변수 기본값 및 구조분해 (arrow)

const greet = ({ name = '손님', greeting = '안녕하세요' } = {}) => {
	console.log(`${greeting}, ${name}님`);
};

greet(); //안녕하세요 손님님!
greet({ name: '철수' });
greet({ name: '영희', greeting: '반갑습니다' }); //반갑습니다, 영희님
