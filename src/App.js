
import './App.css';
import Styled from './components/Styled'
import Main from './pages/Main';
import Detail from './pages/Detail';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import QuizList from './components/QuizList';

function App() {
  console.log(QuizList)
  const QuizLength = QuizList.length;
  console.log(QuizLength)
  const[userName, setUserName] = useState("");
  const[quizList, setQuizLsit] = useState(QuizList)

  const ChangeName = (data) =>{
    setUserName(data);
  }
  

  return (
    <>


    <Styled />

    <Routes>

      <Route path='/' element={<Main ChangeName={ChangeName} userName={userName} QuizLength={QuizLength} quizList={quizList}/>}/>
      <Route path='/quiz' element={<Detail quizList={quizList} userName={userName} />}/>
      
      

    </Routes>





    </>

    


  );
}

export default App;
