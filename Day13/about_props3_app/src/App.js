import './App.css';

function App() {
	return (
		<div className='App'>
			<Hello name='React' color='blue'></Hello>
			<br></br>
			<Hello color='pink'></Hello>
			<br></br>
			<Hello></Hello>
			<br></br>
		</div>
	);
}

const Hello = (props) => {
	return <div style={{ color: props.color }}>안녕하세요! {props.name}</div>;
};

// Component의 props default value
Hello.defaultProps = {
	name: '이름없음',
	color: 'red',
};

export default App;
