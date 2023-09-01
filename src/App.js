
import './App.css';
import Styled from './components/Styled'
import Main from './pages/Main';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuizList from './components/QuizList';

function App() {
  console.log(QuizList)
  
  const[userName, setUserName] = useState("주지스");
  const[quizList, setQuizLsit] = useState(QuizList);
  const quiz = [...QuizList];
  const [selected, setSelected] = useState();
  const [quizCnt, setQuizCnt] = useState(QuizList.length);
  const [typeTxt, setTypeTxt] = useState("전체")



  const ChangeEevent = (data) =>{
    const classValue = data.target.className;
    const dataValue = data.target.value;
    switch(true){
      //includes("값") 해당문자열이 있는지 쳌
      case classValue.includes("name"):
        setUserName(dataValue)
      break;
      case classValue.includes("random"):
      
      (dataValue === "1" ? setQuizLsit([...QuizList].sort(()=>{
        return Math.random()-0.5}).slice(0, selected)
        )
        : setQuizLsit([...QuizList].slice(0, selected))
      )
      break;
      case classValue.includes("cnt"):
      setSelected(dataValue);
      break;
      case classValue.includes("type"):
      (dataValue === "전체"
      
      ?
      setQuizLsit([...QuizList].slice(0, selected))
      :
      setQuizLsit([...QuizList].filter((e)=>{
        return e.type === dataValue
      }).slice(0, selected))      
      )
      setTypeTxt(dataValue);
     
      break;
      default:
      console.log("데이터가 없습니다.");
    }

  }



  useEffect(()=>{
    setQuizLsit([...QuizList].slice(0, selected));
    setQuizCnt([...QuizList].filter((e)=>{
      return typeTxt === "전체" ? true : e.type === typeTxt;
    }).length);
   
  },[typeTxt, selected])
  // 제일늦게 실행됨/재랜더링될때마다 실행됨 ,[] 써야 딱한번 실행됨 안에 값을쓰면 값이 변할때만 재실행됨
   console.log(quizList)


  return (
    <>


    <Styled />

    <Routes>

      <Route path='/' element={<Main userName={userName} quizList={quizList} quizCnt={quizCnt} ChangeEevent={ChangeEevent} quiz={quiz} selected={selected}/>}/>
      <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
      
      

    </Routes>





    </>

    


  );
}

export default App;
