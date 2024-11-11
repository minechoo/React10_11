import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './view/Contact';
import { Home } from './view/Home';
import { Topics } from './view/Topics';
import { Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<h1>Hello React Router Dom</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/topics'>Topics</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/topics' element={<Topics />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
