import './App.css';

function App() {

  // JSON
  const users = [
    {
      name : 'James1',
      age : 25
    },
    {
      name : 'Cathy',
      age : 20
    },
    {
      name : 'Kenny',
      age : 30
    },
  ]

  return (
    <div className="App">
      <br></br>
      {/* Display all user's name */}
      <ul>
        {
          users.map(user=> <li>{user.name}</li>)
        }
      </ul>
      <br/>
      {/* 나이가 25세 이상인 사용자만 출력 */}
      <ul>
        {
          users
            .filter(user => user.age >= 25 & user.name.length >= 6)
            .map(user=> <li>{user.name}</li>)
        }
      </ul>
      <br/>
        {
          users
            .map(user =><div>
                          사용자 이름은 {user.name} 이고 나이는 {user.age} 입니다.
                        </div>
            )
        }
    </div>
  );
}

export default App;
