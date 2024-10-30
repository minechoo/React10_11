// Destructure : 구조 분해

// 객체 생성
const introduce = {
    firstName : 'James',
    occupation : "ReactJS Developer",
    age : 25
}

// Tradictional
console.log(introduce.firstName, introduce.occupation)

// Modern 
const {firstName, occupation} = introduce
console.log(firstName, occupation)

// parameter 변경
const{firstName:name1, occupation:job1} = introduce
console.log(name1, job1)

// 배열에서 사용
const numbers = [1,2,3,4,5]
const [one, two] = numbers
console.log(one, two)

// 건너뛰기
const [one1, two1, ,four1] = numbers
console.log(one1, two1, four1)

// 나머지 값
const [one2, two2, ...rest] = numbers
console.log(one2, two2, rest)

// 중첩된 객체인 경우 

let exam = {
    kor : 30,
    eng : 40,
    math : 50,
    student : {
        name : "James",
        phone : "010-1111-2222"
    },

}

// Traditional
console.log(exam.kor, exam.student.name, exam.student.phone)

let {kor, student:{name}, student:{phone}} = exam
console.log(kor, name, phone)

// 객체의 Destructure를 함수 사용
const introduce1 = {
    firstName : 'James',
    occupation : "ReactJS Developer",
    age : 25
}

const printIntroduce = ({firstName, occupation}) => console.log(`이름 : ${firstName}, 직업 : ${occupation}`)
printIntroduce(introduce1)