import React from 'react'
import Logo from '../static/logos/LogoWhite.svg'

const Navbar = () => {
  return (
    <div>
      <div className='w-screen flex flex-col h-16 shadow-2xl bg-redness bg-no-repeat'>
        <img src={Logo} alt='logo' className='mix-blend-screen h-12'/>
      </div>
    </div>
  )
}

export default Navbar;
