export const DisplayData = (props) => {
	const datas = props.data;

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
};
