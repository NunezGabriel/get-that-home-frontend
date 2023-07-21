import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import ButtomOn from "../components/buttomOn";
import ButtomOff from "../components/buttonOf";
import RentalCard from "../components/rental-card";
// import FooterContent from "../components/footer";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { getProperties } from "../service/properties-service";

const Container = styled.div`
  display: flex;
  width: 75rem;
  height: auto;
  margin: 2rem auto;
  flex-direction: column;
`;
const BoxButtons = styled.div`
  width: 100%;
  display: flex;
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

function PropertyClose() {
  const { user } = useAuth();
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    if (user) {
      getProperties()
        .then((allProperties) => {
          const propertiesOfUser = allProperties.filter(
            (property) => property.user_id === user.id && !property.active
          );
          setUserProperties(propertiesOfUser);
        })
        .catch(console.log);
    }
  }, [user]);
  return (
    <>
      <LanlordNavBar />
      <Container>
        <Link to={"/form"}>
          <div style={{ width: "188px", marginBottom: "16px" }}>
            New Property
          </div>
        </Link>
        <BoxButtons>
          <Link to={"/property-active"} style={{ textDecoration: "none" }}>
            <ButtomOff>ACTIVE</ButtomOff>
          </Link>
          <ButtomOn>CLOSED</ButtomOn>
        </BoxButtons>

        <h4>
          {userProperties
            ? `${userProperties.length} Properties found`
            : "Loading..."}
        </h4>
        <ContainerCards>
          {userProperties.map((property) => {
            return <RentalCard key={property.id} {...property} />;
          })}
        </ContainerCards>
      </Container>
      {/* <FooterContent/> */}
    </>
  );
}

export default PropertyClose;

// <Route path="/property-contacted" element={<PropertyContacted/>} />
