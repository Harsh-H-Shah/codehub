import React, { useContext } from 'react';
import { SelectQuizContext } from '../context/SelectQuizContext';

const EndScreen = ({ score, setScore, setQuizState, list }) => {
  const { setSelectQuiz } = useContext(SelectQuizContext);
  return (
    <div className="flex flex-col items-center justify-center mt-60 text-secondary-darkgray font-sans">
      <h1 className="font-serif text-6xl mb-5 font-medium">Congratulations!</h1>
      <h1 className="text-3xl mb-5">
        You got {score} out of {list.length}
      </h1>
      <div className="flex flex-row">
        <button
          className="text-2xl px-4 py-2 font-medium w-max h-max bg-secondary-red items-center rounded-md shadow-md text-primary"
          onClick={() => {
            setScore(0);
            setQuizState('display');
          }}
        >
          Restart
        </button>
        <button
          className="text-2xl px-4 py-2 ml-7 font-medium w-max h-max bg-secondary-red items-center rounded-md shadow-md text-primary"
          onClick={() => setSelectQuiz(0)}
        >
          Back to quizzes
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
