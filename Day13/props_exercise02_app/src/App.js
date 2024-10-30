import './App.css';

function App() {
	return (
		<div className='App'>
			<Calc num1='2' num2='3' />
		</div>
	);
}

const Calc = ({ num1, num2 }) => {
	return (
		<>
			<h1>
				{num1}와{num2}의 사칙연산
			</h1>
			<Add num1={num1} num2={num2}></Add>
			<br></br>
			<Sub num1={num1} num2={num2}></Sub>
			<br></br>
			<Mul num1={num1} num2={num2}></Mul>
			<br></br>
			<Div num1={num1} num2={num2}></Div>
			<br></br>
		</>
	);
};

const Add = (props) => {
	const num1 = Number(props.num1);
	const num2 = Number(props.num2);
	return (
		<>
			덧셈 : {num1} + {num2} = {num1 + num2}
		</>
	);
};

const Sub = (props) => {
	const num1 = Number(props.num1);
	const num2 = Number(props.num2);
	return (
		<>
			뺄셈 : {num1} - {num2} = {num1 - num2}
		</>
	);
};

const Mul = (props) => {
	const num1 = Number(props.num1);
	const num2 = Number(props.num2);
	return (
		<>
			곱셈 : {num1} * {num2} = {num1 * num2}
		</>
	);
};

const Div = (props) => {
	const num1 = Number(props.num1);
	const num2 = Number(props.num2);
	return (
		<>
			나눗셈 : {num1} / {num2} = {num1 / num2}
		</>
	);
};

export default App;
