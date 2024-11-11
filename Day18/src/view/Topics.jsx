import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
export const Topics = () => {
	return (
		<>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to='/topics/1'>Html</Link>
				</li>
				<li>
					<Link to='/topics/2'>Javascript</Link>
				</li>
				<li>
					<Link to='/topics/3'>ReactJS</Link>
				</li>
			</ul>

			<Routes>
				<Route path='/1' element={'HTML is ...'} />
				<Route path='/2' element={'Javascript is ...'} />
				<Route path='/3' element={'ReactJS is ...'} />
			</Routes>
		</>
	);
};
