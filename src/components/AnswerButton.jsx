import { useContext } from "react";
import { ProgressContext } from "./ProgressContext";


export default function AnswerButton({ id, answer, setUserAnswers, activeQuestionIndex, QUESTIONS, setShowStatistics, styleButton, setStyleButton, timer }) {

    const { setTimeAndType, TIMER_ANSWERED, TIMER_ANSWER, TIMER_RESULT } = useContext(ProgressContext);

    const isSelected = styleButton.style === "" ? false : true;

    const buttonStyle = id === styleButton.id ? styleButton.style : undefined;

    function handleSelectAnswer() {

        if (styleButton.style === "" && styleButton.id === undefined) {
            clearTimeout(timer);
        }

        setTimeAndType({
            type: "answered",
            remainingTime: TIMER_ANSWERED,
            time: TIMER_ANSWERED
        });

        setStyleButton({
            style: "selected",
            id: id
        });

        setTimeout(() => {

            setStyleButton({
                style: QUESTIONS[activeQuestionIndex].answers[0] === answer ? "correct" : "wrong",
                id: id
            });

            setTimeAndType({
                type: "",
                remainingTime: TIMER_RESULT,
                time: TIMER_RESULT
            })

            setTimeout(() => {
                setStyleButton({
                    style: "",
                    id: undefined
                });

                setUserAnswers((prevAnswers) =>
                    [...prevAnswers, answer]);


                if (activeQuestionIndex + 1 === QUESTIONS.length) {
                    setShowStatistics(true);
                }

                setTimeAndType({
                    type: "",
                    remainingTime: TIMER_ANSWER,
                    time: TIMER_ANSWER
                });

            }, TIMER_RESULT);

        }, TIMER_ANSWERED)
    }

    return (
        <div className="answer">

            <button

                className={buttonStyle}
                onClick={handleSelectAnswer}
                disabled={isSelected}
            >{answer}
            </button>
        </div>

    );
}