import './App.css';

import { useState } from 'react';

import QuestionForm from './components/question-form/question-form.component';
import Navigation from './components/navigation/navigation.component';

const App = () => {
  const [page, setPage] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [finished, setFinished] = useState(false);

  const answersHandleClick = (e) => {
      answersArray[page] = parseInt(e.target.id.replace('answer', ''));
      setAnswersArray([...answersArray]);
  }

  const prevPageHandler = () => {
    if(page>0){
      setPage(page-1);
    }
  }

  const nextPageHandler = () => {
    if(page<questionsObj.length-1){
      setPage(page+1)
    }
  }

  const resultsHandler = () => {
    setFinished(true);
  }

  const calcResults = () => {
    let result = 0;

    for(let i=0; i<questionsObj.length; i++){
      if(questionsObj[i].rightAnswer === answersArray[i]){
        result++;
      }
    }

    return result;
  }

  const questionsObj = [
    {
      question: 'Question 1',
      posibleAnswers: ['answer 1.1', 'answer 1.2', 'answer 1.3'],
      rightAnswer: 0
    },
    {
      question: 'Question 2',
      posibleAnswers: ['answer 2.1', 'answer 2.2', 'answer 2.3'],
      rightAnswer: 0
    },
    {
      question: 'Question 3',
      posibleAnswers: ['answer 3.1', 'answer 3.2'],
      rightAnswer: 0
    },
    {
      question: 'Question 4',
      posibleAnswers: ['answer 4.1', 'answer 4.2', 'answer 4.3', 'answer 4.4'],
      rightAnswer: 0
    },
    {
      question: 'Question 5',
      posibleAnswers: ['answer 5.1', 'answer 5.2', 'answer 5.3', 'answer 5.4'],
      rightAnswer: 0
    },
    {
      question: 'Question 6',
      posibleAnswers: ['answer 6.1', 'answer 6.2', 'answer 6.3', 'answer 6.4'],
      rightAnswer: 0
    }
  ]

  if(!finished){
    return (
      <div className='container'>
        <QuestionForm questionObj={questionsObj[page]} page={page} answersHandleClick={answersHandleClick} answersArray={answersArray}/>
        <Navigation prevPageHandler={prevPageHandler} resultsHandler={resultsHandler} nextPageHandler={nextPageHandler} currentPage={page+1} pages={questionsObj.length}/>
      </div>
    );
  }else{
    return (
      <div className='results-container'>
        <h2 className='results'>Your result is: </h2>
        <h2 className='results'>{calcResults()}/{questionsObj.length}({Math.floor(calcResults()/questionsObj.length * 100)}%)</h2>
      </div>
    );
  }
}

export default App;
