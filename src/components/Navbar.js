import React from 'react'
import Logo from '../static/logos/LogoWhite.svg'
import AccLogo from '../static/Navbar-icons/account_circle.svg'
import Search from '../static/Navbar-icons/search.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='w-screen flex flex-row place-content-between h-16 shadow-3xl z-10 bg-secondary-red items-center overscroll-none'>
        <Link to="/"><img src={Logo} alt='logo' className=' justify-self-start h-10 ml-8'></img></Link>
        <div className='flex flex-row place-content-between w-4/12 text-primary font-sans font-normal text-xl -mr-24'>
          <Link to="/courses">Courses</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/quiz">Quizzes</Link>
          <Link to="/books">Books</Link>
        </div>
        <div className='flex flex-row place-content-between items-center mr-8'>
          <div className='w-60 h-8 bg-secondary-lightred rounded-md flex items-center place-content-between'>
            <input type='text' placeholder='Search a course' className='font-sans text-sm placeholder-primary px-4 bg-secondary-lightred focus:outline-none text-primary'/>
            <img src={Search} alt='Search' className='mr-2' />
          </div>
          <img src={AccLogo} alt='Acc-logo' className='ml-8 col-start-9 cursor-pointer' />
        </div>
      </nav>
  )
}

export default Navbar;
