import React, { createContext, useState } from 'react'

const API_KEY="1bbccc68a6c48e84957f5b79c2f171d4";
export const Context =createContext();

const ContextProvider=({children})=>{
    
    const [city,setCity] =useState("");
    // saves the user's input as a variable

    const [weatherData, serWeatherData]=useState(null);
    // save data retrieved from the API

    const handleSubmit=async (event)=>{
    // This function is triggered when the user submits the form and sends a request to the API using the fetch() function
        
        event.preventDefault();
    // preventDefault() is used to prevent the default behavior of the form so that the data does not disappear when the page is reloaded.
       
        const response=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
        if(!response.ok){
            serWeatherData(null);
            return;
        }
        const data = await response.json();
        serWeatherData(data);
        console.log("weather data:",data);
    };

    const handleCityChange=(event)=> {
        setCity(event.target.value);
    }
    // this function captures the changes made by the user in the input field

    return(
    <Context.Provider>
        {children}
    </Context.Provider>
)
};
export default ContextProvider;