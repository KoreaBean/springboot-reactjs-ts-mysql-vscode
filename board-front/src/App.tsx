import BoardItem from "components/BoardItem";
import CommentItem from "components/CommentItem";
import FavoriteItem from "components/FavoriteItem";
import InputBox from "components/InputBox";
import Top3item from "components/Top3item";
import { latestBoardListMock, top3boardListMock,commentListMock,FavoriteListMock } from "mocks";
import 'App.css';


function App() {
  return (
    <>
    {/* <div style={{padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px'}}>
      {commentListMock.map
      (commentList => <CommentItem commentList={commentList}/>)}
    </div> */}
    <InputBox/>
    </>
  )
}

export default App;