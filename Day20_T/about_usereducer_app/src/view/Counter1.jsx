import { useReducer } from "react"

const reducer = (state, action) => {
    if(action.type === "Increment"){
        return state + 1
    }else if(action.type === "Decrement"){
        return state - 1
    }
}

export const Counter1 = () => {
    const [number, dispath] = useReducer(reducer, 0)

    const onPlus = () => {
        dispath({type: 'Increment'})
    }

    const onMinus = () => {
        dispath({type: 'Decrement'})
    }


    return(
        <>
        <h1>{number}</h1>
        <input type="button" value="Plus One" onClick={onPlus}></input>
        <input type="button" value="Minus One" onClick={onMinus}></input>
        </>
    )
}