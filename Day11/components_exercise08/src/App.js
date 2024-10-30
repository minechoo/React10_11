import './App.css';

function App() {
	const style = {
		marginLeft: 'auto',
		margonRight: 'auto',
	};
	return (
		<div className='App'>
			<Ani style={style} />
			<Cat></Cat>
			<Dog></Dog>
			<Wolf></Wolf>
			<AniMap />
		</div>
	);
}

const Cat = () => {
	return (
		<>
			<img src='./images/cat.png' alt='cat'></img>
		</>
	);
};
const Dog = () => {
	return (
		<>
			<img src='./images/dog.png' alt='dog'></img>
		</>
	);
};
const Wolf = () => {
	return (
		<>
			<img src='./images/wolf.png' alt='wolf'></img>
		</>
	);
};

const Ani = () => {
	const aniFace = ['cat', 'dog', 'wolf'];

	const redering = () => {
		const result = [];
		for (let i = 0; i < aniFace.length; i++) {
			result.push(<img src={'./images/' + aniFace[i] + '.png'} alt={aniFace[i]} />);
		}
		return result;
	};

	return <>{redering()}</>;
};

const AniMap = () => {
	const aniFace = ['cat', 'dog', 'wolf'];

	return (
		<>
			{aniFace.map((face) => (
				<img src={'./images/' + { face } + '.png'} alt={face}></img>
			))}
		</>
	);
};

export default App;
