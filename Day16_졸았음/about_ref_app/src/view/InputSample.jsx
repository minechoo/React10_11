import { useRef, useState } from 'react';

export const InputSample = () => {
	const [inputs, setInputs] = useState({
		name: '',
		nickName: '',
	});

	const { name, nickName } = inputs;
	const nameInput = useRef();

	const onReset = () => {
		setInputs({
			name: '',
			nickName: '',
		});
		nameInput.current.focus();
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
				name='name'
				id=''
				placeholder='name'
				onChange={onChange}
				value={name}
				ref={nameInput}
			/>
			<input
				type='text'
				name='nickName'
				id=''
				placeholder='nickName'
				onChange={onChange}
				value={nickName}
			/>
			<input type='button' value='초기화' onClick={onReset}></input>
			{/* <input type="button" value='출력'></input> */}
			<div>
				<p>값 :</p>
				{name} / {nickName}
			</div>
		</>
	);
};
