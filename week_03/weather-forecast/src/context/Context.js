import React, { createContext, useState } from 'react'

export const Context =createContext();
// context elemanı olusturuldu 

const ContextProvider=({children})=>{
    
    const [city,setCity] =useState("");
    // saves the user's input as a variable


    const handleCityChange=(event)=> {
        setCity(event.target.value);
        console.log("gitrilne değer",event.target.value);
    }
    // this function captures the changes made by the user in the input field

    return(
    <Context.Provider>
        {children}
    </Context.Provider>
)
};
export default ContextProvider;