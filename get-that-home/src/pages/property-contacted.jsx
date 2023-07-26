import styled from "@emotion/styled";

import SeekerNavBar from "../components/navBar/seekerNavBar";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { getProperties } from "../service/properties-service";
import SeekerRentalCard from "../components/seeker-rental-card";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";



const Container = styled.div`

    display: flex;
    width: 75rem;
    height: auto;
    margin: 2rem auto;
    flex-direction: column;
`
const BoxButtons = styled.div`
    width: 100%;
    display: flex;
    gap: 18px;
    margin-left: 10px;
`

const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

`

const ButtomOn = styled.div`
  background-color: transparent;
  color: #373737;
  padding-bottom: 0.38rem;
  text-decoration: none;
  border-bottom: 0.125rem solid #f48fb1;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.07813rem;
  text-transform: uppercase;
  ${typography.text.sm}
`;

const ButtomOff = styled.div`
  background-color: transparent;
  color: #8e8e8e;
  padding-bottom: 0.38rem;
  text-decoration: none;
  border-bottom: 0.125rem solid #8e8e8e;
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 171.429% */
  letter-spacing: 0.07813rem;
  text-transform: uppercase;
  ${typography.text.sm}
`;

function PropertyContacted(){

    let contacteds = JSON.parse(localStorage.getItem("contacted"));
    const { user } = useAuth();
    const [userProperties, setUserProperties] = useState([]);

    useEffect(() => {
      if (user) {
        getProperties()
          .then((allProperties) => {
            const propertiesOfUser = allProperties.filter(
              (property) => property.user_id === user.id && property.favorite
            );
            setUserProperties(propertiesOfUser);
          })
          .catch(console.log);
      }
    }, [user, userProperties]);



    return(
        <>
        <SeekerNavBar/>      
        <Container> 
        <BoxButtons>
          <Link to={"/property-favorites"} style={{ textDecoration: "none" }}>
            <ButtomOff>FAVORITES</ButtomOff>
          </Link>
          <Link to={"/property-contacted"} style={{ textDecoration: "none" }}>
            <ButtomOn>CONTACTED</ButtomOn>
          </Link>
        </BoxButtons>

            <h4>
                {contacteds
                  ? `${contacteds.length} Properties found`
                  : " :) "}
            </h4>
            <ContainerCards>
        {contacteds?.map((contac) => (
            <SeekerRentalCard
              key={contac.id}
              props={contac}
              {...contac}
              style={{ textDecoration: "none" }}
            />
          ))}
        </ContainerCards>
        </Container>
        {/* <FooterContent/> */}
        </>
    )
}

export default PropertyContacted

// <Route path="/property-contacted" element={<PropertyContacted/>} />
