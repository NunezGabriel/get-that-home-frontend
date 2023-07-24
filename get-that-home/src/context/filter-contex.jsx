import { Children, createContext, useContext, useEffect, useState } from "react";

export const filterContext = createContext();

const Fillters =({children})=>{
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1000000000)
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedApartment, setIsCheckedApartment] = useState(false)

    const handleCheckboxChange = (event) => {
      setIsChecked(!isChecked);
    };
    const handleCheckboxApartmentChange = (event) => {
        setIsCheckedApartment(!isCheckedApartment);
      };
    return(
        <filterContext.Provider
        value={{setMin, setMax, min, max, isChecked, handleCheckboxChange,isCheckedApartment, handleCheckboxApartmentChange}}
        >
            {children}
        </filterContext.Provider>
    )
}

export default Fillters

