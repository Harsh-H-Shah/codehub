import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PanelCard from '../components/PanelCard';
import CoursesCard from '../components/CoursesCard'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <h1>Hello dosto!</h1>
      <PanelCard/>
      <CoursesCard/>
      <Footer/>
    </div>
  )
}

export default LandingPage;
