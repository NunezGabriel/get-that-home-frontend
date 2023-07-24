import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import ListProperties from "./list-properties";
import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import { getProperties } from "../service/properties-service";
import RentalCard from "../components/rental-card";
import FooterContent from "../components/footer";
import { Link } from "react-router-dom";
import { filterContext } from "../context/filter-contex";


export const ContainerCards = styled.div`
  width: 75rem;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ListNotLogged = () => {
  const [properties, setProperties] = useState([]);
  // const {min, max, isChecked, isCheckedApartment} = useContext(filterContext);
  // const [staticProperties, setStaticProperties] = useState(null)

  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
    // getProperties().then(setStaticProperties).catch(console.log);
  }, []);

  // const filterProperties = properties ? properties.filter(product => product.price >= parseInt(min) && product.price <= parseInt(max)) : [];
  // console.log(isChecked);

  // useEffect(()=>{
  //   if(isChecked){
  //     setProperties(filterProperties.filter((product)=>product.property_type == "Casa"))
  //     console.log(properties)
  //   }else if(isCheckedApartment){
  //     setProperties(filterProperties.filter((product)=>product.property_type == "Apartamento"))
  //     console.log(properties)
  //   }
  //   else{
  //     setProperties(staticProperties)
  //   }
  // }, [properties])


  return (
    <div>
      <NoLoggedNavBar /> 
      <ListProperties/>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {properties?.map((property) => (
            <RentalCard 
            key={property.id}
            props={property}
            {...property} 
            style={{ textDecoration: "none" }}/>
          ))}
        </ContainerCards>
      </div>
      <FooterContent />
    </div>
  );
};

export default ListNotLogged;
