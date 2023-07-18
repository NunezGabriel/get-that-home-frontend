import styled from "@emotion/styled";
import { BiSearch } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsArrowBarUp } from 'react-icons/bs';

import MainTitle from "../components/mainTitle";
import Label from "../components/label";
import SimpleText from "../components/simpleText";
import Input from "../components/input";


const MainContainer = styled.div`
    width: 1200px;
    border: 1px solid red;
    margin: 0 auto;
    padding: 32px;
    display: grid;
    gap: 16px;
`

const SimpleContainer = styled.div`
    display: grid;
    gap: 4px;
`
const SimpleFlexContainer = styled.div`
    display: flex;
    gap: 16px;
`
const FlexContainerL = styled.div`
    display: flex; 
    gap: 4px;
    align-items: center;
`

const SwitchContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #8E8E8E;
    width: 100px;
    height: 37px;
    overflow: hidden;
`

const SwitchOption = styled.div`
    display: flex;
    width: 50px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
`

const MainInput = styled.input`
    color: #8E8E8E;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    border: none;
    outline: none;
    width: 100%;
`

const CheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    padding: 2px;
    gap: 10px;
    border: 1px solid #F48FB1;
`
const MainSelect = styled.select`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
    width: 100px;
`
const OptionInput = styled.input`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
    width: 100px;
`

const Text = styled.p`
    color: #616161;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.4px;
`
const TextAreaInput = styled.textarea`
    height: 60px;
    width: 600px;
    display: flex;
    padding: 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid #F48FB1;
    outline: none;
`
const SubTitle = styled.h1`
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.15px;
`
const ChooseButton = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    background: #F48FB1;
    height: 35px;
`

const Form = () => {
    return (
        <MainContainer>
            <MainTitle>
                Create a property listing
            </MainTitle>

            <SimpleContainer>
                <Label>
                    Operation Type
                </Label>
                <SwitchContainer>
                    <SwitchOption>
                        <SimpleText>
                            Rent
                        </SimpleText>
                    </SwitchOption>
                    <SwitchOption>
                        <SimpleText TextColor={"#616161"}>
                            Sale
                        </SimpleText>
                    </SwitchOption>
                </SwitchContainer>
            </SimpleContainer>


            <SimpleContainer>
                <Label>
                  Address
                </Label>
                <Input>
                    <BiSearch color="#8E8E8E"/>
                    <MainInput placeholder="start typing to autocomplete"/>
                </Input>
            </SimpleContainer>

            <SimpleContainer>
                <Label>
                 montly rent
                </Label>
                <Input>
                    <RiMoneyDollarCircleLine color="#8E8E8E"/>
                    <MainInput placeholder="start typing to autocomplete"/>
                </Input>
            </SimpleContainer>

            <SimpleContainer>
                <Label>
                Maintanance
                </Label>
                <Input>
                    <RiMoneyDollarCircleLine color="#8E8E8E"/>
                    <MainInput placeholder="start typing to autocomplete"/>
                </Input>
            </SimpleContainer>

            <SimpleContainer>
                <Label>
                 Property Type
                </Label>
                <SimpleFlexContainer>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"/>
                        <SimpleText>
                            Apartment
                        </SimpleText>
                    </FlexContainerL>
                    <FlexContainerL>
                        <CheckboxInput type="checkbox"/>
                        <SimpleText>
                            House
                        </SimpleText>
                    </FlexContainerL>
                </SimpleFlexContainer>
            </SimpleContainer>
            
            <SimpleFlexContainer>
                <SimpleContainer>
                    <Label>
                        Bedrooms
                    </Label>
                    <MainSelect>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </MainSelect>
                </SimpleContainer>

                <SimpleContainer>
                    <Label>
                        Bathrooms
                    </Label>
                    <MainSelect>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </MainSelect>
                </SimpleContainer>

                <SimpleContainer>
                    <Label>
                        Area in m2
                    </Label>
                    <OptionInput type="number" placeholder="##"/>
                </SimpleContainer>
            </SimpleFlexContainer>

            <SimpleContainer>
                <FlexContainerL>
                            <CheckboxInput type="checkbox"/>
                            <SimpleText>
                                Pets Allowed
                            </SimpleText>
                </FlexContainerL>
                <Text style={{width: "467px"}}>
                    Allowing pets increases the likehood of renters  liking the property by 9001%.
                    It also makes you a better person.
                </Text>
            </SimpleContainer>
            
            <SimpleContainer>
                <Label>About this property</Label>
                <TextAreaInput placeholder="My apartment is great because..."/>
                <Text>Renters will read this first, so highlight any features or important information the apartment has.</Text>
            </SimpleContainer>
            <SimpleContainer>
                <SubTitle>
                    Photos
                </SubTitle>
                <SimpleContainer>
                    <Label>
                        Upload as many photos as you wish
                    </Label>
                    <SimpleFlexContainer>
                        <ChooseButton>
                            <BsArrowBarUp fontSize={25} color="white"/>
                            <SimpleText TextColor={"white"}>
                                Choose a file
                            </SimpleText>
                        </ChooseButton>
                        <SimpleText TextColor={"#616161"}>
                            No file chosen
                        </SimpleText>
                    </SimpleFlexContainer>
                    <Text>Only images, max 5MB</Text>
                </SimpleContainer>
            </SimpleContainer>

        </MainContainer> 

     );
}
 
export default Form;