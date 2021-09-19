import React from 'react'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const BooksPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar/>
      
      <BookList/>
      <Footer/>
    </div>
  )
}

export default BooksPage
