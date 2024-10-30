import './App.css';

function App() {
	return (
		<>
			<Menu />
			<Area />
			<Site />
		</>
	);
}

const Menu = () => {
	const datas = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6'];
	return (
		<>
			<p className='p-color'>Menu List</p>
			<ul>
				{datas.map((data) => (
					<li>{data}</li>
				))}
			</ul>
		</>
	);
};

const Area = () => {
	const areas = ['서울', '경기도', '부산', '강원도', '충청도', '전라도', '경상도', '제주도'];
	return (
		<>
			<p className='p-color'>지역</p>
			<ol>
				{areas.map((area) => (
					<li>{area}</li>
				))}
			</ol>
		</>
	);
};

const Site = () => {
	const sites = [
		{
			name: 'google',
			url: 'https://www.google.com',
		},
		{
			name: 'yahoo',
			url: 'https://www.yahoo.com',
		},
		{
			name: 'google',
			url: 'https://www.google.com',
		},
		{
			name: 'naver',
			url: 'https://www.naver.com',
		},
	];
	return (
		<>
			<p className='p-color'>Site List</p>
			<ol>
				{sites.map((site) => (
					<li>
						<a href={site.url}>{site.name}</a>
					</li>
				))}
				{/* <li>
					<a href='https://www.google.com'>google</a>
				</li>
				<li>
					<a href='https://www.yahoo.com'>yahoo</a>
				</li>
				<li>
					<a href='https://www.naver.com'>naver</a>
				</li>
				<li>
					<a href='https://www.daum.com'>daum</a>
				</li> */}
			</ol>
		</>
	);
};

export default App;
