import './App.css';

//문제2
//MovieItem 컴포넌트는 title, derector, releaseYear를 props로 받습니다
//MovieItem 컴포넌트는 movies 배열을 props로 받아 여러개의  MovieItem을 랜더링 합니다

function App() {
	const movies = [
		{ id: 1, title: '어벤져스', director: '위쇼쇼키형제', releaseYear: '2023' },
		{ id: 2, title: '들', director: '한나라', releaseYear: '2021' },
		{ id: 3, title: '하늘', director: '꽃', releaseYear: '2022' },
	];
	return (
		<div className='App'>
			<h1>영화목록</h1>
			<MovieList movies={movies}></MovieList>
		</div>
	);
}

const MovieList = ({ movies }) => {
	return (
		<>
			{/* movies배열을 map하여 여러개의 MovieItem을 랜더링 */}
			{movies.map((movie) => (
				<MovieItem
					key={movie.id}
					title={movie.title}
					director={movie.director}
					releaseYear={movie.releaseYear}
				></MovieItem>
			))}
		</>
	);
};

const MovieItem = (props) => {
	return (
		<>
			{/* props를 이용하여 영화정보는 여기에 */}
			<h3>{props.title}</h3>
			<p>감독 : {props.director}</p>
			<p>개봉년도 : {props.releaseYear}.</p>
		</>
	);
};

export default App;
