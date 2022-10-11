import { Fragment } from 'react';

import AnswerButton from '../answer-button/answer-button.component';
import Question from '../question/question.component';


const QuestionForm = ({ questionObj, page, answersArray, answersHandleClick }) => {
    

    console.log(answersArray)

    const {question, posibleAnswers} = questionObj;

    return(
        <Fragment>
            <Question>{question}</Question>
            <div className='answers-container'>
                { posibleAnswers.map((elem, index) => <AnswerButton buttonId={index} name='answer' currentAnswer={answersArray[page]} onClickAnswer={answersHandleClick} key={index}>{elem}</AnswerButton>) }
            </div>
        </Fragment>
    )
}

export default QuestionForm;