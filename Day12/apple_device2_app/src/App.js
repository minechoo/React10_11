import './App.css';

const App = () => {
	// const result = [];
	const devices = [
		{ id: 1, device: 'iPad Pro', prod: 'iPad' },
		{ id: 2, device: 'iPhone 11', prod: 'iPhone' },
		{ id: 3, device: 'Apple Watch', prod: 'watch' },
		{ id: 4, device: 'Air Pods', prod: 'Phone' },
		{ id: 5, device: 'MacBook Pro', prod: 'Mac' },
		{ id: 6, device: 'iMac pro', prod: 'Mac' },
	];

	// for문
	// for (let i = 0; i < devices.length; i++) {
	// 	result.push(
	// 		<Device key={devices[i].id} myDevice={devices[i].device} myProd={devices[i].prod}></Device>
	// 	);
	// }

	// return <>{result}</>;

	//map
	return (
		<>
			{devices.map((device) => (
				<Device key={device.id} myDevice={device.device} myProd={device.prod}></Device>
			))}
		</>
	);
};

const Device = (props) => {
	const device = props.myDevice;
	const product = props.myProd;
	return (
		<>
			{
				<div key={props.id}>
					Device = {device} in {product}
				</div>
			}
		</>
	);
};

//--Type 1 -----//
// function App() {
// 	return (
// 		<div className='App'>
// 			<p>
// 				<b>나의 apple 장비들</b>
// 			</p>
// 			<p>
// 				<Device myDevice='iPad Pro' myProd='iPad' />
// 			</p>
// 			<p>
// 				<Device myDevice='iPhone 11' myProd='iPhone' />
// 			</p>
// 			<p>
// 				<Device myDevice='Apple Watch' myProd='watch' />
// 			</p>
// 			<p>
// 				<Device myDevice='Air Pods' myProd='ear Phone' />
// 			</p>
// 			<p>
// 				<Device myDevice='MacBook Pro' myProd='Mac' />
// 			</p>
// 			<p>
// 				<Device myDevice='iMac pro' myProd='Mac' />
// 			</p>
// 		</div>
// 	);
// }

//step 1
// const Device = (props) => {
// 	const device = props.myDevice;
// 	const product = props.myProd;
// 	return (
// 		<>
// 			<div>
// 				Device = {device} in {product}{' '}
// 			</div>
// 		</>
// 	);
// };

//step2
// const Device = ({ myDevice, myProd }) => {
// 	return (
// 		<>
// 			<div>
// 				Device = {myDevice} in {myProd}
// 			</div>
// 		</>
// 	);
// };

export default App;
