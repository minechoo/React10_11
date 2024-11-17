import './App.css';
import {useReducer} from 'react'

const reducer = (state, action) =>{
  switch(action.type){
    case 1:
      return state + 1
    case 10:
      return state + 10
    case 100:
      return state + 100
    case 1000:
      return state + 1000
    case 10000:
      return state + 10000
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, 1)

  const add1 = () => {
    dispatch({type:1})
  }
  const add10 = () => {
    dispatch({type:10})
  }
  const add100 = () => {
    dispatch({type:100})
  }
  const add1000 = () => {
    dispatch({type:1000})
  }
  const add10000 = () => {
    dispatch({type:10000})
  }

  return (
    <div className="App">
      <br/><br/>
      {count} <br/>
      <button onClick={add1}>add1</button>
      <button onClick={add10}>add10</button>
      <button onClick={add100}>add100</button>
      <button onClick={add1000}>add1000</button>
      <button onClick={add10000}>add10000</button>
    </div>
  );
}

export default App;
