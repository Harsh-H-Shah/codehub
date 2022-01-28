import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DropNav from '../components/DropNav';
import CoursesCard from '../components/CoursesCard';

import Wave from '../static/CoverSvg/WaveSVG.svg';
import Notes from '../static/logos/Noteslogo.svg';
import Projects from '../static/logos/Projectslogo.svg';
import Support from '../static/logos/Communitylogo.svg';

import { LandingCourses } from '../resources/LandingCourses';
import { UserContext } from '../context/UserContext';
import Panel from '../components/Panel';

const LandingPage = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="w-screen flex flex-col justify-center items-center select-none overflow-x-hidden bg-primary">
      <Navbar />
      <DropNav />
      <section
        className="w-screen h-screen bg-no-repeat items-center flex"
        style={{ backgroundImage: `url(${Wave})` }}
      >
        <article className="flex flex-col ml-10">
          <p className="font-serif text-6xl text-primary font-bold">
            We innovate learning <br /> processes
          </p>
          <p className="font-sans text-xl text-primary font-extralight mt-6 tracking-widest">
            Get personalised courses <br /> specially curated for you.
          </p>
          {user ? (
            <button className="w-60 h-14 mt-12 bg-secondary-lightred items-center tracking-wide shadow-md text-primary font-sans text-2xl font-medium">
              <Link to="/courses">Start learning</Link>
            </button>
          ) : (
            <button className="w-60 h-14 mt-12 bg-secondary-lightred items-center tracking-wide shadow-md text-primary font-sans text-2xl font-medium">
              <Link to="/signup">Start learning</Link>
            </button>
          )}
        </article>
      </section>
      <p className="mt-40 font-serif text-5xl font-semibold mb-16 text-secondary-lightgray">
        Learn new skills with top educators
      </p>
      <Panel />
      <section className="flex flex-row place-content-evenly w-screen mt-16">
        <article className="flex flex-col text-secondary-lightgray font-sans w-64">
          <img src={Notes} alt="Notes" />
          <p className="font-medium text-4xl text-center mt-3">Notes</p>
          <p className="font-medium text-xl text-center mt-10">
            Awesome books to make you a better developer, leader, and founder.
          </p>
        </article>
        <article className="flex flex-col text-secondary-lightgray font-sans w-72 items-center">
          <img src={Projects} alt="Projects" className="w-64" />
          <p className="font-medium text-4xl text-center mt-8">Projects</p>
          <p className="font-medium text-xl text-center mt-8">
            Learn by doing real world projects and quizzes that lead to real
            skills mastery.
          </p>
        </article>
        <article className="flex flex-col text-secondary-lightgray font-sans w-80 items-center">
          <img src={Support} alt="Community support" className="w-64" />
          <p className="font-medium text-4xl text-center mt-10">
            Community
            <br />
            Support
          </p>
          <p className="font-medium text-xl text-center mt-4">
            Peer to peer learning technical discussions and many more.
          </p>
        </article>
      </section>
      <p className="mt-16 font-serif text-5xl font-semibold mb-16 text-secondary-lightgray">
        Courses
      </p>
      <section className="flex flex-row place-content-evenly w-screen mb-16">
        {LandingCourses.map((data, index) => {
          return (
            <CoursesCard
              index={index}
              title={data.title}
              logo={data.logo}
              description={data.description}
              curator={data.curator}
              key={index}
            />
          );
        })}
      </section>
      <Footer />
    </section>
  );
};

export default LandingPage;
