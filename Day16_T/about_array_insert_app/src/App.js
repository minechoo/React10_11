import './App.css';
import {useState} from 'react'
import { UserList } from './view/UserList';

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


  return (
    <div className="App">
      <h1>Read & Create</h1>
      {/* 전체 List를 보여주기 위한 Component */}
      <UserList users = {users}></UserList>
    </div>
  );
}

export default App;
