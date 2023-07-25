import { AiOutlineMinus } from 'react-icons/ai';

import { SimpleFlexContainer, FlexContainerL } from "../../pages/form";
import { CheckboxInput, MainInput } from "../input";
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import SimpleText from "../simpleText";
import { ModalBody, DoneContainer, PriceSectionContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { filterContext } from "../../context/filter-contex";
import { LoginButton, JoinButton } from "../button";
import { useContext } from 'react';

const MoreModal = (moreModal, setMoreModal) => {
    const {handleCheckboxChange, setMin, setMax} = useContext(filterContext)
    return ( 
        <ModalBody style={{left:"61%"}}>
            <SimpleContainer>
                <SimpleFlexContainer>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox" onChange={()=>handleCheckboxChange()}/>
                        <SimpleText>
                            Houses
                        </SimpleText>
                    </FlexContainerL>
                </SimpleFlexContainer>
                <div style={{padding: "10px"}}>
                    <Label> price range</Label>
                    <PriceSectionContainer>
                        {/* ------ */}
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
                        {/* ------ */}
                    </PriceSectionContainer>
                </div>
                <DoneContainer>
                    <LoginButton onClick={()=>{setMoreModal(!moreModal)}}>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default MoreModal;