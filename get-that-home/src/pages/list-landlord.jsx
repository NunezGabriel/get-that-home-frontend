import styled from "@emotion/styled";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import ListProperties from "./list-properties";
import { useState, useEffect } from "react";
import { getProperties } from "../service/properties-service";
import RentalCard from "../components/rental-card";
import FooterContent from "../components/footer";
import { Link } from "react-router-dom";

const ContainerCards = styled.div`
  margin: 2rem auto;
  width: 75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ListLandLord = () => {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
  }, []);
  console.log(properties);
 
  return (
    <div>
      <LanlordNavBar />
      <ListProperties />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {properties?.map((product) => {
              return (
                <Link to={"/property-detail"} style={{textDecoration: "none"}}>
                  <RentalCard key={product.id} {...product}></RentalCard>;
                </Link> 
              );            
          })}
        </ContainerCards>
      </div>
      <FooterContent />
    </div>
  );
};

export default ListLandLord;
