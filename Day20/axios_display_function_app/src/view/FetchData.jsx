import { useEffect } from 'react';
import { useState } from 'react';
import { DisplayData } from './DisplayData';

export const FetchData = () => {
	let [datas, setDatas] = useState([]);

	//Fetch JSONData
	const searchData = () => {
		const url = 'zeushahn.github.io/Test/reactjs/device.json';
		axios
			.get(url)
			.then((reponse) => {
				let fetchData = reponse.data.myDeviceData;
				setDatas(fetchData);
			})
			.catch((error) => {
				alert('Error :' + error);
			});
	};

	useEffect(() => searchData());

	return (
		<>
			<DisplayData datas={datas}></DisplayData>
		</>
	);
};
