import styled from "@emotion/styled";
import { BiSearch } from 'react-icons/bi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsArrowBarUp } from 'react-icons/bs';
import { Link } from "react-router-dom";

import MainTitle from "../components/mainTitle";
import Label from "../components/label";
import { Text, SubTitle } from "../components/simpleText";
import SimpleText from "../components/simpleText";
import InputBody from "../components/input";
import { MainInput, CheckboxInput, MainSelect, OptionInput, TextAreaInput } from "../components/input";
import { ChooseButton, MainButton } from "../components/button";

const MainContainer = styled.div`
    width: 1200px;
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


const ImgContainer = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: flex-start;
    gap: 16px;
    width: 600px;
    height: 136px;
    background: #F5F5F6;
`
const FormSale = ({b_color}) => {

    const SwitchOption = styled.div`
        display: flex;
        width: 50px;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: white;
        border-right: 1px solid #8E8E8E;
    `
    const SecondSwitchOption = styled.div`
        display: flex;
        width: 50px;
        padding: 8px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: ${b_color};
    `
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
                            <Link to={"/form"} style={{textDecoration: "none"}}>
                                <SimpleText TextColor={"#616161"}>
                                    Rent
                                </SimpleText>
                            </Link>
                        </SwitchOption>
                    <SecondSwitchOption>
                        <SimpleText TextColor={"white"}>
                            Sale
                        </SimpleText>
                    </SecondSwitchOption>
                </SwitchContainer>
            </SimpleContainer>


            <SimpleContainer>
                <Label>
                  Address
                </Label>
                <InputBody>
                    <BiSearch color="#8E8E8E"/>
                    <MainInput placeholder="start typing to autocomplete"/>
                </InputBody>
            </SimpleContainer>

            <SimpleContainer>
                <Label>
                    Price
                </Label>
                <InputBody>
                    <RiMoneyDollarCircleLine color="#8E8E8E"/>
                    <MainInput placeholder="2000"/>
                </InputBody>
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
            <ImgContainer></ImgContainer>
            <MainButton>
                Publish property listing 
            </MainButton>
        </MainContainer> 

     );
}
 
export default FormSale;