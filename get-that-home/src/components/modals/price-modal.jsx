import styled from "@emotion/styled";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { AiOutlineMinus } from 'react-icons/ai';
import { useContext } from "react";

import { filterContext } from "../../context/filter-contex";
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
    const {min, max, setMin, setMax} = useContext(filterContext)
    return ( 
        <ModalBody style={{left:"31%"}}>
            <SimpleContainer>
                <Label> price range</Label>
                <PriceSectionContainer>
                    <JoinButton>
                        <RiMoneyDollarCircleLine fontSize={24} color="#8E8E8E"/>
                        <MainInput placeholder="min" onChange={(e)=>{
                            if (e.target.value == "") setMin(0);
                            else parseInt(setMin(e.target.value));
                        }}/>
                    </JoinButton>
                    <AiOutlineMinus color="#8E8E8E" fontSize={50}/>
                    <JoinButton>
                        <RiMoneyDollarCircleLine fontSize={24} color="#8E8E8E"/>
                        <MainInput placeholder="max" onChange={(e)=>{
                            if (e.target.value == "") setMax(10000000);
                            else setMax(parseInt(e.target.value));
                        }}/>
                    </JoinButton>
                </PriceSectionContainer>
                <DoneContainer>
                    <LoginButton >
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default PriceModal;