import { useState } from 'react';

export const InputSample2 = () => {
	const [inputs, setInputS] = useState({
		apple: '',
		사과: '',
	});

	const { apple, 사과 } = inputs;

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputS({
			...inputs, //기존 input객체를 복사해야 입력값을 보존할 수 있다
			[name]: value, //name키를 가진 값을 value로 저장
		});
	};

	const onReset = () => {
		setInputS({
			apple: '',
			사과: '',
		});
	};

	return (
		<>
			<input type='text' value={apple} onChange={onChange} placeholder='apple' name='apple'></input>
			<input type='text' value={사과} onChange={onChange} placeholder='사과' name='사과'></input>
			<input type='button' onClick={onReset} value='초기화'></input>
			<div>
				<p>값</p>
				<p>
					{apple}/{사과}
				</p>
			</div>
		</>
	);
};
