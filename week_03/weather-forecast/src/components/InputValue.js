import React from 'react'
import { useContext } from 'react';
import { Context } from '../context/Context';
function InputValue() {

  const {handleCityChange,handleSubmit} =useContext(Context);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        className='search-container'
        placeholder='Enter City Name..' 
        onChange={handleCityChange}/>
         <button className="search-button" type="submit">search</button>     
      </form>
    </div>
  );
}

export default InputValue;
