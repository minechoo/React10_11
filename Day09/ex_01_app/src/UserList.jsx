const users = [
	{ id: 1, name: '유비', age: 25 },
	{ id: 2, name: '관우', age: 30 },
	{ id: 3, name: '장비', age: 28 },
	{ id: 4, name: '조자룡', age: 22 },
];

export const UserList = () => {
	//users 배열에서 나이가 25세 이상인 사용자만 필터링하여 새로운 배열을 만드세요
	const filterUsers = users.filter((user) => user.age >= 25);

	return (
		<>
			{/* 필터힝된 사용자 목록을 여기에 랜더링 하세요 */}
			<ul>
				{
					// filterUsers.map(({ id, name, age }) => (
					// 	<li key={id}>
					// 		{name} ({age})세
					// 	</li>
					// ))

					filterUsers.map((user) => (
						<li key={user.id}>
							{user.name} ({user.age})세
						</li>
					))
				}
			</ul>
		</>
	);
};
