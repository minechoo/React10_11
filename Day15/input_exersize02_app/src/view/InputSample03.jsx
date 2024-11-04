import { useState } from 'react';

export const InputSample03 = () => {
	const [apple, setApple] = useState('');
	const [사과, set사과] = useState('');

	const onChangeA = (event) => {
		setApple(event.target.value);
	};
	const onChangeB = (event) => {
		set사과(event.target.value);
	};

	const onReset = () => {
		setApple('');
		set사과('');
	};

	return (
		<>
			<input type='text' value={apple} onChange={onChangeA} placeholder='apple'></input>
			<input type='text' value={사과} onChange={onChangeB} placeholder='사과'></input>
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
