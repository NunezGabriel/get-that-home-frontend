import styled from "@emotion/styled";

import ButtomOn from "../components/buttomOn";
import ButtomOff from "../components/buttonOf";
import SeekerRentalCard from "../components/seeker-rental-card";
// import FooterContent from "../components/footer";
import SeekerNavBar from "../components/navBar/seekerNavBar";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";
import { getProperties } from "../service/properties-service";
import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    width: 75rem;
    margin: 2rem auto;
    flex-direction: column;
`

const BoxButtons = styled.div`
    width: 100%;
    display: flex;
` 

const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
    height: 100%;
`

function PropertyFavorites(){

    let favorites = JSON.parse(localStorage.getItem("favorites"));
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

            <div>
            <Link to={"/property-favorites"} style={{ textDecoration: "none" }}>
                <ButtomOn>FAVORITES</ButtomOn>
            </Link>
            </div>

            <div>
            <Link to={"/property-contacted"} style={{ textDecoration: "none" }}>
              <ButtomOff>CONTACTED</ButtomOff>
            </Link>
            </div>
            </BoxButtons>

            <h4>
                {userProperties
                  ? `${userProperties.length} Properties found`
                  : "Loading..."}
            </h4>

        <ContainerCards>
        {favorites?.map((favorite) => (
            <SeekerRentalCard
              key={favorite.id}
              props={favorite}
              {...favorite}
              style={{ textDecoration: "none" }}
            />
          ))}
        </ContainerCards>
        </Container>
        {/* <FooterContent/> */}
        </>
    )
}

export default PropertyFavorites;

//<Route path="/property-favorites" element={<PropertyFavorites/>} />