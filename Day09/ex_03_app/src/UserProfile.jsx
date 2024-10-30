const user = {
	name: '홍길동',
	age: 30,
	email: 'hong@exanple.com',
	address: {
		city: '서울',
		district: '강남구',
	},
};

export const UseProfile = () => {
	const {
		name,
		age,
		email,
		address: { city, district },
	} = user;
	return (
		<>
			<h2>{name}</h2>
			<p>나이: {age}</p>
			<p>이메일: {email}</p>
			<p>
				주소: {city} {district}
			</p>
		</>
	);
};
