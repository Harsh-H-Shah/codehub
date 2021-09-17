import React from 'react'
import DisLogo from '../static/social-icons/Discord.svg'
import InstLogo from '../static/social-icons/Instagram.svg'
import FbLogo from '../static/social-icons/Facebook.svg'
import LinLogo from '../static/social-icons/Linkedin.svg'
import TwitterLogo from '../static/social-icons/Twitter.svg'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <h1>Follow us on:</h1>
      <div className="flex flex-row w-max h-full">
        < img src = {InstLogo} alt= 'logo' className='m-2' />
        < img src = {FbLogo} alt= 'logo' />
        < img src = {LinLogo} alt= 'logo' />
        < img src = {TwitterLogo} alt= 'logo' />
      </div>
      <p className="">
      Join our community at:
      </p>
      <img src={DisLogo} alt='logo'/>
    </div>
  )
}

export default Footer
