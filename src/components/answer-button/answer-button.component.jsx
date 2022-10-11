import './answer-button.style.css';

const AnswerButton = ({ buttonId, name, currentAnswer, onClickAnswer, children }) => {
    return(
        <div className={currentAnswer === buttonId ? 'answer-button-container answer-button-container-active' : 'answer-button-container'}>
            <input type="radio" id={`answer${buttonId}`} name={name} className='answer-button-input' onClick={onClickAnswer}/>
            <label for={`answer${buttonId}`} className='answer-button-label'>{children}</label>
        </div>
    )
}

export default AnswerButton;