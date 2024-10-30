export const DeviceList = () => {
	const result = [];
	const devices = [
		{
			name: 'iPad Pro',
			ram: 6,
			homebutton: false,
			touchid: 'No',
			faceid: 'Yes',
		},
		{
			name: 'iPhone Xs',
			ram: 4,
			homebutton: false,
			touchid: 'No',
			faceid: 'Yes',
		},
		{
			name: 'iPhone 6',
			ram: 1,
			homebutton: true,
			touchid: 'Yes',
			faceid: 'No',
		},
	];

	// for (let i = 0; i < devices.length; i++) {
	// 	result.push(
	// 		<div>
	// 			Name : {devices[i].name}
	// 			<br></br>
	// 			Ram : {devices[i].ram}
	// 			<br />
	// 			Home Button : {devices[i].homebutton === true ? '있음' : '없음'}
	// 			<br />
	// 			Touch ID : {devices[i].touchid}
	// 			<br />
	// 			Face ID : {devices[i].faceid}
	// 		</div>
	// 	);
	// }
	for (let i = 0; i < devices.length; i++) {
		result.push(
			<>
				<Device device={devices[i]} key={devices[i].name}></Device>
			</>
		);
	}

	return <>{result}</>;
};

const Device = ({ device }) => {
	return (
		<>
			Name : {device.name}
			<br></br>
			Ram : {device.ram}
			<br />
			Home Button : {device.homebutton === true ? '있음' : '없음'}
			<br />
			Touch ID : {device.touchid}
			<br />
			Face ID : {device.faceid}
		</>
	);
};
