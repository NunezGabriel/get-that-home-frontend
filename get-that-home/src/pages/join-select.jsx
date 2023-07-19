import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import rafiki from "../assets/rafiki.svg"
import pana from "../assets/pana.svg"

export const MainJoinContainer = styled.div`
    height: 705px;
    position: relative;
`
export const PinkContainer = styled.div`
    background-color: rgba(244, 143, 177, 0.15);
    height: 322px;
    text-align: center;
    padding-top: 64px;
`
const OptionJoinContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 54px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const OptionJoin = styled.div`
    display: flex;
    padding: 16px 20px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
    width: 280px;
    height: 274px;
`
const Subtitle = styled.h3`
    color: #1D4044;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
`
const Title = styled.h1`
    color: #1D4044;
    font-size: 64px;
    font-style: normal;
    font-weight: 100;
    line-height: 88px; 
    letter-spacing: -0.5px;
    margin: 0;
`
const InfoContainer = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    gap: 6px;
`
export const InfoTitle = styled.h2`
    color: #373737;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.15px;
    margin: 0;
`

const InfoText = styled.p`
    color: #373737;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; 
    letter-spacing: 0.1px;
    margin: 0;
`
const JoinSelect = () => {

    return ( 
        <div>
            <NoLoggedNavBar/>
            <MainJoinContainer>
                <PinkContainer>
                    <Subtitle>Selecciona el perfil con el que te identificas</Subtitle>
                    <Title>Que estas buscando?</Title>
                </PinkContainer>
                <OptionJoinContainer>
                    <Link to={"/landlord-signup"} style={{textDecoration: "none"}}>
                        <OptionJoin>
                            <img src={rafiki} alt="money img" style={{width: "270px", height:"180px"}}/>
                            <InfoContainer>
                                <InfoTitle>
                                    Landlord
                                </InfoTitle>
                                <InfoText>
                                    You want to rent or sell a home
                                </InfoText>
                            </InfoContainer>
                        </OptionJoin>
                    </Link>

                    <Link to={"/seeker-signup"} style={{textDecoration: "none"}}>
                        <OptionJoin>
                            <img src={pana} alt="money img" style={{width: "270px", height:"180px"}}/>
                            <InfoContainer>
                                <InfoTitle>
                                    Home seeker
                                </InfoTitle>
                                <InfoText>
                                    You want to find a home
                                </InfoText>
                            </InfoContainer>
                        </OptionJoin>
                    </Link>
                </OptionJoinContainer>
            </MainJoinContainer>
        </div>
     );
}
 
export default JoinSelect; 