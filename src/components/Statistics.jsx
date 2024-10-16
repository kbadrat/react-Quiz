import quizCompletedPng from '../assets/quiz-complete.png';
import QuestionAndUserAnswer from './QuestionAndUserAnswer.jsx'

export default function Statistics({ questions, userAnswers }) {

    let answeredCorrectly = 0;
    let answeredIncorrectly = 0;
    let skipped = 0;

    questions.map((question, index) => {
        if (question.answers[0] === userAnswers[index])
            answeredCorrectly += 1;
        else if (userAnswers[index] === "")
            skipped += 1;
        else answeredIncorrectly += 1;
    });

    const percentageCorrect = (answeredCorrectly / questions.length * 100).toFixed(0); 
    const percentageIncorrect = (answeredIncorrectly / questions.length * 100).toFixed(0);  
    const percentageSkipped = 100 - percentageCorrect - percentageIncorrect;

    return (
        <div id='summary'>
            <img src={quizCompletedPng} alt="Quiz Completed Logo" />
            <h2>QUIZ COMPLETED!</h2>

            <div id='summary-stats'>
                <div>
                    <p className='number'>{percentageSkipped}%</p>
                    <p className='text'>skipped</p>
                </div>

                <div>
                    <p className='number'>{percentageCorrect}%</p>
                    <p className='text'>ANSWERED CORRECTLY</p>
                </div>

                <div>
                    <p className='number'>{percentageIncorrect}%</p>
                    <p className='text'>ANSWERED INCORRECTLY</p>
                </div>
            </div>

            <QuestionAndUserAnswer
                questions={questions}
                userAnswers={userAnswers} />

        </div>
    );
}