import React, { createContext } from 'react'

export const Context =createContext();
// context elemanı olusturuldu 

const ContextProvider=({children})=>{



return(
    <Context.Provider>
        {children}
    </Context.Provider>
)
};
export default ContextProvider;