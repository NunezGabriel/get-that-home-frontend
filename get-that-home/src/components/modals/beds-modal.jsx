import styled from "@emotion/styled";

import SimpleText from "../simpleText";
import { ModalBody, DoneContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { LoginButton } from "../button";
import { filterContext } from "../../context/filter-contex";
import { useContext } from "react";


const OptionNumberContainer = styled.div`
    display: flex;
    border: 1px solid #8E8E8E;
    width: fit-content;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 30px;
`
const CurrentOption = styled.div`
    padding: 8px;
    border-right: 1px solid #8E8E8E;
`
const LastOption = styled.div`
    border-right: 0px;
    padding: 8px;
`

const BedModal = (TextColor) => {
    const {setBaths, setBeds, baths, beds} = useContext(filterContext) 

    return ( 
        <ModalBody style={{left:"51%"}}>
            <SimpleContainer>
                <SimpleContainer>
                    <Label>beds</Label>
                    <OptionNumberContainer>
                        <CurrentOption className={beds == 0 && 'active'} onClick={() => setBeds(0)}>
                            <SimpleText TextColor={TextColor}>
                                Any
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={beds == 1 && 'active'} onClick={() => setBeds(1)}>
                            <SimpleText TextColor={TextColor}>
                                1+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={beds == 2 && 'active'} onClick={() => setBeds(2)}>
                            <SimpleText TextColor={TextColor}>
                                2+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={beds == 3 && 'active'} onClick={() => setBeds(3)}>
                            <SimpleText TextColor={TextColor}>
                                3+
                            </SimpleText>
                        </CurrentOption >
                        <LastOption className={beds == 4 && 'active'} onClick={() => setBeds(4)}>
                            <SimpleText TextColor={TextColor}>
                                4+
                            </SimpleText>
                        </LastOption>
                    </OptionNumberContainer>
                </SimpleContainer>
                
                <SimpleContainer>
                    <Label>baths</Label>
                    <OptionNumberContainer>
                        <CurrentOption className={baths == 0 && 'active'} onClick={() => setBaths(0)}>
                            <SimpleText TextColor={TextColor}>
                                Any
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={baths == 1 && 'active'} onClick={() => setBaths(1)}>
                            <SimpleText TextColor={TextColor}>
                                1+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={baths == 2 && 'active'} onClick={() => setBaths(2)}>
                            <SimpleText TextColor={TextColor}>
                                2+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption className={baths == 3 && 'active'} onClick={() => setBaths(3)}>
                            <SimpleText TextColor={TextColor}>
                                3+
                            </SimpleText>
                        </CurrentOption>
                        <LastOption className={baths == 4 && 'active'} onClick={() => setBaths(4)}>
                            <SimpleText TextColor={TextColor}>
                                4+
                            </SimpleText>
                        </LastOption>
                    </OptionNumberContainer>
                </SimpleContainer>
                <DoneContainer>
                    <LoginButton>
                        DONE
                    </LoginButton>
                </DoneContainer>
            </SimpleContainer>
        </ModalBody>
    );
}
 
export default BedModal;