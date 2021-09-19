import React from 'react'
import DisLogo from '../static/social-icons/Discord.svg'
import InstLogo from '../static/social-icons/Instagram.svg'
import FbLogo from '../static/social-icons/Facebook.svg'
import LinLogo from '../static/social-icons/Linkedin.svg'
import TwitterLogo from '../static/social-icons/Twitter.svg'

const Footer = () => {
  return (
    <div className= 'w-screen min-h shadow-2xl font-sans bg-primary p-6' >
    <div className="flex flex-row-3 place-content-between">
      <div className="flex text-2xl items-start flex-col ml-16">
        <div>Follow us on:</div>
        <div className="flex flex-row mt-5 mb-8">
          < img src = {InstLogo} alt= 'instlogo' className='w-7 h-7' />
          < img src = {FbLogo} alt= 'fblogo' className='w-7 h-7 ml-3' />
          < img src = {LinLogo} alt= 'linlogo' className='w-7 h-7 ml-3' />
          < img src = {TwitterLogo} alt= 'twitterlogo' className='w-7 h-7 ml-3' />
        </div>
        <div className="mb-5">Join our community at:</div>
        <div>
          <img src={DisLogo} alt='dislogo' className="w-9 h-9 inline-block"/>
          <span className="text-xl uppercase ml-3">Discord</span>
        </div>
      </div>
      <div className="flex text-xl items-start flex-col mr-20">
        <div className="text-2xl">Courses</div>
        <div className='mt-3'>Learn Frontend</div>
        <div className='mt-2'>Learn Backend</div>
        <div className='mt-2'>Learn Database</div>
        <div className='mt-2'>Learn Hosting</div>
        <div className='mt-2'>Learn Git & Github</div>
      </div>
      <div className="flex flex-col text-xl items-start mr-16">
        <div className="text-2xl">Resources</div>
        <div className='mt-3'>Study Materials</div>
        <div className='mt-2'>Study Materials</div>
        <div className='mt-2'>Study Materials</div>
        <div className='mt-2'>Study Materials</div>
        <div className='mt-2'>Study Materials</div>
      </div>
  </div>
    <div className="flex justify-center text-xl mt-4">
      © 2021 CodeHub Technologies Pvt. Ltd.
    </div>
  </div>
  )
}

export default Footer
