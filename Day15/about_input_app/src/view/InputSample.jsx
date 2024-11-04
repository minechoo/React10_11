import { useState } from 'react';

export const InputSample = () => {
	const [text, setText] = useState('');

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onReset = () => {
		setText('');
	};
	return (
		<>
			<input type='text' value={text} onChange={onChange}></input>
			<input type='button' onClick={onReset} value='초기화'></input>
			<div>
				<p>값: {text}</p>
			</div>
		</>
	);
};
