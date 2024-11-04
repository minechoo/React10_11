import { useState } from 'react';

export const InputSample3 = () => {
	const [inputs, setInputS] = useState({
		apple: '',
		사과: '',
	});

	const [enters, setEnters] = useState({
		enter: '',
		enter2: '',
	});

	// const [enter, setEnter] = useState('');
	// const [enter2, setEnter2] = useState('');

	const { apple, 사과 } = inputs;
	const { enter, enter2 } = enters;

	const onChange = (event) => {
		const { value, name } = event.target;
		setInputS({
			...inputs, //기존 input객체를 복사해야 입력값을 보존할 수 있다
			[name]: value, //name키를 가진 값을 value로 저장
		});
	};

	const exp = () => {
		setEnters({
			enter: apple,
			enter2: 사과,
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
			<input type='button' onClick={exp} value='출력'></input>
			<div>
				<p>값</p>
				<p>
					{enter}/{enter2}
				</p>
			</div>
		</>
	);
};
