import styled from "@emotion/styled";
import { typography } from "../styles/typography";
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
`;

const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  margin-left: 10px;
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  height: 100%;
`;

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

function PropertyFavorites() {
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

  return (
    <>
      <SeekerNavBar />
      <Container>
        <BoxButtons>
          <Link to={"/property-favorites"} style={{ textDecoration: "none" }}>
            <ButtomOn>FAVORITES</ButtomOn>
          </Link>
          <Link to={"/property-contacted"} style={{ textDecoration: "none" }}>
            <ButtomOff>CONTACTED</ButtomOff>
          </Link>
        </BoxButtons>
        <h4>
          {favorites ? `${favorites.length} Properties found` : "Loading..."}
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
  );
}

export default PropertyFavorites;

//<Route path="/property-favorites" element={<PropertyFavorites/>} />
