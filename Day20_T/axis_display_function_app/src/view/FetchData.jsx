import { useEffect, useState } from "react"
import axios from 'axios'
import { DisplayData } from "./DisplayData"

export const FetchData = () => {
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

    useEffect(()=> searchData())

    return(
        <>
        <DisplayData datas={datas}></DisplayData>
        </>
    )
}