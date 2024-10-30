// for문과 Map을 통한 방법 비교

const testArray = [1,2,3,4]

// testArray의 요소를 2배 증가시킨 배열 만들기
const result = []
for(let test of testArray){
    result.push(test*2)
}
console.log(result)

// 맵을 활용한 방식
const resultMap = testArray.map((x) => {return x * 2})
console.log(resultMap)

// JSON
const users = [
    {
        name : 'James',
        age : 25
    },
    {
        name : 'Cathy',
        age : 20
    },
    {
        name : 'Kenny',
        age : 30
    }
]

// 전체 내용 보기
console.log(users)

// name만 보기 
console.log(users.map(user => user.name))

// 조건(age가 25이상)에 맞는 내용만 보기
console.log(users.filter(user => user.age >= 25))

// 조건(age가 25이상)에 맞는 name만 보기
console.log(users.filter(user => user.age >= 25)
                .map(user => user.name)
)

// 조건(age가 25이상)에 맞는 name과 age만 같이 보기
console.log(users.filter(user => user.age >= 25)
                .map(user => ([user.name, user.age]))
)






