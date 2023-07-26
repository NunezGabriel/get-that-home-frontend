import styled from "@emotion/styled";

import RentalCard from "../components/rental-card";
// import FooterContent from "../components/footer";
import SeekerNavBar from "../components/navBar/seekerNavBar";
import { Link } from "react-router-dom";
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
  margin-left: 10px;
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
function PropertyContacted() {
  return (
    <>
      <SeekerNavBar />
      <Container>
        <BoxButtons>
          <Link to={"/property-favorites"} style={{ textDecoration: "none" }}>
            <ButtomOff>FAVORITES</ButtomOff>
          </Link>
          <Link to={"/property-contacted"} style={{ textDecoration: "none" }}>
            <ButtomOn>CONTACTED</ButtomOn>
          </Link>
        </BoxButtons>

        <h4>4 Properties found</h4>
        <ContainerCards>
          <RentalCard />
        </ContainerCards>
      </Container>
      {/* <FooterContent/> */}
    </>
  );
}

export default PropertyContacted;

// <Route path="/property-contacted" element={<PropertyContacted/>} />
