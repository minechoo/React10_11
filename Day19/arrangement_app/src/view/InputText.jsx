import { useState } from 'react';
export const InputText = () => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<br></br>
			<input type='text' value={value} onChange={onChange} />
			<br></br>
			<p>{value}</p>
		</>
	);
};
