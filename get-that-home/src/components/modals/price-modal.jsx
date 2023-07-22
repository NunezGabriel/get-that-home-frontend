import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineMinus } from 'react-icons/ai';

import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { MainInput } from "../input";
import { JoinButton, LoginButton } from "../button";

export const ModalBody = styled.div`
    display: inline-flex;
    padding: 8px;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
    background-color: #FFF;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 100%;
    width: 247px;
`

export const PriceSectionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
export const DoneContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const PriceModal = () => {
    return ( 
        <ModalBody style={{left:"31%"}}>
            <SimpleContainer>
                <Label> price range</Label>
                <PriceSectionContainer>
                    <JoinButton>
                        <RiMoneyDollarCircleLine fontSize={24} color="#8E8E8E"/>
                        <MainInput placeholder="min"/>
                    </JoinButton>
                    <AiOutlineMinus color="#8E8E8E" fontSize={50}/>
                    <JoinButton>
                        <RiMoneyDollarCircleLine fontSize={24} color="#8E8E8E"/>
                        <MainInput placeholder="max"/>
                    </JoinButton>
                </PriceSectionContainer>
                <DoneContainer>
                    <LoginButton>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default PriceModal;