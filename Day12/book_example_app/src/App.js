import './App.css';
import { Library } from './view/Library';

function App() {
	// const obj = [
	// 	{
	// 		react: '리액트',
	// 		page: 100,
	// 	},
	// 	{
	// 		react: 'React',
	// 		page: 200,
	// 	},
	// 	{
	// 		react: 'React Native',
	// 		page: 300,
	// 	},
	// ];
	return (
		<div className='App'>
			{/* <Book react={obj.react} page={obj.page}></Book> */}

			<Library></Library>
		</div>
	);
}

export default App;
