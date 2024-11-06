import { useState } from 'react';

export const SignUp = () => {
	const [name, setName] = useState('');
	const [gender, setGender] = useState('남자');

	const handleChangeName = (event) => {
		setName(event.target.value);
	};

	const handleChangeGender = (event) => {
		setGender(event.target.value);
	};

	const handleSubmit = (event) => {
		alert(`이름 : ${name}, 성별: ${gender}`);
		event.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>
					<input type='text' name='' id='' value={name} onChange={handleChangeName} />
				</label>
				<br></br>
				<label htmlFor=''>
					성별 ㅣ
					<select name='' id='' value={gender} onChange={handleChangeGender}>
						<option value='남자'>남자</option>
						<option value='여자'>여자</option>
					</select>
				</label>
				<button type='submit'>제출</button>
			</form>
		</>
	);
};
