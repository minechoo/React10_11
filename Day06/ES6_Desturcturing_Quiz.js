// 객체에서 특성 속성 추출하기
// person객체에서 이름과 나이를 추출하여 출력하는 화살표 함수를 작성하세요
const person = {
    name : "Alice",
    age : 30,
    job : "developer"
}

const printNameAndAge = ({name, age}) => console.log(`이름 : ${name}, 나이 : ${age}`)

printNameAndAge(person)

// 배열의 첫 2요소 추출하기
// 배열의 첫 2요소를 추출하여 합(덧세)을 반환하는 화살표 함수를 작성 하세요

const sumFirstTwo = ([first, second]) => first + second

console.log(sumFirstTwo([1,2,3,4]))  // 3
console.log(sumFirstTwo([10,20,30]))  // 30

// 3. 함수 매개변수 기본값 설정하기 
// 이름과 나이를 받아 인사말을 반환하는 화살표 함수를 작성하세요
// 나이의 기본값을 20으로 설정하세요

const greet = (name, age=20) => `안녕하세요, ${name}님! 당신은 ${age}살 입니다.`

console.log(greet("Bob")) // 안녕하세요, Bob님! 당신은 20살 입니다.
console.log(greet("Charlie", 25)) // 안녕하세요, Charlie님! 당신은 25살 입니다.

// 중첩 객체에서 데이터 추출하기
// 주어진 사용자 객체에서 도시 이름을 추출하여 반환하는 화살표 함수를 작성 하세요

const getCity = ({address : {city}}) => city

const user = {
    name : "David",
    address : {
        street : "123 Main St.",
        city : "Seoul"
    }
}

console.log(getCity(user)) // Seoul

// 배열 요소 건너뛰기
// 배열의 첫번째와 세번째 요소를 추출하여 객체로 반환하는 화살표 함수를 작성하세요

const extractFirstAndThird = ([first,,third]) => ({first, third})

console.log(extractFirstAndThird(['a', 'b','c','d'])) // {first: 'a', third : 'c'}
console.log(extractFirstAndThird([1,2,3,4,5])) // {first: 1, third : 3}

