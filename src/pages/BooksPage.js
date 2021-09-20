import React from 'react'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import Book from '../static/CoverSvg/BookSVG.svg'

const BooksPage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-primary'>
      <Navbar/>
      <div className='flex flex-row justify-center items-center'>
        <div>
          <h1>Refresh your mind <br/> with books</h1>
          <p></p>
        </div>
        <img src={Book} alt='Book' draggable='false'/>
      </div>
      <BookList/>
      <Footer/>
    </div>
  )
}

export default BooksPage
