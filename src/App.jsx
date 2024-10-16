import { useState } from 'react';

import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Statistics from './components/Statistics.jsx';
import QUESTIONS from './questions.js';
import ProgressProvider from './components/ProgressContext.jsx';



function App() {

    const [userAnswers, setUserAnswers] = useState([]);
    const [showStatistics, setShowStatistics] = useState(false);

    function shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    }

    let answers;

    if (userAnswers.length < QUESTIONS.length) {
        answers = shuffleArray([...QUESTIONS[userAnswers.length].answers]);
    } 

    return (
        <ProgressProvider>
            <Header />
            {!showStatistics ?
                <>
                    <Quiz
                        QUESTIONS={QUESTIONS}
                        answers={answers}
                        setShowStatistics={setShowStatistics}
                        userAnswers={userAnswers}
                        setUserAnswers={setUserAnswers}
                    />
                </>
                :
                <Statistics
                    questions={QUESTIONS}
                    userAnswers={userAnswers}
                />
            }
        </ProgressProvider>
    )
}

export default App;
