import { useRef, useState } from 'react';
import { TodoUser } from './view/TodoUser';
import { UserList } from './view/UserList';
import './App.css';
import moment from 'moment';

function App() {
	const [users, setUsers] = useState([
		{
			id: 1,
			date: '2024-01-01',
			work: '우유 사오기',
		},
		{
			id: 2,
			date: '2024-05-01',
			work: '근로자의 날',
		},
		{
			id: 3,
			date: '2024-05-05',
			work: '어린이날 선물',
		},
	]);

	const [inputs, setInputs] = useState({
		date: '',
		work: '',
	});

	const { date, work } = inputs;

	const onChange = (event) => {
		const { name, value } = event.target;
		setInputs({
			...inputs,
			[name]: value, //name 변수에 value 값으로 넣어줌
		});
	};

	const nextId = useRef(4);

	const onCreate = () => {
		//moment 를 활용한 날짜 포맷 확인
		let result = moment(date, 'YYYY-MM-DD', true).isValid();
		if (result === false || work === '') {
			alert('입력항목을 확인하세요');
		} else {
			const user = {
				id: nextId.current,
				date: date,
				work: work,
			};

			setUsers([...users, user]);

			//입력 필드 초기화
			setInputs({
				date: '',
				work: '',
			});

			//다음번에 추가로 등록될 id 준비
			nextId.current += 1;
		}
	};

	const currentDate = moment().format('YYYY-MM-DD');

	//삭제구성 : click하 id가 같지 않은 것만으로 새로운 배열을 생성
	const onRemove = (id) => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === id) {
				alert(users[i].date + '님이 삭제됩니다');
			}
		}
		setUsers(users.filter((user) => user.id !== id));
	};

	return (
		<div className='App'>
			<h1>Todo List</h1>
			<h3>현재일자 : {currentDate}</h3>
			<TodoUser date={date} work={work} onChange={onChange} onCreate={onCreate}></TodoUser>
			<UserList users={users} onRemove={onRemove}></UserList>
		</div>
	);
}

export default App;
