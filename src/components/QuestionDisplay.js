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
    <section className="flex flex-col bg-primary rounded-lg justify-center w-11/12 p-4 tb:p-8 lp:p-10 dp:p-14 tb:w-3/4 mt-4 tb:mt-12 lp:mt-16 z-20 shadow-pn mb-8 tb:mb-32">
      <h1 className="text-lg tb:text-xl lp:text-3xl font-medium mb-3">
        {list[currentQuestion].title}
      </h1>
      <section className="flex flex-col text-left w-full ">
        <button
          className="self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red mb:focus:bg-secondary-red"
          onClick={() => {
            setOptionChosen('optionA');
          }}
        >
          {list[currentQuestion].optionA}
        </button>
        <button
          className="self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red mb:focus:bg-secondary-red"
          onClick={() => {
            setOptionChosen('optionB');
          }}
        >
          {list[currentQuestion].optionB}
        </button>
        <button
          className="self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red mb:focus:bg-secondary-red"
          onClick={() => {
            setOptionChosen('optionC');
          }}
        >
          {list[currentQuestion].optionC}
        </button>
        <button
          className="self-start hover:bg-secondary-lightred hover:bg-opacity-25 rounded-md py-2 px-6 focus:bg-secondary-red mb:focus:bg-secondary-red"
          onClick={() => {
            setOptionChosen('optionD');
          }}
        >
          {list[currentQuestion].optionD}
        </button>
      </section>

      {currentQuestion == list.length - 1 ? (
        <button
          className="w-32 tb:w-40 text-sm mt-2 tb:mt-4 lp:mt-8 dp:mt-10 tb:text-xl h-8 tb:h-10 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
          onClick={finishQuiz}
        >
          Finish Quiz
        </button>
      ) : (
        <button
          className="w-32 tb:w-40 text-sm mt-2 tb:mt-4 lp:mt-8 dp:mt-10 tb:text-xl h-8 tb:h-10 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
          disabled={!optionChosen}
          onClick={nextQuestion}
          id="nextQuestion"
        >
          Next Question
        </button>
      )}
    </section>
  );
};

export default QuestionDisplay;
