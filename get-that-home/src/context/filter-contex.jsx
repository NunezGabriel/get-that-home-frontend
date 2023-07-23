import { Children, createContext, useContext, useEffect, useState } from "react";

export const filterContext = createContext();

const Fillters =({children})=>{
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1000000000)
    
    return(
        <filterContext.Provider
        value={{setMin, setMax, min, max}}
        >
            {children}
        </filterContext.Provider>
    )
}

export default Fillters

