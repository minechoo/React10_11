import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0)

    const onPlus = () => {
        setNumber(number + 1)
    }

    const onMinus = () => {
        setNumber(number - 1)
    }


    return(
        <>
        <CountValue num = {number} color = {number % 2 === 0 ? "red" : "blue"}></CountValue>
        <input type="button" value='Plus One' onClick={onPlus}></input>
        <input type="button" value='Minus One' onClick={onMinus}></input>
        </>
    )
}

const CountValue = (props) => {
    return(
        <>
        <h1 style={{color:props.color}}>{props.num}</h1>
        </>
    )
}

export default Counter