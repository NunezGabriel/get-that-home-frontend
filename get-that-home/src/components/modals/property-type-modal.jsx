import { SimpleFlexContainer, FlexContainerL } from "../../pages/form";
import { CheckboxInput } from "../input";
import SimpleText from "../simpleText";
import { ModalBody, DoneContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { LoginButton } from "../button";
import { filterContext } from "../../context/filter-contex";
import { useContext } from "react";


const PropertyTypeModal = ({propertyTypeModal,setPropertyTypeModal}) => {
    const {handleCheckboxChange, handleCheckboxApartmentChange} = useContext(filterContext) 
    return ( 
        <ModalBody style={{left:"41%"}}>
            <SimpleContainer>
                <Label> price range</Label>
                <SimpleFlexContainer>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox" 
                        // checked={isChecked}
                        onChange={()=>handleCheckboxChange()}/>
                        <SimpleText>
                            Houses
                        </SimpleText>
                    </FlexContainerL>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"
                        onChange={()=>handleCheckboxApartmentChange()}/>
                        <SimpleText>
                            Apartments
                        </SimpleText>
                    </FlexContainerL>
                </SimpleFlexContainer>
                <DoneContainer>
                    <LoginButton onClick={()=>{setPropertyTypeModal(!propertyTypeModal)}}>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default PropertyTypeModal;