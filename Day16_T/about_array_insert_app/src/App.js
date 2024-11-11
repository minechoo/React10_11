import './App.css';
import { useRef, useState } from 'react';
import { UserList } from './view/UserList';
import { CreateUser } from './view/CreateUser.';
import { EditUser } from './view/EditUser';

function App() {
	// Data 만들기
	const [users, setUsers] = useState([
		{
			id: 1,
			username: '유비',
			email: 'yb@naver.com',
		},
		{
			id: 2,
			username: '관우',
			email: 'kw@naver.com',
		},
		{
			id: 3,
			username: '장비',
			email: 'jb@naver.com',
		},
	]);

	//입력 구성
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});

	const { username, email } = inputs;

	const onChange = (event) => {
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value, //value 값으로 바꿔줌
		});
	};
	//현재 3명 등록되어있으므로 추가시 4번으로 등록
	//다시 랜더링이 되어도 값을 유지하기 위해 useRef()를 사용
	const nextId = useRef(4);

	const onCreate = () => {
		const user = {
			id: nextId.current,
			username: username,
			email: email,
		};
		//새로운 유저 등록
		setUsers([...users, user]);
		//입력 필드 초기화
		setInputs({
			username: '',
			email: '',
		});

		//다음번에 추가로 등록될 id 준비
		nextId.current += 1;
	}; //onCreate

	const onRemove = (id) => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === id) {
				alert(users[i].username + '님이 삭제 됩니다.');
			}
		}

		setUsers(users.filter((user) => user.id !== id));
	};

	//수정
	const [editingId, setEditingId] = useState(null);
	const [editInputs, setEditInputs] = useState({
		username: '',
		email: '',
	});

	//수정시작 함수
	const onEdit = (id) => {
		setEditingId(id);
		const user = users.find((user) => user.id === id);
		setEditInputs({
			username: user.username,
			email: user.email,
		});
	};

	//수정취소 함수
	const onCancleEdit = () => {
		setEditingId(null);
		setEditInputs({
			username: '',
			email: '',
		});
	};

	//수정입력
	const onEditChange = (event) => {
		const { name, value } = event.target;
		setEditInputs({
			...editInputs,
			[name]: value,
		});
	};

	//수정완료
	const onUpdate = (id) => {
		setUsers(users.map((user) => (user.id === id ? { ...user, ...editInputs } : user)));
		setEditingId(null);
		setEditInputs({
			username: '',
			email: '',
		});
	};

	return (
		<div className='App'>
			<h1>Read & Create</h1>
			{/* 전체 List를 보여주기 위한 Component */}
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			></CreateUser>
			<UserList users={users} onRemove={onRemove} onEdit={onEdit} editingId={editingId}></UserList>
			{editingId !== null && (
				<EditUser
					user={editInputs}
					onChange={onEditChange}
					onUpdate={() => onUpdate(editingId)}
					onCancleEdit={onCancleEdit}
				></EditUser>
			)}
		</div>
	);
}

export default App;
