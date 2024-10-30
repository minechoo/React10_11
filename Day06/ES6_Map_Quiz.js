// 학생 성적 필터링 및 평균 계산
const students = [
    {name : '김철수', scores : [80,90,70]},
    {name : '유비',   scores : [85,95,80]},
    {name : '관우',   scores : [70,85,90]},
    {name : '장비',   scores : [90,90,85]},
]

const getHighPerfomers = (studentList, threshold) => {
    return studentList
            .filter(({scores}) => {
                for(let score of scores){
                    if(score < threshold) return false
                }
                return true
            })
            .map(({name, scores}) => {
                let sum = 0
                for(let score of scores){
                    sum += score
                }
                return {
                    name,
                    average : sum / scores.length
                }
            })
}

console.log(getHighPerfomers(students, 80))