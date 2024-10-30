import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Addition</h1>
			<Addition firstNum='2' secondNum='3'></Addition>
			<Addition firstNum='3' secondNum='4'></Addition>
			<Addition firstNum='5' secondNum='6'></Addition>
			<hr />
			{/* view Folder 하단에 Calc.jsx를 작성하여 덧셈, 뺄셈, 곱셈, 나눗셈을 수행하는 Component를
			하나로 작성하기 */}
			<h1>Calc Function</h1>
			<Calc method='add' firstNum='2' secondNum='3'></Calc>
			<Calc method='sub' firstNum='2' secondNum='3'></Calc>
			<Calc method='mul' firstNum='2' secondNum='3'></Calc>
			<Calc method='div' firstNum='2' secondNum='3'></Calc>
		</div>
	);
}

const Addition = (props) => {
	const firstNum = Number(props.firstNum);
	const secondNum = parseInt(props.secondNum);
	return (
		<>
			<p>
				{firstNum} + {secondNum} = {firstNum + secondNum}
			</p>
		</>
	);
};

const Calc = (props) => {
	const method = props.method;
	const firstNum = Number(props.firstNum);
	const secondNum = Number(props.secondNum);

	let result = '';
	if (method === 'add') {
		result = `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
	} else if (method === 'sub') {
		result = `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
	} else if (method === 'mul') {
		result = `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
	} else if (method === 'div') {
		result = `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
	}

	return (
		<>
			<div>{result}</div>
		</>
	);
};

export default App;
