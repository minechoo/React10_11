import './App.css';

function App() {
	return (
		<div className='App'>
			{/* <GuguDan /> */}
			{/* <GuguDan2 /> */}
			<GuguDan3 />
		</div>
	);
}

const GuguDan = () => {
	const danCalc = () => {
		const result = [];
		for (let i = 2; i <= 9; i++) {
			result.push(<h1>{i}단</h1>);
			for (let j = 1; j <= 9; j++) {
				result.push(
					<div>
						{i} X {j} = {i * j}
					</div>
				);
			}
		}
		return result;
	};

	return <>{danCalc()}</>;
};

const GuguDan2 = () => {
	const danCharacter = '23456789';
	const danNumber = [...danCharacter];

	return (
		<>
			{danNumber.map(function (dan) {
				return (
					<div>
						<h1>{dan}단</h1>
						{calc2(dan)}
					</div>
				);
			})}
		</>
	);
};

const calc2 = (dan) => {
	const multipliedCharacter = '23456789';
	const multipliedNumber = [...multipliedCharacter];
	return (
		<>
			{multipliedNumber.map((num) => (
				<div>
					{dan} X {num} = {dan * num}
				</div>
			))}
		</>
	);
};

const GuguDan3 = () => {
	const danCharacter = '23456789';
	const multipliedCharacter = '123456789';
	const danNumber = [...danCharacter];
	const multipliedNumber = [...multipliedCharacter];

	// return (
	// 	<>
	// 		{danNumber.map(function (dan) {
	// 			return (
	// 				<>
	// 					<h1>{dan}단</h1>
	// 					{multipliedNumber.map((num) => (
	// 						<div>
	// 							{dan} X {num} = {dan * num}
	// 						</div>
	// 					))}
	// 				</>
	// 			);
	// 		})}
	// 	</>
	// );

	return (
		<>
			{danNumber.map((dan) => {
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
			})}
		</>
	);
};

export default App;
