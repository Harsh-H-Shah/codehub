import React from 'react'
import BookList from '../components/BookList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Quiz from '../static/CoverSvg/Quiz.svg';

const QuizPage = () => {
  return (
    <div className='flex flex-col justify-center items-center text-secondary-lightgray'>
      <Navbar/>
      <div className='flex flex-row place-content-between'>
        <div className='flex flex-col justify-center -mt-16'>
          <p className='text-7xl font-serif font-semibold mb-10'>Catch it and quiz it!</p>
          <p className='text-2xl font-sans font-normal ml-2'>Buckle up and unlock your memory.</p>
        </div>
      <img src={Quiz} alt="quiz" className='w-5/12 mt-16' />
      </div>
      <p className='text-6xl font-serif font-semibold'>Fun Quizzes</p>
      <BookList/>
      <Footer/>
    </div>
  )
}

export default QuizPage;
