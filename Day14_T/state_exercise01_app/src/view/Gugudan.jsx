import { useState } from "react"

export const Gugudan = () => {
    const [dan, setDan] = useState(2)

    const onPlus = () => {
        setDan(dan + 1)
    }

    const onMinus = () => {
        setDan(dan - 1)
    }

    const danCalc = () => {
        const result = []
        for(let i=1; i<=9; i++){
            result.push(<div key={i}>{dan} X {i} = {dan*i}</div>)
        }
        return result
    }

    const danCalcMap = () => {
        const multipliedNumber = [...new Array(9)].map((_, i) => i+1)
        return(
            <>
            {multipliedNumber.map(num => <div> {dan} X {num} = {dan*num}</div>)}
            </>
        )
    }


    return (
        <>
        <h1>{dan}단</h1>
        {/* {danCalc()} */}
        {danCalcMap()}
        <br/>
        <input type="button" value="단 증가" onClick={onPlus} ></input>
        <input type="button" value="단 감소" onClick={onMinus} ></input>
        </>
    )
}