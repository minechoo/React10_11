export const EditUser = ({ user, onChange, onUpdate, onCancel }) => {
	return (
		<>
			<input
				type='text'
				name='username'
				placeholder='수정할 이름'
				onChange={onChange}
				user={user.username}
			/>
			<input
				type='text'
				name='email'
				placeholder='수정할 이메일'
				onChange={onChange}
				user={user.email}
			/>
			<input type='button' onClick={onCancel} value='취소' />
		</>
	);
};
