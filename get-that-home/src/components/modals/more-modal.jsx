import { AiOutlineMinus } from 'react-icons/ai';

import { SimpleFlexContainer, FlexContainerL } from "../../pages/form";
import { CheckboxInput, MainInput } from "../input";
import SimpleText from "../simpleText";
import { ModalBody, DoneContainer, PriceSectionContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { LoginButton, JoinButton } from "../button";

const MoreModal = () => {
    return ( 
        <ModalBody style={{left:"61%"}}>
            <SimpleContainer>
                <SimpleFlexContainer>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"/>
                        <SimpleText>
                            Houses
                        </SimpleText>
                    </FlexContainerL>
                </SimpleFlexContainer>
                <div style={{padding: "10px"}}>
                    <Label> price range</Label>
                    <PriceSectionContainer>
                        <JoinButton>
                            <MainInput placeholder="min"/>
                        </JoinButton>
                        <AiOutlineMinus color="#8E8E8E" fontSize={50}/>
                        <JoinButton>
                            <MainInput placeholder="max"/>
                        </JoinButton>
                    </PriceSectionContainer>
                </div>
                <DoneContainer>
                    <LoginButton>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default MoreModal;