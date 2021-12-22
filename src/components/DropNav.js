import React, { useState, useContext } from 'react';
import LogoWhite from '../static/logos/LogoWhite.svg';
import Hamburger from '../static/Navbar-icons/Hamburger.svg';
import Cross from '../static/Navbar-icons/Cross.svg';
import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { VideoIdContext } from '../context/VideoIdContext';
import { SelectQuizContext } from '../context/SelectQuizContext';

const DropNav = () => {
  const { user, setUser } = useContext(UserContext);
  const { setVideoId } = useContext(VideoIdContext);
  const { setSelectQuiz } = useContext(SelectQuizContext);
  const [openMenu, setOpenMenu] = useState(false);

  const auth = getAuth();

  const handleSignout = (e, auth) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        localStorage.removeItem('user');
        setUser(null);
      })
      .catch((error) => {
        console.error('An error happened while signing out: ', error);
      });
  };

  return (
    <nav className="w-screen bg-secondary-red shadow-3xl flex flex-row items-center z-50 tb:hidden">
      <img
        src={Hamburger}
        alt="hamburger"
        className="h-6 w-6 mx-4 my-2 cursor-pointer"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      />
      <Link to="/">
        <img src={LogoWhite} alt="logo" className="h-8 my-2" />
      </Link>
      {openMenu && (
        <ul className=" bg-secondary-lightgray text-primary z-50 h-screen fixed left-0 w-3/4 top-0 flex flex-col items-start">
          <section className="w-full flex flex-row items-center justify-between shadow-sm">
            {user ? (
              <p className="mx-4">
                Welcome,{' '}
                <span className="text-lg font-sans">{user.displayName}</span>
              </p>
            ) : (
              <p className="text-md font-sans ml-4">
                <Link to="/signup" className="mr-1">
                  Sign Up
                </Link>
                /
                <Link to="/login" className="ml-1">
                  Log In
                </Link>
              </p>
            )}
            <button
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              <img src={Cross} alt="cross" className="h-4 w-4 m-4" />
            </button>
          </section>
          <li
            className="ml-4 mt-4 mb-3 cursor-pointer"
            onClick={() => {
              setVideoId(0);
            }}
          >
            {user ? (
              <Link to="/courses">Courses</Link>
            ) : (
              <Link to="/signup">Courses</Link>
            )}
          </li>
          <hr className=" bg-primary w-full opacity-30" />
          <Link className="ml-4 my-3 cursor-pointer" to="/roadmap">
            Roadmap
          </Link>
          <hr className=" bg-primary w-full opacity-30" />
          <li
            className="ml-4 my-3 cursor-pointer"
            onClick={() => {
              setSelectQuiz(0);
            }}
          >
            {user ? (
              <Link to="/quiz">Quizzes</Link>
            ) : (
              <Link to="/signup">Quizzes</Link>
            )}
          </li>
          <hr className=" bg-primary w-full opacity-30" />
          <li className="ml-4 my-3 cursor-pointer">
            {user ? (
              <Link to="/books">Books</Link>
            ) : (
              <Link to="/signup">Books</Link>
            )}
          </li>
          <hr className=" bg-primary w-full opacity-30" />
          {user && (
            <button
              className="ml-4 my-3 cursor-pointer"
              onClick={(e) => {
                handleSignout(e, auth);
              }}
            >
              <Link to="/">Sign out</Link>
            </button>
          )}
        </ul>
      )}
    </nav>
  );
};

export default DropNav;
