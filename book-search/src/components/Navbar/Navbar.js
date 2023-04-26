import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import logo from "../../images/logo.webp";

const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);


  const handleMenu=()=>{
    setToggleMenu(!toggleMenu);
  }
  return (
    <nav className='navbar' id='navbar'>
      <div className='container navbar-content'>
        <div className='brand-and-toggler'>
          <Link to="/" className='navbar-brand'>
            <img src={logo} alt='site-logo'></img>
            <span className='navbar-title'></span>
          </Link>
          <button type='button'
          className='navbar-toggler-btn'
          onClick={handleMenu}>
            <HiOutlineMenuAlt3 size={35}
            style={{color: `${toggleMenu ? "#fff" : " rgb(131, 56, 12)"}`}} />
          </button>
        </div>
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" 
        : "navbar-collapse"}>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="book"
            className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to="favorite" className='nav-link'>favorite</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>
 
  )
}

export default Navbar
