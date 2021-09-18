import React from 'react'
import Logo from '../static/logos/LogoWhite.svg'
import AccLogo from '../static/Navbar-icons/account_circle.svg'
import Search from '../static/Navbar-icons/search.svg'

const Navbar = () => {
  return (
      <nav className='w-screen grid grid-cols-9 col-start-2 h-20 shadow-3xl bg-secondary-red justify-center items-center overscroll-none'>
        <img src={Logo} alt='logo' className=' justify-self-start h-16'></img>
        <div className='flex flex-row text-primary col-start-3'>
          <p className='font-sans font-normal text-xl mr-10 cursor-pointer'>Courses</p>
          <p className='font-sans font-normal text-xl mr-10 cursor-pointer'>Roadmap</p>
          <p className='font-sans font-normal text-xl mr-10 cursor-pointer'>Quizzes</p>
          <p className='font-sans font-normal text-xl mr-10 cursor-pointer'>Books</p>
        </div>
        <div className='w-64 h-8 bg-secondary-lightred rounded-md flex items-center place-content-between col-start-7'>
          <input type='text' placeholder='Search a course' className='font-sans text-sm placeholder-primary px-4 bg-secondary-lightred focus:outline-none text-primary'/>
          <img src={Search} alt='Search' className='mr-2' />
        </div>
        <img src={AccLogo} alt='Acc-logo' className='ml-8 col-start-9' />
      </nav>
  )
}

export default Navbar;
