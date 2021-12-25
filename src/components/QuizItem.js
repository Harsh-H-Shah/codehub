import React, { useContext } from 'react';
import { SelectQuizContext } from '../context/SelectQuizContext';

const QuizItem = ({ title, idx }) => {
  const { setSelectQuiz } = useContext(SelectQuizContext);
  return (
    <>
      <article className="flex flex-row place-content-between border-b border-secondary-lightgray w-full h-16 tb:h-32 border-opacity-10 items-center">
        <p className="ml-3 tb:ml-8 text-md tb:text-2xl hidden mb:block lp:hidden font-normal">
          {title.length < 20 ? `${title}` : `${title.slice(0, 20)}...`}
        </p>
        <p className="ml-3 tb:ml-8 text-md tb:text-2xl mb:hidden font-normal">
          {title.length < 20 ? `${title}` : `${title.slice(0, 12)}...`}
        </p>
        <p className="ml-3 tb:ml-8 text-md tb:text-2xl hidden lp:block font-normal">
          {title}
        </p>
        <button
          onClick={() => setSelectQuiz(idx + 1)}
          className="w-24 tb:w-52 text-sm tb:text-2xl h-8 tb:h-12 mr-3 tb:mr-8 bg-secondary-red items-center rounded-md font-medium shadow-md text-primary"
        >
          Solve now
        </button>
      </article>
    </>
  );
};

export default QuizItem;
