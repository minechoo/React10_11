import './App.css';
import { Counter } from './view/counter';
import { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 1:
			return state + 1;

		case 10:
			return state + 10;

		case 100:
			return state + 100;

		case 1000:
			return state + 1000;

		case 10000:
			return state + 10000;
		default:
			return state;
	}
};
function App() {
	const [number, dispath] = useReducer(reducer, 0);

	const add1 = () => {
		dispath({ type: 1 });
	};

	const add10 = () => {
		dispath({ type: 10 });
	};

	const add100 = () => {
		dispath({ type: 100 });
	};

	const add1000 = () => {
		dispath({ type: 1000 });
	};

	const add10000 = () => {
		dispath({ type: 10000 });
	};
	return (
		<div className='App'>
			<Counter></Counter>
			<h1>{number}</h1>
			<input type='button' value='add 1' onClick={add1} />
			<input type='button' value='add 10' onClick={add10} />
			<input type='button' value='add 100' onClick={add100} />
			<input type='button' value='add 1000' onClick={add1000} />
			<input type='button' value='add 10000' onClick={add10000} />
		</div>
	);
}

export default App;
