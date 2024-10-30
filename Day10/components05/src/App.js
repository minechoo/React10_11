import './App.css';

function App() {
	return (
		<div className='App'>
			<h2>구구단 2단</h2>
			<Dan2 />
			<Dan21 />
			<Dan22 />
			<Dan23 />
		</div>
	);
}

const Dan23 = () => {
	const result = [];
	for (let i = 1; i <= 9; i += 2) {
		result.push(
			<div key={i}>
				2 X {i} = {2 * i}
				{i !== 9 ? (
					<>
						/ 2 X {i + 1} = {2 * (i + 1)}
					</>
				) : (
					''
				)}
			</div>
		);
	}
	return <>{Dan23()}</>;
};

const Dan22 = () => {
	const multipliedNumber = [...new Array(9)].map((_, i) => i + 1);
	return (
		<>
			{multipliedNumber.map((num) => (
				<div key={num}>
					2 X {num} = {2 * num}
				</div>
			))}
		</>
	);
};

const Dan21 = () => {
	const multipliedCharacter = '123456789';
	const multipliedNumber = [...multipliedCharacter];

	return (
		<>
			{multipliedNumber.map((num) => (
				<div key={num}>
					2 X {num} = {2 * num}
				</div>
			))}
		</>
	);
};

const Dan2 = () => {
	const dan = () => {
		const result = [];
		for (let i = 1; i <= 9; i++) {
			result.push(
				<div key={i}>
					2 X {i} = {2 * i}
				</div>
			);
		}
		return result;
	};
	return <>{dan()}</>;
};

export default App;
