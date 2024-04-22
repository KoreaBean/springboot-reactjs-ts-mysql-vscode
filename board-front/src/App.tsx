import BoardItem from "components/BoardItem";
import CommentItem from "components/CommentItem";
import FavoriteItem from "components/FavoriteItem";
import InputBox from "components/InputBox";
import Top3item from "components/Top3item";
import { latestBoardListMock, top3boardListMock,commentListMock,FavoriteListMock } from "mocks";
import 'App.css';
import { useState } from "react";


function App() {

const [value, setValue] = useState<string>('');

  return (
    <>

    <InputBox/>
    </>
  )
}

export default App;