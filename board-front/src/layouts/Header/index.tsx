import React, { ChangeEvent, useRef, useState,KeyboardEvent, useEffect } from 'react'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom'
import { MAIN_PATH, SEARCH_PATH } from 'constant'

//          component : 헤더 컴포넌트         //
export default function Header() {

//          function : 네비게이트  함수         //

const navigate =useNavigate()

//          event handler: 로고 클릭 이벤트 처리 함수         //

const onLogoClickHandler = () => {
  navigate(MAIN_PATH());
}



//          component : 검색 버튼 컴포넌트          //
const SearchButton = () => {

  //          state : 검색 버튼 상태         //
  const [status,setStatus] = useState<boolean>(false);

  //          state : 검색어 상태         //
  const [word, setWord] = useState<string>('');

  //          state : 검색 버튼 요소 참조 상태          //
  const searchButtonRef = useRef<HTMLDivElement | null>(null);
  //          state : effect에서 사용할 searchWord  Param
  const {searchWord} = useParams();



  //        event handler : 검색 아이콘 클릭 이벤트 처리 함수         //
  const onSearchButtonClickHandler = () => {
    if(!status){
      setStatus(!status);
      return;
    } 
    navigate(SEARCH_PATH(word))
  }

  //          event handler : 검색어 키 이벤트 처리 함수          //
  const onSearchWordKeyDownHandler = (event : KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
    console.log(searchButtonRef);
    if(event.key !== 'Enter') return;
    if(!searchButtonRef.current) return;
    searchButtonRef.current.click();
  }

  //          event handler : 검색어 입력 변경 함수         //
  const onSearchWordChangeHandler = (event : ChangeEvent<HTMLInputElement>) =>{
    setWord(event.target.value);

  }

  //            effect : 검색어 변경 될 때마다 실행될 함수          //
  useEffect(() => {
    if(searchWord){
      setWord(searchWord);
      setStatus(true);
    }
  },[searchWord]);

  if(!status){
    return(
      <div className='icon-button' onClick={onSearchButtonClickHandler}>
        <div className='icon search-right-icon'></div>
      </div>
      )
  }
  return(
    <div className='header-search-input-box'>
      <input className='header-search-input' type='text' placeholder='검색어를 입력해 주세요.' value={word} onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler}/>
      <div className='icon-button' ref={searchButtonRef} onClick={onSearchButtonClickHandler}>
        <div className='icon search-right-icon'></div>
      </div>
    </div>
  )
}

  return (
    
    <div id='header'>
      <div className='header-container'>
        <div className='header-left-box' onClick={onLogoClickHandler}>
          <div className='icon-box'>
            <div className='icon logo-dark-icon'></div>
          </div>
          <div className='header-logo'>{'Hoons'}</div>
        </div>
        <div className='header-right-box'>
          <SearchButton/>
        </div>
      </div>
    </div>
  )
}
