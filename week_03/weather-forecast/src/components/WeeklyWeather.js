import React from 'react'
import { Context } from '../context/Context'
import { useContext } from 'react'
import dayjs from 'dayjs';
// install dayjs to simplifies working with dates and times in JavaScript.

function WeeklyWeather() {
    const {weatherData} =useContext(Context);

    const days = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'];


    const forecast = weatherData
    ? weatherData.list
        .filter((item, index) => index % 8 === 0)
        .slice(0, 5)
        .map((item) => {
          const date = dayjs(item.dt * 1000).toDate();
          const day = days[dayjs(date).day()];
          const temperature = Math.round(
            ((item.main.temp - 273.15) * 9) / 5 + 32
          );
          const description = item.weather[0].description;
          return { date, day, temperature, description };
        })
    : 
    [];
/*      filter function selects every 8th item in the array (i.e. one forecast per day), 
    and slice function limits the array to the next 5 forecasts. Map function then 
    transforms each selected item into an object with a date, day, temperature, and 
    description property. */

  return (
    <div>
           {weatherData === null ? (
        <p>No data available</p>
      ) : weatherData ? (
        weatherData.cod === "200" ? (
          <>
            <h2 className='title'>{weatherData.city.name}</h2>
            <div className="card-container">
              {forecast.map((item) => (
                <div className="card" key={item.date}>
                  <h3>
                    <u>{item.day}</u>
                  </h3>
                  <p>{item.date.toLocaleDateString()}</p>

                  <p>Temperature: {item.temperature}°F</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default WeeklyWeather