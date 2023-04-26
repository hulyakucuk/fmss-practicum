import React, {createContext, useState} from "react";

export const Context=createContext();

const ContextProvider=({children})=>{

    const [search,setSearch]=useState("");
   // saves the user's input as a variable

   const [bookData,setData]=useState([]);
    // save data retrieved from the API



    const values={
        search,
        setSearch,
        bookData,
        setData,

    }
 // values are stored in an object called values to be passed to a child component.

    return (
        <Context.Provider value={values}>
        {children}
    </Context.Provider>
    )
};

export default ContextProvider;