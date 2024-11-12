import { useEffect } from 'react';
import { useState } from 'react';

export const Device = () => {
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

	//useEffect(() => searchData());

	//조회 데이터가 존재할 경우
	if (datas.length > 0) {
		return datas.map((data) => (
			<div>
				<p key={data.name}>
					name: {data.name}, RAM : {data.RAM}
					Home Button : {data.HomeButton === true ? '있음' : '없음'}
					Tonch ID: {data.TonchID}
					Face ID : {data.FaceID}
				</p>
			</div>
		));
	}

	return (
		<>
			<button onClick={searchData}>불러오기</button>
		</>
	);
};
