import React from 'react'
import CourseLogo from '../static/panel-logo/Courses.svg'

const PanelCard = () => {
  return (
    <div className=' w-40 h-40 bg-secondary-red flex flex-col place-content-evenly place-items-center rounded-lg shadow-pn'>
      <img src={CourseLogo} alt="courselogo" className="w-20" />
      <div className='text-primary text-2xl '>Courses</div>
    </div>
  )
}

export default PanelCard
