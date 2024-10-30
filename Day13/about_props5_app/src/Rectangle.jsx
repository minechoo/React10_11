export const Rectangle = (props) => {
	const style = {
		border: '2px solid black',
		padding: '15px',
	};
	return (
		<div style={style}>
			<br />
			{props.children}
			<br />
		</div>
	);
};

// export const Rectangle = (children) => {
// 	const style = {
// 		border: '2px solid black',
// 		padding: '15px',
// 	};
// 	return (
// 		<div style={style}>
// 			<br />
// 			{children}
// 			<br />
// 		</div>
// 	);
// };
