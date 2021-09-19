import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Map from '../static/CoverSvg/Map.svg'
import Frontendsvg from '../static/CoverSvg/Frontend.svg'
import Backendsvg from '../static/CoverSvg/Backend.svg'
import Databasesvg from '../static/CoverSvg/Database.svg'
import Githubsvg from '../static/CoverSvg/Github.svg'

const RoadmapPage = () => {
  return (
    <div className='flex flex-col bg-primary'>
      <Navbar/>
      <div className='flex flex-row items-center place-content-between'>
        <div className='flex flex-col'>
            <div className='text-7xl text-secondary-darkgray font-serif ml-16'>Roadmap for all</div>
            <div className='text-secondary-darkgray text-xl mt-8 ml-16'>We provide you a detailed roadmap with <br /> personalised and exclusive paths.</div>
        </div>
        <img src={Map} alt="mapsvg" className='mt-10'/>
      </div>
      <div className='font-serif text-secondary-darkgray text-5xl mt-12 ml-16'>Full Stack Development Roadmap</div>

      {/* Frontend dev */}

      <div className='font-serif text-secondary-darkgray text-4xl mt-10 ml-24'>Frontend Development</div>
      <div className='flex flex-row mt-6 items-center place-content-around'>
      <div className='flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2'>
        <div className=' mt-5 text-3xl'>HTML</div>
        <p className='text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className='text-3xl'>CSS</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className=' text-3xl'>Javascript</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
      </div>
      <img src={Frontendsvg} alt="frontendsvg"/>
      </div>

        {/* Backend dev */}

      <div className='font-serif text-secondary-darkgray text-4xl mt-10 ml-24'>Backend Development</div>
      <div className='flex flex-row mt-6 items-center place-content-around'>
      <div className='flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2'>
        <div className=' mt-5 text-3xl'>HTML</div>
        <p className='text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className='text-3xl'>CSS</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className=' text-3xl'>Javascript</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
      </div>
      <img src={Backendsvg} alt="backendsvg" />
      </div>

        {/* Database */}

      <div className='font-serif text-secondary-darkgray text-4xl mt-10 ml-24'>Database Management</div>
      <div className='flex flex-row mt-6 items-center place-content-around'>
      <div className='flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2'>
        <div className=' mt-5 text-3xl'>HTML</div>
        <p className='text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className='text-3xl'>CSS</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className=' text-3xl'>Javascript</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
      </div>
      <img src={Databasesvg} alt="databasesvg" />
      </div>

        {/* Git & Github */}

      <div className='font-serif text-secondary-darkgray text-4xl mt-10 ml-24'>Git & Github</div>
      <div className='flex flex-row mt-6 mb-24 items-center place-content-around'>
      <div className='flex flex-col ml-24 text-secondary-darkgray font-medium font-sans  w-1/2'>
        <div className=' mt-5 text-3xl'>HTML</div>
        <p className='text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className='text-3xl'>CSS</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
        <div className=' text-3xl'>Javascript</div>
        <p className=' text-xl mt-4 mb-6'>HTML stands for Hyper Text Markup Language.HTML is the standard markup language for creating Web pages.It describes the structure of a Web page.</p>
      </div>
      <img src={Githubsvg} alt="githubsvg" />
      </div>
      <Footer/>
    </div>
  )
}

export default RoadmapPage