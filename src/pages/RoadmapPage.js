import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Map from '../static/CoverSvg/Map.svg';
import Frontendsvg from '../static/CoverSvg/Frontend.svg';
import Backendsvg from '../static/CoverSvg/Backend.svg';
import Databasesvg from '../static/CoverSvg/Database.svg';
import Githubsvg from '../static/CoverSvg/Github.svg';
import DropNav from '../components/DropNav';

const RoadmapPage = () => {
  return (
    <main className="flex flex-col bg-primary overflow-x-hidden">
      <DropNav />
      <Navbar />
      <section className="flex flex-row items-center place-content-between">
        <article className="flex flex-col">
          <h1 className="hidden text-4xl tb:block lp:text-6xl text-secondary-darkgray font-serif ml-16">
            Roadmap for all
          </h1>
          <h2 className="text-secondary-darkgray hidden tb:block text-lg lp:text-xl mt-8 ml-16">
            We provide you a detailed roadmap with <br /> personalised and
            exclusive paths.
          </h2>
        </article>
        <img
          src={Map}
          alt="mapsvg"
          className="hidden w-96 h-96 lp:w-2/4 lp:h-2/4 tb:block mt-4 lp:mt-10"
        />
      </section>
      <h1 className="font-serif text-secondary-darkgray text-xl mt-5 ml-8 tb:text-3xl tb:mt-0 tb:ml-12 lp:text-5xl lp:mt-12 lp:ml-16">
        Full Stack Development Roadmap
      </h1>

      {/* Frontend dev */}

      <h2 className="font-serif text-secondary-darkgray mt-3 ml-12 text-xl tb:mt-6 tb:ml-20 tb:text-3xl lp:text-4xl lp:mt-10 lp:ml-24">
        Frontend Development
      </h2>
      <section className="flex flex-row mt-3 tb:mt-6 items-center place-content-around">
        <article className="flex flex-col ml-14 tb:ml-19 lp:ml-24 text-secondary-darkgray font-medium font-sans w-3/4 lp:w-1/2">
          <h3 className="text-md mt-1 tb:text-2xl tb:mt-2 lp:mt-5 lp:text-3xl">
            HTML
          </h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            HTML stands for Hyper Text Markup Language. HTML is the standard
            markup language for creating Web pages.It describes the structure of
            a Web page.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">CSS</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            CSS stands for Cascading Styling Sheets. CSS is used to add styling
            to webpages to make them look cooler. Learn CSS by doing.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">Javascript</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            JavaScript is a dynamic computer programming language. Javascript
            makes your webpage dynamic and alive. Learn Javascript by doing.
          </p>
        </article>
        <img src={Frontendsvg} alt="frontendsvg" className="hidden lp:block" />
      </section>

      {/* Backend dev */}

      <h2 className="font-serif text-secondary-darkgray text-xl mt-3 ml-12 tb:text-3xl tb:mt-6 tb:ml-20 lp:text-4xl lp:mt-10 lp:ml-24">
        Backend Development
      </h2>
      <section className="flex flex-row mt-3 tb:mt-6 items-center place-content-around">
        <article className="flex flex-col ml-14 lp:ml-24 text-secondary-darkgray font-medium font-sans w-3/4 lp:w-1/2">
          <h3 className="text-md mt-1 tb:text-2xl tb:mt-2 lp:mt-5 lp:text-3xl">
            Nodejs
          </h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            Node. js is an open source development for executing JavaScript
            code( server side). Node. js makes fast and scalable network
            applications.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">Python</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            Python is responsible for writing server side web application logic,
            connecting third party web services and helps frontend developer to
            integrate their work.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">Expressjs</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            Express is a minimal and flexible Node.js web application framework
            that provides a robust set of features for web and mobile
            applications.
          </p>
        </article>
        <img src={Backendsvg} alt="backendsvg" className="hidden lp:block" />
      </section>

      {/* Database */}

      <h2 className="font-serif text-secondary-darkgray text-xl mt-3 ml-12 tb:text-3xl tb:mt-6 tb:ml-20 lp:text-4xl lp:mt-10 lp:ml-24">
        Database Management
      </h2>
      <section className="flex flex-row mt-1 tb:mt-3 items-center place-content-around">
        <article className="flex flex-col ml-14 tb:ml-19 lp:ml-24 text-secondary-darkgray font-medium font-sans w-3/4 lp:w-1/2">
          <h3 className="text-md mt-3 tb:text-2xl tb:mt-6 lp:mt-10 lp:text-3xl">
            MySQL
          </h3>
          <p className="text-sm mt-1 mb-3 tb:text-lg tb:mt-2 tb:mb-6 lp:text-xl lp:mt-4 lp:mb-10">
            MySQL is an Oracle-backed open source relational database management
            system (RDBMS) based on Structured Query Language (SQL).
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">MongoDB</h3>
          <p className="text-sm mt-1 mb-3 tb:text-lg tb:mt-2 tb:mb-6 lp:text-xl lp:mt-4 lp:mb-10">
            MongoDB is an open source NoSQL database management program that can
            manage document-oriented information, store or retrieve information.
          </p>
        </article>
        <img src={Databasesvg} alt="databasesvg" className="hidden lp:block" />
      </section>

      {/* Git & Github */}

      <h2 className="font-serif text-secondary-darkgray text-xl mt-3 ml-12 tb:text-3xl tb:mt-6 tb:ml-20 lp:text-4xl lp:mt-10 lp:ml-24">
        Git & Github
      </h2>
      <section className="flex flex-row mt-3 mb-20 tb:mt-6 tb:mb-24 items-center place-content-around">
        <article className="flex flex-col ml-14 tb:ml-19 lp:ml-24 text-secondary-darkgray font-medium font-sans w-3/4 lp:w-1/2">
          <h3 className="text-md mt-1 tb:text-2xl tb:mt-2 lp:mt-5 lp:text-3xl">
            Version Control System
          </h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            Version control, also known as source control, is the practice of
            tracking and managing changes to software code. Version control
            systems are software tools that help software teams manage changes
            to source code over time.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">Git</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            Git is a free and open source distributed version control system
            designed to handle everything from small to very large projects with
            speed and efficiency.
          </p>
          <h3 className="text-md tb:text-2xl lp:text-3xl">Github</h3>
          <p className="text-sm mt-1 mb-2 tb:text-lg tb:mt-2 tb:mb-3 lp:text-xl lp:mt-4 lp:mb-6">
            GitHub, Inc. is a provider of Internet hosting for software
            development and version control using Git. It offers the distributed
            version control and source code management functionality of Git,
            plus its own features.
          </p>
        </article>
        <img src={Githubsvg} alt="githubsvg" className="hidden lp:block" />
      </section>
      <Footer />
    </main>
  );
};

export default RoadmapPage;
