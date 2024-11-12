import './App.css';
import {createContext, useContext} from 'react'


const themeDefault = {border: '10px solid red'}
const themeContext = createContext(themeDefault)

function App() {
  const theme = useContext(themeContext)
  return (
    <div className="App" style={theme}>
      <h1>Hello World</h1>
      <Sub1 />
    </div>
  );
}

const Sub1 = () => {
  const theme = useContext(themeContext)
  return(
    <div style={theme}>
    <h1>Sub1</h1>
    <Sub2 />
    </div>
  )
}

const Sub2 = () => {
  const theme = useContext(themeContext)
  return(
    <div style={theme}>
    <h1>Sub2</h1>
    <Sub3 />
    </div>
  )
}

const Sub3 = () => {
  const theme = useContext(themeContext)
  return(
    <div style={theme}>
    <h1>Sub3</h1>
    </div>
  )
}



export default App;
