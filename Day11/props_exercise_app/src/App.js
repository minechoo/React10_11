import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<GuguDan dan='2'></GuguDan>
			<GuguDan dan='3'></GuguDan>
		</div>
	);
}

const GuguDan = (props) => {
	const dan = Number(props.dan);
	const multipliedCharacter = '123456789';
	const multipliedNumber = [...multipliedCharacter];
	return (
		<>
			<h1>{dan}단</h1>
			{multipliedNumber.map((num) => (
				<div>
					{dan} X {num} = {dan * num}
				</div>
			))}
		</>
	);
};

export default App;
