import BoardItem from "components/BoardItem";
import Top3item from "components/Top3item";
import { latestBoardListMock, top3boardListMock } from "mocks";


function App() {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center',gap:'24px'}}>
      {top3boardListMock.map(top3ListItem => <Top3item top3ListItem={top3ListItem}/>)}
    </div>
    </>
  )
}

export default App;