export const UserList = ({ users, onRemove }) => {
	//const users = props.users;
	return (
		<>
			{users.map((user) => (
				<User user={user} key={user.id} onRemove={onRemove}></User>
				// <List list={user} key={user.id}></List>
			))}
		</>
	);
};

const User = ({ user, onRemove }) => {
	const onClick = () => {
		onRemove(user.id);
	};

	return (
		<>
			<p>
				<b>{user.date}</b>
				<span>({user.work})</span>
				<input type='button' onClick={onClick} value='삭제'></input>
			</p>
		</>
	);
};
