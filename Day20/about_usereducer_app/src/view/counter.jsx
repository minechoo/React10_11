import { useState } from 'react';

export const Counter = () => {
	const [number, setNumber] = useState(0);

	const onPlus = () => {
		setNumber(number + 1);
	};

	const onMiuns = () => {
		setNumber(number - 1);
	};

	return (
		<>
			<h1>{number}</h1>
			<input type='button' value='plus One' onClick={onPlus} />
			<input type='button' value='minus One' onClick={onMiuns} />
		</>
	);
};
