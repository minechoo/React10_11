import './App.css';

function App() {
	return (
		<div className='App'>
			<Hello name='ReactJS' color='red' fontSize='32'></Hello>
			<Hello name='Javascript' color='blue' fontSize='54'></Hello>
		</div>
	);
}

const Hello = ({ color, name, fontSize }) => {
	return <div style={{ color: color, fontSize: fontSize }}>안녕하세요! {name}</div>;
};

// const Hello = (props) => {
// 	return (
// 		<div style={{ color: props.color, fontSize: Number(props.fontSize) }}>
// 			안녕하세요! {props.name}
// 		</div>
// 	);
// };

// const Hello = ({ color, name}) => {
// 	return <div style={{ color }}>안녕하세요! {name}</div>;
// };

// const Hello = (props) => {
// 	return <div style={{ color: props.color }}>안녕하세요! {props.name}</div>;
// };

export default App;
