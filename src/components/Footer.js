import React, { useContext } from 'react';
import DisLogo from '../static/social-icons/Discord.svg';
import InstLogo from '../static/social-icons/Instagram.svg';
import FbLogo from '../static/social-icons/Facebook.svg';
import LinLogo from '../static/social-icons/Linkedin.svg';
import TwitterLogo from '../static/social-icons/Twitter.svg';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer className="w-screen min-h shadow-2xl font-sans bg-primary p-6">
      <section className="flex flex-col tb:flex-row tb:place-content-between">
        <section className="flex text-lg tb:text-lg lp:text-2xl items-start flex-col tb:ml-10 lp:ml-16">
          <p className='tb:mt-4'>Follow us on:</p>
          <article className="flex flex-row mb-4 mt-3 lp:mt-3 lp:mb-7">
            <a href="https://www.instagram.com/dribbble/" target="_blank">
              <img src={InstLogo} alt="instlogo" className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/MicrosoftIndia" target="_blank">
              <img src={FbLogo} alt="fblogo" className="w-7 h-7 ml-3" />
            </a>
            <a href="https://www.linkedin.com/company/figma/" target="_blank">
              <img src={LinLogo} alt="linlogo" className="w-7 h-7 ml-3" />
            </a>
            <a href="https://twitter.com/VisualStudio" target="_blank">
              <img
                src={TwitterLogo}
                alt="twitterlogo"
                className="w-7 h-7 ml-3"
              />
            </a>
          </article>
          <p className="mb-2 lp:mb-3">Join our community at:</p>
          <article>
            <img src={DisLogo} alt="dislogo" className="w-9 h-9 inline-block" />
            <a href="https://discord.gg/HDwq7WeQ" target="_blank">
              <span className="text-md lp:text-xl uppercase ml-3">Discord</span>
            </a>
          </article>
        </section>
        <section className="flex text-md mt-4 lp:text-xl items-start flex-col tb:mr-15 lp:mr-20">
          <p className="text-lg lp:text-2xl">Courses</p>
          {user ? (
            <Link to="/courses">
              <ul>
                <li className="mt-1 tb:mt-3">Learn Frontend</li>
                <li className="mt-2">Learn Backend</li>
                <li className="mt-2">Learn Database</li>
                <li className="mt-2">Learn Git & Github</li>
              </ul>
            </Link>
          ) : (
            <Link to="/signup">
              <ul>
                <li className="mt-1 tb:mt-3">Learn Frontend</li>
                <li className="mt-2">Learn Backend</li>
                <li className="mt-2">Learn Database</li>
                <li className="mt-2">Learn Git & Github</li>
              </ul>
            </Link>
          )}
        </section>
        <section className="flex flex-col text-md lp:text-xl items-start tb:mr-10 lp:mr-16">
          <p className="text-lg mt-4 lp:text-2xl">Resources</p>
          <ul>
            {user ? (
              <Link to="/books">
                <li className="mt-1 tb:mt-3">Reference Books</li>
              </Link>
            ) : (
              <Link to="/signup">
                <li className="mt-1 tb:mt-3">Reference Books</li>
              </Link>
            )}
            {user ? (
              <Link to="/quiz">
                <li className="mt-2">Fun Quizzes</li>
              </Link>
            ) : (
              <Link to="/signup">
                <li className="mt-2">Fun Quizzes</li>
              </Link>
            )}
            {user ? (
              <Link to="/roadmap">
                <li className="mt-2">Roadmap for Full-Stack</li>
              </Link>
            ) : (
              <Link to="/signup">
                <li className="mt-2">Roadmap for Full-Stack</li>
              </Link>
            )}
            {user ? (
              <Link to="/courses">
                <li className="mt-2">Projects</li>
              </Link>
            ) : (
              <Link to="/signup">
                <li className="mt-2">Projects</li>
              </Link>
            )}
          </ul>
        </section>
      </section>
      <p className="flex justify-center text-md tb:text-xl mt-5 tb:mt-7">
        © 2021 CodeHub Technologies Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
