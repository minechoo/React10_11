import './App.css';
import { Hello } from './Hello.jsx';

function App() {
	return (
		<div className='App'>
			<br />
			<Hello />
			<br />
			<StyleText />
			<br />
			<CSSTest />
		</div>
	);
}

const StyleText = () => {
	const name = 'ReactJS';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: 24,
		padding: '2rem',
	};
	return <div style={style}>{name}</div>;
};

const CSSTest = () => {
	return <div className='gray-box'>Hello</div>;
};

export default App;
