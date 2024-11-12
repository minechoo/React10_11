import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './view/Home';
import { About } from './view/About';
import { Counter } from './view/Counter';
import { InputText } from './view/InputText';
import { MultipleText } from './view/MultipleText';
import { UserList } from './view/UserList';

function App() {
  return (
    <div className="App">
      <br /><br />
      <nav>
        <Link to='/'>Home</Link>{' '}|{' '} 
        <Link to='/about'>About</Link>{' '}|{' '} 
        <Link to='/counter'>Counter</Link>{' '}|{' '} 
        <Link to='/input'>InputText</Link>{' '}|{' '}
        <Link to='/multi'>MultipleText</Link> {' '}|{' '}
        <Link to='/list'>UserList</Link> 
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/counter' element={<Counter/>} />
        <Route path='/input' element={<InputText/>} />
        <Route path='/multi' element={<MultipleText/>} />
        <Route path='/list' element={<UserList/>} />
      </Routes>
    </div>
  );
}

export default App;
