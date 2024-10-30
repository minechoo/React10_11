import './App.css';
import Device from './Device';

const App = () => {
	const datas = ['iPad Pro', 'iPone 11', 'Apple Watch', 'Air Pods', 'Macbook pro', 'iMac pro'];
	return (
		<>
			{datas.map((data) => (
				<Device apple={data}></Device>
			))}
		</>
	);
};

// function App() {
// 	return (
// 		<div className='App'>
// 			<p>
// 				<b>나의 Apple 장비들</b>
// 			</p>
// 			<p>
// 				<Device myDevice='iPad Pro'></Device>
// 			</p>
// 			<p>
// 				<Device myDevice='iPone 11'></Device>
// 			</p>
// 			<p>
// 				<Device myDevice='Apple Watch'></Device>
// 			</p>
// 			<p>
// 				<Device myDevice='Air Pods'></Device>
// 			</p>
// 			<p>
// 				<Device myDevice='Macbook pro'></Device>
// 			</p>
// 			<p>
// 				<Device myDevice='iMac pro'></Device>
// 			</p>
// 		</div>
// 	);
// }

// const Device = (props) => {
// 	return <>Device = {props.myDevice}</>;
// };

// const Device = ({ myDevice }) => {
// 	return <>Device = {myDevice}</>;
// };

// const Device = ({ myDevice }) => {
// 	const device = myDevice;
// 	return <>Device = {device}</>;
// };

// const Device = (data) => {
// 	const device = data.myDevice;
// 	return <>Device = {device}</>;
// };

export default App;
