import './App.css';
import Student from './Student';

function App() {
  const hello ='안녕하세요'
  return (
    <div className="App">
      <br></br><br></br>
      <h1>{hello}</h1>
      <Student name="유비" major="JavaScript" />
      <br/>
      <Student name="장비" major="ReactJS" />
    </div>
  );
}

export default App;
