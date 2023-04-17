import React from 'react'

function InputValue() {
  return (
    <div>
      <form>
        <input 
        type='text'
        className='search-container'
        placeholder='Enter City Name..' />
         <button className="search-button" type="submit">search</button>     
      </form>
    </div>
  );
}

export default InputValue;
