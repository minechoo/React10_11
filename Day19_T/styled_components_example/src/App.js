import './App.css';
import styled from 'styled-components'

const SimpleButton = styled.button`
  color : white;
  background-color: green;
`
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`
const ReactButton = (props) => {
  return(
    <>
    <button className={props.className}>{props.children}</button>
    </>
  )
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`

function App() {
  return (
    <div className="App">
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <br/>
      <ReactButton>Simple</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
    </div>
  );
}

export default App;
