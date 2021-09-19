import React from 'react'
import CourseLogo from '../static/panel-logo/Courses.svg'

const PanelCard = () => {
  return (
    <div className=' w-32 h-32 bg-secondary-lightred flex flex-col place-content-evenly place-items-center rounded-md shadow-md'>
      <img src={CourseLogo} alt="courselogo" className="w-16 h-16" />
      <div className='text-primary text-xl '>Courses</div>
    </div>
  )
}

export default PanelCard
