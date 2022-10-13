import React, { useContext } from 'react';
import DropNav from '../components/DropNav';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QuizList from '../components/QuizList';
import { SelectQuizContext } from '../context/SelectQuizContext';
import Quiz from '../static/CoverSvg/Quiz.svg';
import PlayQuizPage from './PlayQuizPage';
import { motion } from 'framer-motion';

const QuizPage = () => {
  const { selectQuiz } = useContext(SelectQuizContext);
  return (
    <section className="flex flex-col overflow-x-hidden items-center text-secondary-lightgray w-screen">
      <DropNav />
      <Navbar />
      {selectQuiz ? (
        <PlayQuizPage selectQuiz={selectQuiz} />
      ) : (
        <section className="flex flex-col w-screen">
          <article className="flex-row place-content-between hidden tb:flex">
            <span className="flex flex-col ml-4 tb:ml-10 lp:ml-14 dp:ml-16 justify-center">
              <p className="font-serif font-semibold mb-2 lp:mb-6 dp:mb-10 text-3xl tb:text-4xl lp:text-5xl dp:text-6xl mt-8 tb:mt-0 ">
                Catch it and quiz it!
              </p>
              <p className="text-lg tb:text-xl lp:text-2xl dp:text-2xl font-sans text-secondary-darkgray mt-3 tb:mt-6">
                Buckle up and unlock your memory.
              </p>
            </span>
            <motion.img
              initial={{ x: '200%' }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
              src={Quiz}
              alt="quiz"
              className="tb:mt-8 lp:mt-14 lp:ml-32 tb:w-1/2 lp:w-5/12 dp:w-2/5 dp:mr-10"
            />
          </article>
          <p className="text-center font-serif font-semibold mt-4 tb:mt-0 text-3xl tb:text-4xl lp:text-5xl dp:text-6xl">
            Fun Quizzes
          </p>
          <QuizList />
          <Footer />
        </section>
      )}
    </section>
  );
};

export default QuizPage;
