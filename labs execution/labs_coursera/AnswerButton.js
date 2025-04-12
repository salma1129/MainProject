import React from "react";

function AnswerButton(props){
    return (
        <button onClick={() => props.checkAnswer(props.answer, props.correctAnswer)}>
            {props.answer}
        </button>

    );
}

export default AnswerButton;