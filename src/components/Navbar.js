import React, { useState, useContext } from 'react';
import Logo from '../static/logos/LogoWhite.svg';
import AccLogo from '../static/Navbar-icons/account_circle.svg';
import Search from '../static/Navbar-icons/search.svg';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { VideoIdContext } from '../context/VideoIdContext';
import { SelectQuizContext } from '../context/SelectQuizContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);
  const { videoId, setVideoId } = useContext(VideoIdContext);
  const { SelectQuiz, setSelectQuiz } = useContext(SelectQuizContext);

  const auth = getAuth();

  const handleSignout = (e, auth) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        console.log('Sign-out successful.');
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="w-screen flex flex-row place-content-between h-16 shadow-3xl z-10 bg-secondary-red items-center overscroll-none">
      <button
        onClick={() => {
          setVideoId(0);
        }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className=" justify-self-start h-10 ml-8"
          ></img>
        </Link>
      </button>
      <div className="flex flex-row place-content-between w-4/12 text-primary font-sans font-normal text-xl -mr-24">
        <button
          onClick={() => {
            setVideoId(0);
          }}
        >
          <Link to="/courses">Courses</Link>
        </button>
        <Link to="/roadmap">Roadmap</Link>
        <button
          onClick={() => {
            setSelectQuiz(0);
          }}
        >
          <Link to="/quiz">Quizzes</Link>
        </button>
        <Link to="/books">Books</Link>
      </div>
      <div className="flex flex-row place-content-between items-center mr-8">
        <div className="w-60 h-8 bg-secondary-lightred rounded-md flex items-center place-content-between">
          <input
            type="text"
            placeholder="Search a course"
            className="font-sans text-sm placeholder-primary px-4 bg-secondary-lightred focus:outline-none text-primary"
          />
          <img src={Search} alt="Search" className="mr-2" />
        </div>
        {user ? (
          <div>
            <img
              src={AccLogo}
              alt="Acc-logo"
              onClick={() => setDropdown(true)}
              className="ml-8 col-start-9 cursor-pointer"
            />
            {dropdown ? (
              <div>
                <p>{user.email}</p>
                <button onClick={(e) => handleSignout(e, auth)}>
                  Sign out
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <Link to="/signup">
            <button>Signup/Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
