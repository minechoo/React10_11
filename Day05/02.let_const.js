//let 재할당 가능, const는 가능
//const러 선언된 객체나 배열 내부값을 변경할 수 있지마느 변수 자체를 재할당 할 수는 없음
//let은 반복문의 변수로 자주 사용되며 const는 변경되지 않아야 하는 값에 사용

//const 로 선언된 객체나 배열에 대한 변경
const person = {
	name: '홍길동',
	age: 30,
};
console.log('초기상태 : ', person);

person.name = '유비';
person.age = 35;
console.log('숙성변경 후 : ', person);

//객체에 새로운 속성추가
person.job = 'Devaloper';
console.log('속성 추가 후 : ', person);

//객체 자체를 재할당(불가능)
// person = {
// 	name: '관우',
// 	age: 25,
// };

//배열
const fruits = ['사과', '바나나', '오렌지'];
console.log('초기상태 :', fruits);

//배열의 요소변경
fruits[0] = '딸기';
console.log('요소변경 후 :', fruits);

//배열의 요소추가
fruits.push('키위');
console.log('요소추가 후 :', fruits);

//fruits = ['포도', '멜론'];
console.log('재항당 불가능 :', fruits);
