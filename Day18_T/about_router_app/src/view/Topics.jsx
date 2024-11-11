import { Link, Route, Routes } from "react-router-dom"

export const Topics = () => {
    return (
        <>
            <h2>Topics</h2>
            <ul>
                <li><Link to='/topics/1'>HTML</Link></li>
                <li><Link to="/topics/2">JavaScript</Link></li>
                <li><Link to="/topics/3">ReactJS</Link></li>
            </ul>

            <Routes>
                <Route path='/1' element={'HTML is ...'} />
                <Route path='/2' element={'JavaScript is ...'} />
                <Route path='/3' element={'ReactJS is ...'} />
            </Routes>

        </>
    )
}