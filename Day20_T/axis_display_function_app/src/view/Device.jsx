import { useState } from "react"
import axios from 'axios'

export const Device = () => {
    // 저장할 자료 위치
    let [datas, setDatas] = useState([])

    // Fetch JSON Data
    const searchData = () => {
        const url = "https://zeushahn.github.io/Test/reactjs/device.json"
        axios.get(url)
            .then((response) => {
                let fetchData = response.data.myDeviceData
                setDatas(fetchData)
            })
            .catch((error) => {
                alert("Error :" + error)
            })
    }
    // 조회 데이터가 존재할 경우
    if(datas.length > 0){
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


    return(
        <>
        <button onClick={searchData}>불러오기</button>
        </>
    )
}