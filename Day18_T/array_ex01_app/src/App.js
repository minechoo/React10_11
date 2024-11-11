import './App.css';
import {useState} from 'react'
import moment from 'moment'
import { SearchList } from './view/SearchList';
import { CreateList } from './view/CreateList';
import { useRef } from 'react';

function App() {

  const [lists, setLists] = useState([
    {
      id : 1,
      date : '2023-01-01',
      content : '우유 사오기'
    },
    {
      id : 2,
      date : '2023-05-01',
      content : '근로자의 날'
    },
    {
      id : 3,
      date : '2023-05-05',
      content : '어린이날 선물'
    }
  ])

  // Moment 사용 : npm install moment
  const currentDate = moment().format('YYYY-MM-DD')

  // 입력 구성
  const [inputs, setInputs] = useState({
    date : '',
    content : ''
  })

  const {date, content} = inputs

  const onChange = (event) => {
    const {name, value} = event.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const nextId = useRef(4)

  const onCreate = () => {
    // moment를 활용한 날짜 포맷 확인
    let result = moment(date, 'YYYY-MM-DD', true).isValid()
    if(result === false || content === ''){
      alert('입력 항목을 확인 하세요')
    }else{
      const list = {
        id : nextId.current,
        date : date,
        content : content
      }

      setLists(
        [...lists, list]
      )

      setInputs({
        date : '',
        content : ''
      })

      nextId.current += 1

    }
  }

  // ---------------------
  // 삭제
  const onRemove = (id) =>{
    for(let i=0;i<lists.length;i++){
      if(lists[i].id === id){
        alert(lists[i].date + '일의 ' + lists[i].content + "이라는 내용이 삭제 됩니다.")
      }
    }
    setLists(lists.filter(list => list.id !== id))
  }


  return (
    <div className="App">
      <h1>Todo List</h1>
      <h3>현재일자 : {currentDate}</h3>
      <br/><br/>
      <CreateList
        date = {date}
        content={content}
        onChange={onChange}
        onCreate={onCreate}
      />
      <SearchList lists={lists} onRemove={onRemove}/>
    </div>
  );
}

export default App;
