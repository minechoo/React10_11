export const Add = () => {
	//const Num = [2, 3];
	const firstNum = 2;
	const secondNum = 3;
	// const AddNum = (a, b) => {
	// 	return a + b;
	// };

	// return <>{AddNum.map((num) => num + num)}</>;
	return (
		<>
			{/*AddNum(Num[0], Num[1]) */}
			{firstNum} {secondNum} {firstNum + secondNum}
		</>
	);
};
