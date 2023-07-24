import { Children, createContext, useContext, useEffect, useState } from "react";

export const filterContext = createContext();

const Fillters =({children})=>{
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1000000000)
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedApartment, setIsCheckedApartment] = useState(false)
    const [word, setWord] = useState('');
    const [beds, setBeds] = useState(0);
    const [baths, setBaths] = useState(0);
    const [type, setType] = useState('')

    const handleCheckboxChange = (event) => {
      setIsChecked(!isChecked);
    };
    
    const handleCheckboxApartmentChange = (event) => {
      setIsCheckedApartment(!isCheckedApartment);
    };

    const handleWord = (e) => {
      setWord(e.target.value)
      console.log(word);
    }
    
    return(
        <filterContext.Provider
        value={{setMin, setMax, min, max, isChecked, handleCheckboxChange,
          isCheckedApartment, handleCheckboxApartmentChange, handleWord, word, beds, setBeds, baths, setBaths, type, setType}}
        >
            {children}
        </filterContext.Provider>
    )
}

export default Fillters

