import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PanelCard from '../components/PanelCard';
import CoursesCard from '../components/CoursesCard';

import Wave from '../static/CoverSvg/WaveSVG.svg';

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center select-none">
      <Navbar />
      <img src={Wave} draggable='false' alt="Wave" className="z-0" />
      <div className="w-11/12 flex -mt-96">
        <div className="flex flex-col justify-self-start z-10">
          <p className="font-serif text-6xl text-primary font-bold -mt-16">
            We innovate learning <br /> processes
          </p>
          <p className="font-sans text-xl text-primary mt-6 tracking-widest">
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
      <div className='flex flex-row w-screen bg-secondary-brightred h-64 place-content-around justify-center items-center shadow-inner'>
        <PanelCard/>
        <PanelCard/>
        <PanelCard/>
        <PanelCard/>
      </div>
      <div className="mt-40">
        <PanelCard />
      </div>
      <CoursesCard />
      <Footer />
    </div>
  );
};

export default LandingPage;
