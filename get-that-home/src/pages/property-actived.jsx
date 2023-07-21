import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import ButtomOn from "../components/buttomOn";
import ButtomOff from "../components/buttonOf";
import RentalCard from "../components/rental-card";
// import FooterContent from "../components/footer";
import LanlordNavBar from "../components/navBar/lanlordNavBar";


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
`

const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;

`

function PropertyActive(){
    let img = "https://picfiles.alphacoders.com/422/422551.jpg"
    return(
        <>
        <LanlordNavBar/>      
        <Container> 
            <BoxButtons>

                <ButtomOn>ACTIVE</ButtomOn>
                <Link to={"/property-close"} style={{textDecoration: "none"}}>
                    <ButtomOff>CLOSED</ButtomOff>
                </Link>
            </BoxButtons>

            <h4>4 Properties found</h4>
        <ContainerCards>
            <RentalCard img={img}/>

                  
        </ContainerCards>
        </Container>
            {/* <FooterContent/> */}
        </>
    )
}

export default PropertyActive

// <Route path="/property-contacted" element={<PropertyContacted/>} />