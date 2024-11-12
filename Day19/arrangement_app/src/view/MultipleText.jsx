import { useState } from 'react';

export const MultipleText = () => {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
	});

	const { name, email, phone, address } = inputs;

	const onChange = (event) => {
		const { value, name } = event.target;
		// const value =  event.target.value
		// const name =  event.target.name
		// const id =  event.target.id
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	return (
		<>
			<br></br>
			<label htmlFor=''>Name</label>
			<input type='text' placeholder='유비' value={name} onChange={onChange} name='name'></input>
			<br></br>

			<label htmlFor=''>E-mail</label>
			<input
				type='email'
				placeholder='yb@naver.com'
				value={email}
				onChange={onChange}
				name='email'
			></input>
			<br></br>

			<label htmlFor=''>PhoneNumber</label>
			<input
				type='text'
				placeholder='010-111-2222'
				value={phone}
				onChange={onChange}
				name='phone'
			></input>
			<br></br>

			<label htmlFor=''>Address</label>
			<input
				type='text'
				placeholder='서울시 강남구 역삼동'
				value={address}
				onChange={onChange}
				name='address'
			></input>
			<br></br>

			<p>Name : {name}</p>
			<p>E-mail : {email}</p>
			<p>Phone : {phone}</p>
			<p>Address : {address}</p>
		</>
	);
};
