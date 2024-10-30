import './App.css';

function App() {
	return (
		<div className='App'>
			<br />
			<Hello name='ReactJS'></Hello>
			<br />
			<Hello name='리액트'></Hello>
		</div>
	);
}

// const Hello = (props) => {
// 	return <>안녕하세요! {props.name}</>;
// };

// const Hello = (props) =>{
//   const name = props.name
//   return(
//     <>
//       안녕하세요! {name}
//     </>
//   )
// }

const Hello = ({ name }) => {
	return <>안녕하세요! {name}</>;
};

export default App;
