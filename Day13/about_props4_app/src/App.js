import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<User>안녕하세요</User>
			<br />
			<User>반갑습니다</User>
		</div>
	);
}

const User = (props) => {
	return <>{props.children}</>;
};

export default App;
