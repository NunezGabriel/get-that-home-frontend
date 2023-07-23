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
  const [properties, setProperties] = useState(null);
  const {min, max} = useContext(filterContext);
  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
  }, []);
  console.log(properties);
  console.log(min,max)
  const filterProperties = properties ? properties.filter(product => product.price >= parseInt(min) && product.price <= parseInt(max)) : [];
  // const filterProperties = properties ? properties.filter(product => product.operation_type == "Rent") : [];
  console.log("->",filterProperties)
  return (
    <div>
      <NoLoggedNavBar /> 
      <ListProperties/>
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {filterProperties?.map((product) => {
            return(
              <Link to={"/property-not-logged"} key={product.id} style={{textDecoration: "none"}}>
                <RentalCard  {...product}></RentalCard>;
              </Link> 
            )
          })}
        </ContainerCards>
      </div>
      <FooterContent />
    </div>
  );
};

export default ListNotLogged;
