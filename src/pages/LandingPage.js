import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PanelCard from '../components/PanelCard';
import CoursesCard from '../components/CoursesCard';

import Wave from '../static/CoverSvg/WaveSVG.svg';
import Notes from '../static/logos/Noteslogo.svg';
import Projects from '../static/logos/Projectslogo.svg';
import Support from '../static/logos/Communitylogo.svg';

const LandingPage = ({ user, setUser }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center select-none overflow-x-hidden bg-primary">
      <Navbar user={user} setUser={setUser} />
      <img src={Wave} draggable="false" alt="Wave" className="z-0 w-screen" />
      <div className="w-11/12 flex -mt-96">
        <div className="w-screen flex flex-col justify-self-start z-10">
          <p className="font-serif text-6xl text-primary font-bold -mt-16">
            We innovate learning <br /> processes
          </p>
          <p className="font-sans text-xl text-primary font-extralight mt-6 tracking-widest">
            Get personalised courses <br /> specially curated for you.
          </p>
          <button className="w-60 h-14 mt-12 bg-secondary-lightred items-center tracking-wide shadow-md text-primary font-sans text-2xl font-medium">
            Start learning
          </button>
        </div>
      </div>
      <p className="mt-40 font-serif text-5xl font-semibold mb-16 text-secondary-lightgray">
        Learn new skills with top educators
      </p>
      <div className="flex flex-row w-screen bg-secondary-brightred h-72 items-center justify-center shadow-inner">
        <div className="flex flex-row place-content-between w-2/3">
          <PanelCard />
          <PanelCard />
          <PanelCard />
          <PanelCard />
        </div>
      </div>
      <div className="flex flex-row place-content-evenly w-screen mt-16">
        <div className="flex flex-col text-secondary-lightgray font-sans w-64">
          <img src={Notes} alt="Notes" />
          <p className="font-medium text-4xl text-center mt-3">Notes</p>
          <p className="font-medium text-xl text-center mt-10">
            Awesome books to make you a better developer, leader, and founder.
          </p>
        </div>
        <div className="flex flex-col text-secondary-lightgray font-sans w-72 items-center">
          <img src={Projects} alt="Projects" className="w-64" />
          <p className="font-medium text-4xl text-center mt-8">Projects</p>
          <p className="font-medium text-xl text-center mt-8">
            Learn by doing real world projects and quizzes that lead to real
            skills mastery.
          </p>
        </div>
        <div className="flex flex-col text-secondary-lightgray font-sans w-80 items-center">
          <img src={Support} alt="Community support" className="w-64" />
          <p className="font-medium text-4xl text-center mt-10">
            Community
            <br />
            Support
          </p>
          <p className="font-medium text-xl text-center mt-4">
            Peer to peer learning technical discussions and many more.
          </p>
        </div>
      </div>
      <p className="mt-16 font-serif text-5xl font-semibold mb-16 text-secondary-lightgray">
        Courses
      </p>
      <div className="flex flex-row place-content-evenly w-screen mb-16">
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
        <CoursesCard />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
