export const TodoUser = ({ date, work, onChange, onCreate }) => {
	return (
		<>
			<input type='text' id='' name='date' placeholder='날짜' onChange={onChange} value={date} />

			<input type='text' id='' name='work' placeholder='work' onChange={onChange} value={work} />

			<input type='button' onClick={onCreate} value='등록'></input>
		</>
	);
};
