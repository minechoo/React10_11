import { useRef, useState } from "react"

export const InputSample = () => {

    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })

    const {name, nickname} = inputs
    const nameInput = useRef()

    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        })
        nameInput.current.focus() 
    }

    const onChange = (event) => {
        const {value, name} = event.target 
        setInputs({
            ...inputs, 
            [name] : value
        })
    }

    return (
        <>
        <input type="text" placeholder="Name" onChange={onChange} value={name} name="name" ref={nameInput}></input>
        <input type="text" placeholder="Nick name" onChange={onChange} value={nickname} name="nickname"></input>
        <input type="button" value='초기화' onClick={onReset}></input>
        <div>
            <p>값 :</p>
            {name} / {nickname}
        </div>
        </>
    )
}