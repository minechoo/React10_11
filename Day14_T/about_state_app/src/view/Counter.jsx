import { useState } from "react"

export const Counter = () => {
    // let number = 0

    // Step 1
    // const numberState = useState(0)
    // const number = numberState[0]
    // const setNumber = numberState[1]

    // Step 2
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(1)


    const onPlus = () => {
        setNumber(number + 1)
    } 

    const onPlus1 = (part) => {
        // number += 1
        if(part === 1){

        }
        setNumber2(number2 + 1)
    }

    const onMinus = () => {
        setNumber(number - 1)
    }

    const onMinus1 = () => {
        setNumber2(number2 - 1)
    }

    return (
        <>
            <h1>{number}, {number2}</h1>
            <input type="button" value="Plus One" onClick={onPlus}></input>
            <input type="button" value="Minus One" onClick={onMinus}></input><br/>
            <input type="button" value="Plus One" onClick={onPlus}></input>
            <input type="button" value="Minus One" onClick={onMinus1}></input><br/>
        </>
    )
}