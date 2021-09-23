import React from 'react'

const Card = ({title, logo, description, curator}) => {
  return (
   <div className='w-72 h-86 bg-primary shadow-xl rounded-lg text-secondary-lightgray'>
      <div className='flex flex-col m-6 '>
        <div className='flex flex-row place-content-between'>
          <p className='mt-4 text-2xl font-semibold'>{title}</p>
          <img src={logo} alt="logo" className='w-14 h-16 flex'/>
        </div>
        <p className='mt-6'>{description}</p>
        <p className='mt-8'>Curator :</p>
        <p className='mt-1 font-medium'>{curator}</p>
        <button className='mt-8 w-32 h-9 bg-secondary-red items-center rounded-md shadow-md text-primary'>Get Started</button>
      </div>
    </div>
  )
}

export default Card
