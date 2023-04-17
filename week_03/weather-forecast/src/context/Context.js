import React, { createContext, useState } from "react";


export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [city, setCity] = useState("");
  // saves the user's input as a variable

  const [weatherData, serWeatherData] = useState(null);
  // save data retrieved from the API

  const handleSubmit = async (event) => {
  // This function is triggered when the user submits the form and sends a request to the API using the fetch() function

    event.preventDefault();
    // preventDefault() is used to prevent the default behavior of the form so that the data does not disappear when the page is reloaded.

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    if (!response.ok) {
      serWeatherData(null);
      //  If there is an error with the response from the API, the weatherData state variable is set to null
      return;
    }

    const data = await response.json();
    serWeatherData(data);
    console.log("weather data:", data);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  // this function captures the changes made by the user in the input field

  const values = {
    city,
    handleCityChange,
    handleSubmit,
    weatherData,
  };
  // values are stored in an object called values to be passed to a child component.

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
