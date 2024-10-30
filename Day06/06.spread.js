// Spread

let person = {
    name : 'James',
    age : 25
}

// 복사하기
let person1 = {...person} // call by value
let person2 = person  // call by reference

console.log(person)
console.log(person1)
console.log(person2)

// person의 객체 요소 변경
person.age = 30 
console.log(person)
console.log(person1)
console.log(person2)

// 복사후에 내용 추가하기
let person3 = {...person, occupation : "ReactJS Developer"}
console.log(person3)

// 복사후에 내용 변경하기
let person4 = {...person, name : 'Cathy'}
console.log(person4)

// 배열에 적용
let array = [1,2]
let array2 = [...array, 3]
console.log(array2)

let array3 = [...array, ...array2]
console.log(array3)



