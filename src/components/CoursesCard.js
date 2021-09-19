import React from 'react'
import HTMLLogo from '../static/cardslogo/HTMLLogo.svg'

const Card = () => {
  return (
   <div className='w-80 h-96 bg-primary shadow-xl rounded-lg'>
      <div className='flex flex-col m-7 '>
        <div className='flex flex-row place-content-between'>
          <div className='mt-6 text-2xl font-semibold'>HTML</div>
          <img src={HTMLLogo} alt="htmllogo" className='w-14 h-16 mt-2 flex'/>
        </div>
        <div className='mt-6'>HTML is the building block for Web development. Learn HTML by implementing.</div>
        <div className='mt-8'>Curator :</div>
        <div className='mt-1'>Traversy Media</div>
        <button className='mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary'>Get Started</button>
      </div>
    </div>
  )
}

export default Card
