import React from 'react';
import { Quizzes } from '../resources/Questions';
import QuizItem from './QuizItem';

const QuizList = () => {
  const options = Quizzes;
  return (
    <section className="flex flex-col justify-center items-center w-screen">
      <article className="flex flex-col bg-primary rounded-lg justify-center w-11/12 tb:w-3/4 mt-4 tb:mt-12 lp:mt-16 z-20 shadow-pn mb-8 tb:mb-32">
        {options.map((option, idx) => {
          return <QuizItem title={option.title} idx={idx} key={idx} />;
        })}
      </article>
    </section>
  );
};

export default QuizList;
