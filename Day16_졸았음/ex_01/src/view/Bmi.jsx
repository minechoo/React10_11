import { useRef, useState } from 'react';

export const Bmi = () => {
	const [inputs, setInputs] = useState({
		kg: '',
		cm: '',
	});

	const nameInput = useRef();
	const { kg, cm } = inputs;

	const [result, setResult] = useState({
		resultBmi: '...',
	});

	const { resultBmi } = result;

	const onReset = () => {
		setInputs({
			kg: '',
			cm: '',
		});
		nameInput.current.focus();

		setResult({
			resultBmi: '',
		});
	};

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	return (
		<>
			<input
				type='text'
				name='kg'
				id=''
				placeholder='kg'
				onChange={onChange}
				value={kg}
				ref={nameInput}
			/>
			<input type='text' name='cm' id='' placeholder='cm' onChange={onChange} value={cm} />
			<input type='button' value='초기화' onClick={onReset}></input>
			<input type='button' value='계산하기'></input>
			<div>
				<p>결과 : {resultBmi}</p>
			</div>
		</>
	);
};
