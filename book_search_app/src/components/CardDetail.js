import React from 'react'
import {FaTimesCircle} from "react-icons/fa";

const CardDetail = () => {
  return (
    <>
      <div className='overlay'>
        <div className='overlay-inner'>
            <button className='close'>
            <FaTimesCircle  size={32} 
            style={{cursor:"pointer"}}/>
            </button>
            <div className='inner-box'>
                <img />
                <div className='info'>
                    <h1>lorem ipsum dolor...</h1>
                    <h3>deneme deneme</h3>
                    <h4>sample sample <span>2001-08-17</span></h4><br/>
                    <a href='#'><button>Learn More</button></a>
                </div>
            </div>
            <h4 className='description'>knowledge for free...</h4>
        </div>

      </div>
    </>
  )
}

export default CardDetail;
