import logo from './logo.svg';
import './App.css';

function App() {
	const name = 'ReactJS';
	const score = 89;
	const style = {
		backgroundColor: 'grey',
		fontSize: '20px',
		fontWeight: 'bold',
	};
	return (
		<div className='App'>
			{name === 'ReactJS' ? (
				<div style={style}>
					<h1>ReactJS</h1>
				</div>
			) : (
				<h1>Who are you?</h1>
			)}
			<hr></hr>
			<p>입력된 점수는 {score}</p>
			<p>
				계산돤 학점은
				{score >= 90 ? (
					<h2>A학점</h2>
				) : score >= 80 ? (
					'B학점'
				) : score >= 70 ? (
					'C학점'
				) : score >= 80 ? (
					'D학점'
				) : (
					'F학점'
				)}
				입니다.
			</p>
		</div>
	);
}

export default App;
