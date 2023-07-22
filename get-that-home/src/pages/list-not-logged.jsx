import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import ListProperties from "./list-properties";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { getProperties } from "../service/properties-service";
import RentalCard from "../components/rental-card";
import FooterContent from "../components/footer";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
  }, []);
  console.log(properties);

  return (
    <div>
      <NoLoggedNavBar /> 
      <ListProperties />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {properties?.map((product) => {
            return(
              <Link to={"/property-not-logged"} style={{textDecoration: "none"}}>
                <RentalCard key={product.id} {...product}></RentalCard>;
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
