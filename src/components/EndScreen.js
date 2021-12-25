import React, { useContext } from 'react';
import { SelectQuizContext } from '../context/SelectQuizContext';

const EndScreen = ({ score, setScore, setQuizState, list }) => {
  const { setSelectQuiz } = useContext(SelectQuizContext);
  return (
    <section className="flex flex-col items-center justify-center mt-10 tb:mt-40 lp:mt-52 dp:mt-60 text-secondary-darkgray font-sans">
      <h1 className="font-serif font-semibold mb-2 lp:mb-6 dp:mb-10 text-3xl tb:text-4xl lp:text-5xl dp:text-6xl tb:mt-0">
        Congratulations!
      </h1>
      <h1 className="text-xl tb:text-3xl mb-5">
        You got {score} out of {list.length}
      </h1>
      <span className="flex flex-row items-center justify-center">
        <button
          className="w-20 tb:w-40 text-sm tb:text-2xl h-8 tb:h-12 mr-3 tb:mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
          onClick={() => {
            setScore(0);
            setQuizState('display');
          }}
        >
          Restart
        </button>
        <button
          className="w-32 tb:w-56 text-sm tb:text-2xl h-8 tb:h-12 mr-3 tb:mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
          onClick={() => setSelectQuiz(0)}
        >
          Back to quizzes
        </button>
      </span>
    </section>
  );
};

export default EndScreen;
