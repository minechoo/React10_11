import './App.css';

function App() {

  const introduce = {
    firstName : "James",
    occupation : 'ReactJS Developer',
    age : 25
  }

  const {firstName, occupation} = introduce
  const {age} = introduce

  return (
    <div className="App">
      <br></br>
      My Name is {firstName} and my job is {occupation}. <br/>
      I am {age} years old.
    </div>
  );
}

export default App;
