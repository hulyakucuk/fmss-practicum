import React, {createContext, useState} from "react";
import axios from "axios";

export const Context=createContext();

const ContextProvider=({children})=>{

    const [search,setSearch]=useState("");
   // saves the user's input as a variable

   const [bookData,setData]=useState([]);
    // save data retrieved from the API

    const fetchData=(evt)=>{
        
        if(evt.key==="Enter")
        {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBqVdHeiWGWGcptZWf6wjzRllE0MdZabhk&maxResults=40`)
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    };

    const values={
        search,
        setSearch,
        bookData,
        setData,
        fetchData

    }
 // values are stored in an object called values to be passed to a child component.

    return (
        <Context.Provider value={values}>
        {children}
    </Context.Provider>
    )
};

export default ContextProvider;