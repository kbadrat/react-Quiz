export default function QuestionAndUserAnswer({ questions, userAnswers }) {

    let style;

    function setStyle(correctAnswer, userAnswer) {

        if (userAnswer === "")
            style = "skipped";
        else if (correctAnswer === userAnswer)
            style = "correct";
        else
        style = "wrong";

        return style;
    }

    return (

        <ol>
            {questions.map((question, index) => (

                <li key={index}>
                    <h3>{index + 1}</h3>
                    <p className="question">
                        {question.text}
                    </p>
                    <p className={`user-answer ${setStyle(question.answers[0], userAnswers[index])}`}>
                        {style === "skipped" ? 'Skipped' : userAnswers[index]}
                    </p>
                </li>

            ))}
        </ol>

    );
}