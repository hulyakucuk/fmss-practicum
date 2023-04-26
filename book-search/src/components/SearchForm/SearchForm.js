import React from 'react'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form'>
            <div className='search-form-elem'>
              <input type='text'
              className='form-control'
              placeholder='search books' />
              <button type='submit' >
                <FaSearch className='text-orange'
                style={{color:"coral", marginLeft:"5px"}}
                size={32}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm
