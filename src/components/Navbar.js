import React, { useState, useContext } from 'react';
import Logo from '../static/logos/LogoWhite.svg';
import AccLogo from '../static/Navbar-icons/account_circle.svg';
// import Search from '../static/Navbar-icons/search.svg';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { VideoIdContext } from '../context/VideoIdContext';
import { SelectQuizContext } from '../context/SelectQuizContext';
import { UserContext } from '../context/UserContext';
import DropNav from './DropNav';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);
  const { setVideoId } = useContext(VideoIdContext);
  const { setSelectQuiz } = useContext(SelectQuizContext);

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
    // <DropNav />
    <nav className="hidden tb:w-screen tb:visible tb:flex tb:flex-row tb:place-content-between tb:h-16 tb:shadow-3xl tb:z-10 tb:bg-secondary-red tb:items-center tb:overscroll-none">
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className=" justify-self-start h-10 ml-8"
          onClick={() => {
            setVideoId(0);
          }}
        />
      </Link>
      <ul className="flex flex-row place-content-between w-4/12 text-primary font-sans font-normal lp:text-xl tb:text-md -mr-24">
        <li
          className="tb:mr-4"
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
        <Link to="/roadmap">Roadmap</Link>
        <li
          className="tb:mx-4"
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
        {user ? (
          <Link to="/books">Books</Link>
        ) : (
          <Link to="/signup">Books</Link>
        )}
      </ul>
      {/* <div className="w-60 h-8 bg-secondary-lightred rounded-md flex items-center place-content-between">
          <input
            type="text"
            placeholder="Search a course"
            className="font-sans text-sm placeholder-primary px-4 bg-secondary-lightred focus:outline-none text-primary"
          />
          <img src={Search} alt="Search" className="mr-2" />
        </div> */}
      {user ? (
        <section className="flex flex-col">
          <img
            src={AccLogo}
            alt="Acc-logo"
            onClick={() => setDropdown(!dropdown)}
            className="mt-0 mr-5 w-10 h-10 col-start-9 self-end cursor-pointer"
          />
          {dropdown ? (
            <span className="flex flex-col font-sans rounded-md text-xl w-max h-max p-3 bg-primary -mb-36 z-20">
              <p>{user.displayName}</p>
              <button
                onClick={(e) => {
                  handleSignout(e, auth);
                }}
              >
                <Link to="/">Sign out</Link>
              </button>
            </span>
          ) : (
            <></>
          )}
        </section>
      ) : (
        <Link to="/signup">
          <button className="w-max h-max ml-2 px-4 py-1 bg-secondary-lightred items-center tracking-wide rounded-md text-primary font-sans text-md font-medium">
            Signup/Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
