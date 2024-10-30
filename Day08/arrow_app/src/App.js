import './App.css';

function App() {

  const introduce1 = (myName, occupation) => {
    return `My name is ${myName} and I am a ${occupation}.`
  }

  return (
    <div className="App">
      <br/><br/>
      {introduce1('James', 'ReactJS')}
      <br/>
      {introduce1('Martin', 'JavaScript')}
    </div>
  );
}

export default App;
