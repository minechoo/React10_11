import { useState } from 'react';

export const InputSample = () => {
	const [text, setText] = useState('');
	const [enter, setEnter] = useState('');

	const exp = () => {
		setEnter(text);
	};

	const onChange = (event) => {
		setText(event.target.value);
	};

	const onReset = () => {
		setText('');
		setEnter('');
	};
	return (
		<>
			<input type='text' value={text} onChange={onChange}></input>
			<input type='button' onClick={onReset} value='초기화'></input>
			<input type='button' onClick={exp} value='출력'></input>
			<div>
				<p>값: {enter}</p>
			</div>
		</>
	);
};
