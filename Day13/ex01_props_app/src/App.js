import './App.css';

// 문제:
// BookCard 컴포넌트로 title, author, year를 props로 전달
// App 컴포넌트에서 BookCard를 사용하여 3권의 서로 다른 책 정보를 랜더링

function App() {
	return (
		<div className='App'>
			<h1>추천도서</h1>
			{/* BookCard 컴포넌트를 3번 사용하여 다른 책 정보를 표시 */}
			<BookCard title='React 마스터하기' author='길라멘트' year={2023} />
			<BookCard title='Javascript 완벽가이드' author='이자벨' year='2022' />
			<BookCard title='HTML & CSS 기초' author='박웹디자인' year='2021' />
		</div>
	);
}

const BookCard = (props) => {
	return (
		<>
			<h2>{props.title}</h2>
			<p>저자 : {props.author}</p>
			<p>출판년도 : {props.year}</p>
		</>
	);
};
export default App;
