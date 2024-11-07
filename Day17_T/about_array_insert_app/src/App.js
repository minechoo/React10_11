import './App.css';
import {useRef, useState} from 'react'
import { UserList } from './view/UserList';
import { CreateUser } from './view/CreateUser';

function App() {
  // Data 만들기
  const [users, setUsers] = useState([
    {
      id : 1,
      username : '유비',
      email : 'yb@naver.com'
    },
    {
      id : 2,
      username : '관우',
      email : 'kw@naver.com'
    },
    {
      id : 3,
      username : '장비',
      email : 'jb@naver.com'
    }
  ])

  // 입력 구성
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  })

  const {username, email} = inputs

  const onChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  // 현재 3명 등록 되어 있으므로 추가시 4번으로 등록
  // 다시 렌더링이 되어도 값을 유지하기 위해 useRef()를 사용 
  const nextId = useRef(4)

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username : username,
      email : email
    }

    // 새로운 user 등록
    setUsers(
      [...users, user]
    )

    // 입력 필드 초기화
    setInputs(
      {
        username: '',
        email : ''
      }
    )

    // 다음번에 추가로 등록될 id 준비
    nextId.current += 1

  } // onCreate

  // 삭제 구성 : click한 id가 같지 않은 것만으로 새로운 배열을 생성한다. 
  const onRemove = (id) => {
    for(let i=0; i<users.length;i++){
      if(users[i].id === id){
        alert(users[i].username + "님이 삭제 됩니다.")
      }
    }

    setUsers(users.filter(user => user.id !== id))
  }




  return (
    <div className="App">
      <h1>Read & Create</h1>
      {/* 전체 List를 보여주기 위한 Component */}
      <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
      />
      <UserList users = {users} onRemove={onRemove}></UserList>
    </div>
  );
}

export default App;
