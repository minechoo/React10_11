import { useState } from "react"

// useState
export const Counter = () => {
    const [number, setNumber] = useState(0)

    const onPlus = () => {
        setNumber(number + 1)
    }

    const onMinus = () => {
        setNumber(number - 1)
    }

    return(
        <>
        <h1>{number}</h1>
        <input type="button" value="Plus One" onClick={onPlus}></input>
        <input type="button" value="Minus One" onClick={onMinus}></input>
        </>
    )
}