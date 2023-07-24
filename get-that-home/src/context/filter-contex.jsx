import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const filterContext = createContext();

const Fillters = ({children}) => {
  Fillters.propTypes = {
    children: PropTypes.node
  };
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(1000000000)
    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedApartment, setIsCheckedApartment] = useState(false)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const handleCheckboxApartmentChange = () => {
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

