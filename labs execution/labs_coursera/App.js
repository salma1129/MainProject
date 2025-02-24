import React from "react";
import AnswerButton from "./AnswerButton";
import "./styles.css";

function App() {
  function checkAnswer(userAnswer, correctAnswer){
    if (userAnswer === correctAnswer){
      alert("Correct!");
    }else{
      alert("Wrong! Try again. ");
    }
}
return(
  <div>
    <h1>Task: Mukti-Quiz Game Using Props</h1>

    {/*Question1*/}
    <div>
      <h2>1. what is 5 + 3?</h2>
      <AnswerButton answer={6} correctAnswer={8} checkAnswer={checkAnswer}/>
      <AnswerButton answer={7} correctAnswer={8} checkAnswer={checkAnswer}/>
      <AnswerButton answer={8} correctAnswer={8} checkAnswer={checkAnswer}/>
    </div>
    <div>
      <h2>1. what is 5 x 3?</h2>
      <AnswerButton answer={6} correctAnswer={15} checkAnswer={checkAnswer}/>
      <AnswerButton answer={10} correctAnswer={15} checkAnswer={checkAnswer}/>
      <AnswerButton answer={15} correctAnswer={15} checkAnswer={checkAnswer}/>
    </div>
  </div>
)
}
export default App;

