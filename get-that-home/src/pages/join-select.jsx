import styled from "@emotion/styled";

import { TitleText, SubtitleText } from "./landing-page";
import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";

const MainJoinContainer = styled.div`
    height: 705px;
`
const PinkContainer = styled.div`
    background-color: rgba(244, 143, 177, 0.15);
    height: 352px;
`
const OptionJoinContainer = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 54px;
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
`

const JoinSelect = () => {


    return ( 
        <div>
            <NoLoggedNavBar/>
            <MainJoinContainer>
                <PinkContainer>
                    <SubtitleText>Selecciona el perfil con el que te identificas</SubtitleText>
                    <TitleText>Que estas buscando?</TitleText>
                </PinkContainer>
                <OptionJoinContainer>
                    <OptionJoin></OptionJoin>
                    <OptionJoin></OptionJoin>
                </OptionJoinContainer>
            </MainJoinContainer>
        </div>
     );
}
 
export default JoinSelect; 