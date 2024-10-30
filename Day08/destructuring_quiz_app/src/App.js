import './App.css';

function App() {

  const num1 = {
    name1 : '1번 숫자',
    data1 : 10
  }
  
  const num2 = {
    name1 : '2번 숫자',
    data1 : 20
  }

  const {name1, data1} = num1
  const {name1:name2, data1:data2} = num2

  return (
    <div className="App">
      <br/><br/>
      {name1}의 값은 {data1}입니다. <br/>
      {name2}의 값은 {data2}입니다. <br/>

      두 수의 합은 {data1} + {data2} = {data1 + data2} 입니다. 
    </div>
  );
}

export default App;
