import './App.css';
import { Hello } from './Hello';

function App() {
  return (
    <div className = "App">
      <br/><br/>
      <Hello />
      <br/>
      <StyleTest />
      <br/>
      <CSSTest />
    </div>
  );
}

const StyleTest = () => {
  const name = 'ReactJS'
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '2rem'
  }

  return(
    <div style={style}>
      {name}
    </div>
  )
}

const CSSTest = () => {
  return(
    <div className='gray-box'>
      Hello
    </div>
  )
}

export default App;
