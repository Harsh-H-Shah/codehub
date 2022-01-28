import React from 'react';
import PanelCard from './PanelCard';
import BookLogo from '../static/panel-logo/Book.svg';
import CourseLogo from '../static/panel-logo/Courses.svg';
import QuizLogo from '../static/panel-logo/Quizzes.svg';
import QALogo from '../static/panel-logo/Q&A.svg';

const Panel = () => {
  return (
    <>
      <section className="flex flex-row items-center justify-center w-screen bg-secondary-brightred h-72 shadow-inner">
        <span className="flex flex-row w-2/3 justify-between">
          <PanelCard img={BookLogo} title={'Books'} />
          <PanelCard img={CourseLogo} title={'Courses'} />
          <PanelCard img={QuizLogo} title={'Quizzes'} />
          <PanelCard img={QALogo} title={'Q&A'} />
        </span>
      </section>
    </>
  );
};

export default Panel;
