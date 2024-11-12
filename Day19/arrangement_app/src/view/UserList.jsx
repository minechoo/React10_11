export const UserList = () => {
	const users = [
		{
			name: '유비',
			email: 'yb@namer.com',
		},
		{
			name: '관우',
			email: 'gw@namer.com',
		},
		{
			name: '장비',
			email: 'jb@namer.com',
		},
	];

	const User = ({ userData }) => {
		return (
			<>
				<tr>
					<td>{userData.name}</td>
					<td>{userData.email}</td>
				</tr>
			</>
		);
	};
	return (
		<>
			<br></br>
			<table>
				<thead>
					<tr>
						<th>이름</th>
						<th>메일주소</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<User userData={user}></User>
					))}
				</tbody>
			</table>
		</>
	);
};
