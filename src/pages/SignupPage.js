import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, Redirect } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/UserContext';

const SignupPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [samasya, setSamasya] = useState('');

  const auth = getAuth();
  const handleSubmit = (e, auth, email, password) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log('Signed up');
        setSamasya('');
        setUser(userCredential.user);
        localStorage.setItem('user', JSON.stringify(userCredential.user));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setSamasya(error.message.slice(22, -2));
        // ..
      });
  };
  // console.log(user);

  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <Navbar />
      <div className="w-screen flex flex-col justify-center items-center h-5/6">
        <form className="flex flex-col bg-primary shadow-pn  rounded-lg p-7 mt-14 w-5/6 tb:w-4/6 lp:w-3/6 dp:w-2/6 font-sans">
          <div className="font-medium text-xl tb:text-3xl text-center">
            Sign Up
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <label htmlFor="password" className="mt-3 tb:mt-5 text-md tb:text-xl">
            Create password:
          </label>
          <input
            type="password"
            name="pass"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <label
            htmlFor="confirmpass"
            className="mt-3 tb:mt-5 text-md tb:text-xl"
          >
            Confirm password:
          </label>
          <input
            type="password"
            name="confirmpass"
            onChange={(e) => {
              setConfirmPass(e.target.value);
            }}
            className="mt-1 tb:mt-2 w-86 h-7 tb:h-8 rounded-md border border-opacity-20 border-secondary-lightgray focus:outline-none p-2 tb:p-4"
          ></input>
          <button
            type="submit"
            onClick={(e) => {
              if (password === confirmPass) {
                handleSubmit(e, auth, email, password);
              } else {
                e.preventDefault();
                setSamasya('Passwords did not match');
              }
            }}
            className="mt-4 tb:mt-8 w-28 tb:w-36 h-8 tb:h-10 bg-secondary-red items-center rounded-md shadow-md text-primary text-md tb:text-xl font-medium"
          >
            Submit
          </button>
          <div className="mt-3 tb:mt-8 text-md tb:text-xl">
            Already have an account?
            <Link to="/login">
              <span className="cursor-pointer underline underline-secondary-blue text-secondary-blue">
                Login
              </span>
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
