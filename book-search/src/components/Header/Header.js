import React from 'react'
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Navbar />
        <div className='header-content'>
            <h2 className='header-title'>Open Library</h2><br/>
            <p className='header-text'>lorem ipsum dolor</p>
            <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
