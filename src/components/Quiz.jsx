import { useState, useEffect, useRef, useContext } from "react";
import AnswerButton from "./AnswerButton.jsx";
import Progress from "./Progress.jsx";
import { ProgressContext } from "./ProgressContext";

export default function Quiz({ QUESTIONS, setShowStatistics, userAnswers, setUserAnswers, answers}) {

    const { setTimeAndType, TIMER_ANSWER} = useContext(ProgressContext);
    const activeQuestionIndex = userAnswers.length;

    const [styleButton, setStyleButton] = useState({
        style: "",
        id: undefined
    });

    const timerRef = useRef(null);

    useEffect(() => {
        if (styleButton.style === "" && styleButton.id === undefined) {
            timerRef.current = setTimeout(() => {
                setUserAnswers((prevAnswers) => [...prevAnswers, ""]);

                if (activeQuestionIndex + 1 === QUESTIONS.length) {
                    setShowStatistics(true);
                }

                setTimeAndType({
                    type: "",
                    remainingTime: TIMER_ANSWER,
                    time: TIMER_ANSWER
                });
            }, TIMER_ANSWER);

            return () => {
                if (timerRef.current) clearTimeout(timerRef.current);
            };
        }
    }, [userAnswers])





    return (

        <div id="quiz">
            <div id="question">
                <Progress />
                <h2 >{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {answers.map((answer, index) => (
                        <AnswerButton
                            key={index}
                            answer={answer}
                            setUserAnswers={setUserAnswers}
                            activeQuestionIndex={activeQuestionIndex}
                            QUESTIONS={QUESTIONS}
                            setShowStatistics={setShowStatistics}
                            styleButton={styleButton}
                            setStyleButton={setStyleButton}
                            id={index}
                            timer={timerRef.current}
                        />
                    ))}

                </ul>
            </div>
        </div>

    );
}