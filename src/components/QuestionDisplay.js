import React, { useState } from 'react';

const QuestionDisplay = ({ setQuizState, score, setScore, list }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');

  const nextQuestion = () => {
    if (list[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setOptionChosen('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (list[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setQuizState('result');
  };
  return (
    <div>
      <h1>{list[currentQuestion].title}</h1>
      <div className="questions">
        <button
          onClick={() => {
            setOptionChosen('optionA');
          }}
        >
          {list[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen('optionB');
          }}
        >
          {list[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen('optionC');
          }}
        >
          {list[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen('optionD');
          }}
        >
          {list[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == list.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button
          disabled={!optionChosen}
          onClick={nextQuestion}
          id="nextQuestion"
        >
          Next Question
        </button>
      )}
    </div>
  );
};

export default QuestionDisplay;
