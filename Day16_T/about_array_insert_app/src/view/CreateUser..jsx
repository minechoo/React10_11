export const CreateUser = ({ username, email, onChange, onCreate }) => {
	return (
		<>
			<input
				type='text'
				id=''
				name='username'
				placeholder='계정명'
				onChange={onChange}
				value={username}
			/>

			<input type='text' id='' name='email' placeholder='Email' onChange={onChange} value={email} />

			<input type='button' onClick={onCreate} value='등록'></input>
		</>
	);
};