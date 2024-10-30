// 5. 문자열 뒤집기
// 문자열을 인자로 받아 그 문자열을 뒤집어 반환하는 화살표 함수를 작성하세요
const reverseString = (str) => {
    let reversed = ''
    for(let i=str.length - 1; i>=0; i--){
        reversed += str[i]
    }
    return reversed
}

console.log(reverseString("hello")) // olleh 

