import { useReducer } from 'react';

const reducer = (state, action) => {
	if (action.type === 'Increment') {
		return state + 1;
	} else if (action.type === 'Decrement') {
		return state - 1;
	}
};

export const Counter = () => {
	const [number, dispath] = useReducer(reducer, 0);

	const onPlus = () => {
		dispath({ type: 'Increment' });
	};

	const onMiuns = () => {
		dispath({ type: 'Decrement' });
	};

	return (
		<>
			<h1>{number}</h1>
			<input type='button' value='plus One' onClick={onPlus} />
			<input type='button' value='minus One' onClick={onMiuns} />
		</>
	);
};
