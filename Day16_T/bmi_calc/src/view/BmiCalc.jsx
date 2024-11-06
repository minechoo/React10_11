import { useState } from "react"

export const BmiCalc = () => {

    const [inputs, setInputs] = useState({
        weight : '',
        height : ''
    })
    const {weight, height} = inputs

    const [result, setResult] = useState({
        resultBMI : '---'
    })
    const {resultBMI} = result

    const onChange = (event) => {
        const {value, name} = event.target 
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset = () => {
        setInputs({
            weight : '',
            height : ''
        })

        setResult({
            resultBMI : ''
        })
    }

    const onClick = () => {
        if(weight === '' || height === ''){
            alert('Data를 확인 하세요')
        }else{
            let calcWeight = Number(weight)
            let calcHeight = Number(height) / 100

            let calcResult = (calcWeight / (calcHeight * calcHeight)).toFixed(1)
            let bmiResult = bmiSelect(calcResult)
            
            setResult({
                resultBMI : bmiResult
            })
        } 
    }

    const bmiSelect = (calcResult) => {
        let returnResult = ''
        if(calcResult >=0 && calcResult <= 18.4){
            returnResult = '저체중'
        }else if(calcResult >= 18.5 && calcResult <= 22.9){
            returnResult = '정상체중'
        }else if(calcResult >= 23 && calcResult <= 24.9){
            returnResult = '비만'
        }else{
            returnResult = '고도비만'
        }

        return returnResult
    }


    return (
        <>
        <input type="text" placeholder="몸무게(Kg)" onChange={onChange} value={weight} name='weight'></input>
        <input type="text" placeholder="신장(cm)" onChange={onChange} value={height} name='height'></input>
        <input type="button" value='초기화' onClick={onReset}></input>
        <input type='button' value='계산하기' onClick={onClick}></input>
        <div>
            <p>결과 : {resultBMI}</p>
        </div>
        </>
    )
}