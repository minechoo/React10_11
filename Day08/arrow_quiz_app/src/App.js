import './App.css';

function App() {
  const addition = (num1, num2) => num1 + num2 
  const subtraction = (num1, num2) => num1 - num2 
  const multiplication = (num1, num2) => num1 * num2 
  const division = (num1, num2) => num1 / num2 

  const remarkAddition = (title, num1, num2) => {
    let result = 0
    // if(title === '덧셈'){
    //   result = num1 + num2
    // }else if(title === '뺄셈'){
    //   result = num1 - num2
    // }else if(title === '곱셈'){
    //   result = num1 * num2
    // }else{
    //   result = num1 / num2
    // }

    result = (  title === '덧셈' ? num1 + num2 
              : title === '뺄셈' ? num1 - num2
              : title === '곱셈' ? num1 * num2
              : num1 / num2)

    return `${title} : ${result}`
  }

  return (
    <div className="App">
      <br/>
      덧셈 : {addition(10, 20)}
      <br/>
      뺄셈 : {subtraction(10, 20)}
      <br/>
      곱셈 : {multiplication(10, 20)}
      <br/>
      나눗셈 : {division(10, 20)}
      <hr></hr>
      * 사칙 연산을 하나의 Function 으로 *
      <br/>
      {remarkAddition("덧셈", 10, 20)}
      <br/>
      {remarkAddition("뺄셈", 10, 20)}
      <br/>
      {remarkAddition("곱셈", 10, 20)}
      <br/>
      {remarkAddition("나눗셈", 10, 20)}
    </div>
  );
}

export default App;
