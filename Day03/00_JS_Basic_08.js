//객체(Object)

//String Type 만으로 객체구성
let obj1 = { a: 'apple', b: 'banana', c: 'cherry' }; //{key:value}
console.log(obj1['a']); //희안하다
console.log(obj1.a);

//Number Type만으로 객체구성
let obj2 = { one: 1, two: 2, three: 3 };
//2 + 3 = 5
console.log(obj2);
console.log(`${obj2.two} + ${obj2.three} = ${obj2.two + obj2.three}`);

//객체를 사용하여 객체를 구성
let obj3 = {
	apple: { a1: 1, a2: 2 },
	banana: { b1: 3, b2: 4 },
	cherry: { c1: 3, c2: 4 },
};

//banana의 b1과 cherry의 c1 덧셈 결과 출력\
console.log(`${obj3.banana.b1} + ${obj3.cherry.c1} = ${obj3.banana.b1 + obj3.cherry.c1}`);

let obj4 = {
	apple: [1, 2],
	banana: [3, 4],
	cherry: [5, 6],
};

//banana의 0번째 요소와 cherry의 0번째 요소 덧셈
console.log(obj4.banana[0] + obj4.cherry[0]);

//학생 정보 객체 만들기
let student = {
	name: '홍길동',
	age: 20,
	grades: {
		math: 90,
		english: 85,
		science: 92,
	},
};

//홍길동의 수학 점수 : 90
console.log(`${student.name}의 수학점수 : ${student.grades.math}`);

//객체 메서드(Method) 사용하기
let calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
};

console.log('덧셈결과: ' + calculator.add(5, 3));
console.log('뺄셈결과: ' + calculator.subtract(5, 3));

//객체속성 순회하기
let car = {
	brand: '현대',
	model: '소나타',
	year: 2021,
	color: '흰색',
};
console.log(car);

for (let key in car) {
	console.log(key + ':' + car[key]);
}

//객체 숙성 밍 추가 및 삭제
let person = {
	name: '홍길동',
	age: 25,
};
person.job = '개발자';
console.log(person);

delete person.age;
console.log(person);
