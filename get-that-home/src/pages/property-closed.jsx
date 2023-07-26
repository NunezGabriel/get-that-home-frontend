import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import LandlordCloseCard from "../components/landlord-close-card";
// import FooterContent from "../components/footer";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import { getProperties } from "../service/properties-service";
import { LoginButton } from "../components/button";
import { typography } from "../styles/typography";

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
  gap: 18px;
  margin-left: 10px
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ButtomOn = styled.div`
  background-color: transparent;
  color : #373737;
  padding-bottom: .38rem;
  text-decoration: none;
  border-bottom: 0.125rem solid #F48FB1;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.07813rem;
  text-transform: uppercase;
  ${typography.text.sm}
`
const ButtomOff = styled.div`
  background-color: transparent;
  color : #8E8E8E;
  padding-bottom: .38rem;
  text-decoration: none;
  border-bottom: 0.125rem solid #8E8E8E;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.07813rem;
  text-transform: uppercase;
  ${typography.text.sm}
`

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
  }, [user, userProperties]);


  return (
    <>
      <LanlordNavBar />
      <Container>
        <Link to={"/form"} style={{ textDecoration: "none" }}>
          <LoginButton style={{ width: "188px", marginBottom: "16px" }}>
            New Property
          </LoginButton>
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
        {userProperties?.map((property) => (
            <LandlordCloseCard 
            key={property.id}
            props={property}
            {...property} 
            style={{ textDecoration: "none" }}/>
          ))}
        </ContainerCards>
      </Container>
      {/* <FooterContent/> */}
    </>
  );
}

export default PropertyClose;

// <Route path="/property-contacted" element={<PropertyContacted/>} />
