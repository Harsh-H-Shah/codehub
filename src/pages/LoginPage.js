import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Redirect } from 'react-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';
import DropNav from '../components/DropNav';

const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [samasya, setSamasya] = useState('');

  const auth = getAuth();
  const handleLogin = (e, auth, email, password) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        localStorage.setItem('user', JSON.stringify(userCredential.user));
      })
      .catch((error) => {
        console.error(error);
        setSamasya(error.message.slice(22, -2));
      });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <DropNav />
      <Navbar />
      <div className="w-screen flex flex-col justify-start overflow-x-hidden items-center min-h-screen">
        <form className="flex flex-col bg-primary shadow-pn rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans">
          <div className="font-medium text-xl tb:text-3xl text-center">
            Login
          </div>
          {samasya && (
            <p className="text-sm tb:text-lg font-sans text-secondary-brightred text-center">
              {samasya}
            </p>
          )}
          <label htmlFor="email" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Email:
          </label>
          <input
            type="text"
            name="email"
            ref={emailRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <label htmlFor="password" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Password:
          </label>
          <input
            type="password"
            name="pass"
            ref={passwordRef}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-4"
          ></input>
          <button
            onClick={(e) =>
              handleLogin(
                e,
                auth,
                emailRef.current.value,
                passwordRef.current.value
              )
            }
            className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-md tb:text-xl font-medium"
          >
            Submit
          </button>
          <div className="mt-3 tb:mt-8 text-md tb:text-xl">
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
