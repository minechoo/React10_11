import './App.css';

function App() {
  return (
    <>
      <Menu />
      <Area />
      <Site />
    </>
  )
}

const Menu = () => {
  const datas = ['Menu 1','Menu 2','Menu 3','Menu 4','Menu 5','Menu 6']
  return(
      <>
        <p className="p-color">Menu List</p>
        <ul>
          {datas.map(data => <li>{data}</li>)}
        </ul>
      </>
  )
}

const Area = () => {
  return(
    <>
      <p className="p-color">지역 List</p>
      <ol>
      <li>서울</li>
      <li>경기도</li>
      <li>부산</li>
      <li>강원도</li>
      <li>충청도</li>
      <li>전라도</li>
      <li>경상도</li>
      <li>제주도</li>
      </ol>    
    </>
  )
}

const Site = () => {
  const sites = [
    {
      name : "Google",
      url : "https://www.google.com"
    },
    {
      name : "Yahoo",
      url : "https://www.yahoo.com"
    },
    {
      name : "Naver",
      url : "https://www.naver.com"
    },
    {
      name : "Daum",
      url : "https://www.daum.net"
    }
  ]
  return(
      <>
        <p className="p-color">Site List</p>
        <ol>
          {sites.map(site => <li><a href={site.url}>{site.name}</a></li>)}
        </ol>
      </>
  )
}

export default App;
