import './question.style.css';


const Question = ({children}) => {
    return (
        <div className='question-container'>
            <h2 className='question-text'>{children}</h2>
        </div>
    )
}

export default Question;