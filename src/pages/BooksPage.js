import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import BookList from '../components/BookList';
import DropNav from '../components/DropNav';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Book from '../static/CoverSvg/BookSVG.svg';

const BooksPage = () => {
  return (
    <section className="flex flex-col justify-center items-center overflow-x-hidden bg-primary">
      <DropNav />
      <Navbar />
      <article className="flex flex-row justify-center items-center">
        <span className="tb:ml-14 hidden tb:flex flex-col justify-center">
          <h1 className="font-serif font-extralight text-secondary-darkgray text-2xl tb:text-4xl lp:text-5xl dp:text-6xl mt-4 tb:mt-0 ">
            Refresh your mind <br className="hidden lp:block" /> with books
          </h1>
          <p className="text-lg tb:text-xl lp:text-2xl font-sans text-secondary-darkgray mt-3 tb:mt-6">
            Get books of top authors for free
          </p>
        </span>
        <motion.img
          initial={{ x: '200%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          src={Book}
          alt="Book"
          draggable="false"
          className="tb:mt-8 lp:mt-14 hidden tb:block ml-10 lp:ml-32 tb:w-3/5 lp:w-1/2"
        />
      </article>
      <p className="font-serif font-extralight text-secondary-darkgray mt-4 tb:mt-0 text-3xl tb:text-4xl lp:text-5xl dp:text-6xl">
        Popular books
      </p>
      <BookList />
      <Footer />
    </section>
  );
};

export default BooksPage;
