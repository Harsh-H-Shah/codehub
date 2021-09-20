import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-col justify-center items-center h-5/6">
        <form className="flex flex-col bg-primary shadow-pn  rounded-lg p-7 mt-14 w-2/6 font-sans  ">
          <div className="font-medium text-3xl text-center">Login</div>
          <label htmlFor="email" className="mt-5 text-xl">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="mt-2 w-86 h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <label htmlFor="password" className="mt-5 text-xl">
            Password:
          </label>
          <input
            type="text"
            id="pass"
            className="mt-2 w-86 h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <button className="mt-8 w-36 h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-xl font-medium">
            Submit
          </button>
          <div className="mt-8 text-xl">
            Need an account?
            <Link to="/signup">
              <span className="cursor-pointer underline underline-secondary-blue text-secondary-blue">
                Signup
              </span>
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
