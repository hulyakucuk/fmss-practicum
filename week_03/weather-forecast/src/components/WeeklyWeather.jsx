import React from 'react'
import { Context } from '../context/Context'
import { useContext } from 'react'


function WeeklyWeather() {
    const {weatherData,city,} =useContext(Context);

  return (
    <div>
      
    </div>
  )
}

export default WeeklyWeather