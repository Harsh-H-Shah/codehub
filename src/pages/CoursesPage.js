import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Laptoplogo from '../static/CoverSvg/Laptop.svg';
import CoursesCard from '../components/CoursesCard';
import db from '../resources/Db';
import DropNav from '../components/DropNav';
import { motion } from 'framer-motion';

const CoursesPage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center bg-primary">
      <DropNav />
      <Navbar />
      <div className="flex flex-row place-content-between mt-16 -mb-12">
        <div className=" flex place-items-center w-max text-secondary-darkgray font-serif text-6xl justify-start ml-10 pb-32 z-0">
          Never put a full stop to learning and growth
        </div>
        <motion.img
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="-mr-12"
          src={Laptoplogo}
          alt="laptoplogo"
        />
      </div>
      <div className="m-10 flex flex-col place-self-start">
        <div className="text-secondary-darkgray font-serif text-4xl pb-14 py-7">
          Frontend Development
        </div>
        <div className="flex flex-row">
          {db.slice(0, 4).map((data, index) => {
            return (
              <div key={index}>
                <CoursesCard
                  index={index}
                  title={data.title}
                  logo={data.logo}
                  description={data.description}
                  curator={data.curator}
                />
              </div>
            );
          })}
        </div>
        <div className="text-secondary-darkgray font-serif text-4xl py-14">
          Backend Development
        </div>
        <div className="flex flex-row">
          {db.slice(4, 6).map((data, index) => {
            return (
              <div key={index}>
                <CoursesCard
                  index={index + 4}
                  title={data.title}
                  logo={data.logo}
                  description={data.description}
                  curator={data.curator}
                />
              </div>
            );
          })}
        </div>
        <div className="text-secondary-darkgray font-serif text-4xl py-14">
          Database Management
        </div>
        <div className="flex flex-row">
          {db.slice(6, 8).map((data, index) => {
            return (
              <div key={index}>
                <CoursesCard
                  index={index + 6}
                  title={data.title}
                  logo={data.logo}
                  description={data.description}
                  curator={data.curator}
                />
              </div>
            );
          })}
        </div>
        <div className="text-secondary-darkgray font-serif text-4xl py-14">
          Git & Github
        </div>
        <div className="flex flex-row">
          {db.slice(8).map((data, index) => {
            return (
              <div key={index}>
                <CoursesCard
                  index={index + 8}
                  title={data.title}
                  logo={data.logo}
                  description={data.description}
                  curator={data.curator}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
