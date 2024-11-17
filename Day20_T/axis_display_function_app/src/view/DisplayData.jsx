export const DisplayData = (props) => {
    const datas = props.datas
    return(
        datas.map(data => (
            <div>
                <p key={data.name}>
                    Name : {data.name} ,
                    RAM : {data.RAM},
                    Home Button : {data.HomeButton === true ? "있음" : "없음"} ,
                    Touch ID : {data.TouchID} ,
                    Face ID : {data.FaceID}
                </p>
            </div>
        ))
    )

}