import React from 'react'
import HTMLLogo from '../static/cardslogo/HTMLLogo.svg'

const Card = () => {
  return (
   <div className='w-72 h-86 bg-primary shadow-xl rounded-lg text-secondary-lightgray'>
      <div className='flex flex-col m-6 '>
        <div className='flex flex-row place-content-between'>
          <div className='mt-4 text-2xl font-semibold'>HTML</div>
          <img src={HTMLLogo} alt="htmllogo" className='w-14 h-16 flex'/>
        </div>
        <div className='mt-6'>HTML is the building block for Web development. Learn HTML by implementing.</div>
        <div className='mt-8'>Curator :</div>
        <div className='mt-1 font-medium'>Traversy Media</div>
        <button className='mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary'>Get Started</button>
      </div>
    </div>
  )
}

export default Card
