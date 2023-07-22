import styled from "@emotion/styled";

import SimpleText from "../simpleText";
import { ModalBody, DoneContainer } from "./price-modal";
import { SimpleContainer } from "../../pages/form";
import Label from "../label";
import { LoginButton } from "../button";

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
    return ( 
        <ModalBody style={{left:"51%"}}>
            <SimpleContainer>
                <SimpleContainer>
                    <Label>beds</Label>
                    <OptionNumberContainer>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                Any
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                1+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                2+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                3+
                            </SimpleText>
                        </CurrentOption>
                        <LastOption>
                            <SimpleText TextColor={TextColor}>
                                4+
                            </SimpleText>
                        </LastOption>
                    </OptionNumberContainer>
                </SimpleContainer>
                
                <SimpleContainer>
                    <Label>baths</Label>
                    <OptionNumberContainer>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                Any
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                1+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                2+
                            </SimpleText>
                        </CurrentOption>
                        <CurrentOption>
                            <SimpleText TextColor={TextColor}>
                                3+
                            </SimpleText>
                        </CurrentOption>
                        <LastOption>
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