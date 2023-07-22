import { SimpleFlexContainer, FlexContainerL } from "../../pages/form";
import { CheckboxInput } from "../input";
import SimpleText from "../simpleText";
import { ModalBody, DoneContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { LoginButton } from "../button";


const PropertyTypeModal = () => {
    return ( 
        <ModalBody style={{left:"41%"}}>
            <SimpleContainer>
                <Label> price range</Label>
                <SimpleFlexContainer>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"/>
                        <SimpleText>
                            Houses
                        </SimpleText>
                    </FlexContainerL>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"/>
                        <SimpleText>
                            Apartments
                        </SimpleText>
                    </FlexContainerL>
                </SimpleFlexContainer>
                <DoneContainer>
                    <LoginButton>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default PropertyTypeModal;