export const Book = (props) => {
	return (
		<>
			{/* <p>이 책의 이름은 {props.react}를 배웁시다! 입니다</p>
			<p>이 책은 총 {props.page} 페이지 입니다</p> */}

			<p>
				이 책의 이름은 <b>{props.name}</b>
			</p>
			<p>이 책의 총{props.page} 페이지 입니다</p>
			<hr></hr>
		</>
	);
};
