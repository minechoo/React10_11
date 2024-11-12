import './App.css';
import styled from 'styled-components'


function App() {

  const RedButton = styled.button`
    color: red;
    font-size: 1em;
    border: 2px solid;
    border-color: red;
    border-radius: 3px;
  `

  const BlueButton = styled(RedButton)`
    color: blue;
    border-color: blue;
  `


  return (
    <div className="App">
        <br/><br/>
        <RedButton>Red Button</RedButton>
        <BlueButton>Blue Button</BlueButton>
    </div>
  );
}

export default App;
