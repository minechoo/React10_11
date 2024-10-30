import './App.css';
import { Add } from './Add';

function App() {
	return (
		<>
			<br />
			<h2>숫자 2와 3의 연산결과</h2>
			{/* Add라는 components를 Add componentd에서 생성하여 결과값을 출력하세요 */}
			<Add />
		</>
	);
}

export default App;
