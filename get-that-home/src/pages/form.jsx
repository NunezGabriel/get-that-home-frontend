import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowBarUp } from "react-icons/bs";
import { Link } from "react-router-dom";

import LanlordNavBar from "../components/navBar/lanlordNavBar";
import MainTitle from "../components/mainTitle";
import Label from "../components/label";
import { Text, SubTitle } from "../components/simpleText";
import SimpleText from "../components/simpleText";
import InputBody from "../components/input";
import {
  MainInput,
  CheckboxInput,
  MainSelect,
  OptionInput,
  TextAreaInput,
} from "../components/input";
import { ChooseButton, MainButton } from "../components/button";

export const MainContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 32px;
  display: grid;
  gap: 16px;
`;

export const SimpleContainer = styled.div`
  display: grid;
  gap: 4px;
`;
export const SimpleFlexContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const FlexContainerL = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #8e8e8e;
  width: 100px;
  height: 37px;
  overflow: hidden;
`;
export const ImgContainer = styled.div`
  display: inline-flex;
  padding: 8px;
  align-items: flex-start;
  gap: 16px;
  width: 600px;
  height: 136px;
  background: #f5f5f6;
`;
const Form = () => {
  //   return (
  //     <div>
  //       <p>hola mundo</p>
  //     </div>
  //   );
  const SwitchOption = styled.div`
    display: flex;
    width: 50px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: "red";
    border-right: 1px solid #8e8e8e;
  `;
  const SecondSwitchOption = styled.div`
    display: flex;
    width: 50px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: white;
  `;
  return (
    <div>
      <LanlordNavBar />
      <MainContainer>
        <MainTitle>Create a property listing</MainTitle>
        <SimpleContainer>
          <Label>Operation Type</Label>
          <SwitchContainer>
            <SwitchOption>
              <SimpleText TextColor={"white"}>Rent</SimpleText>
            </SwitchOption>
            <SecondSwitchOption>
              <Link to={"/form-sale"} style={{ textDecoration: "none" }}>
                <SimpleText TextColor={"#616161"}>Sale</SimpleText>
              </Link>
            </SecondSwitchOption>
          </SwitchContainer>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Address</Label>
          <InputBody>
            <BiSearch color="#8E8E8E" />
            <MainInput placeholder="start typing to autocomplete" />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>montly rent</Label>
          <InputBody>
            <RiMoneyDollarCircleLine color="#8E8E8E" />
            <MainInput placeholder="2000" />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Maintanance</Label>
          <InputBody>
            <RiMoneyDollarCircleLine color="#8E8E8E" />
            <MainInput placeholder="100" />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Property Type</Label>
          <SimpleFlexContainer>
            <FlexContainerL>
              <CheckboxInput type="checkbox" />
              <SimpleText>Apartment</SimpleText>
            </FlexContainerL>
            <FlexContainerL>
              <CheckboxInput type="checkbox" />
              <SimpleText>House</SimpleText>
            </FlexContainerL>
          </SimpleFlexContainer>
        </SimpleContainer>

        <SimpleFlexContainer>
          <SimpleContainer>
            <Label>Bedrooms</Label>
            <MainSelect>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </MainSelect>
          </SimpleContainer>

          <SimpleContainer>
            <Label>Bathrooms</Label>
            <MainSelect>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </MainSelect>
          </SimpleContainer>

          <SimpleContainer>
            <Label>Area in m2</Label>
            <OptionInput type="number" placeholder="##" />
          </SimpleContainer>
        </SimpleFlexContainer>

        <SimpleContainer>
          <FlexContainerL>
            <CheckboxInput type="checkbox" />
            <SimpleText>Pets Allowed</SimpleText>
          </FlexContainerL>
          <Text style={{ width: "467px" }}>
            Allowing pets increases the likehood of renters liking the property
            by 9001%. It also makes you a better person.
          </Text>
        </SimpleContainer>

        <SimpleContainer>
          <Label>About this property</Label>
          <TextAreaInput placeholder="My apartment is great because..." />
          <Text>
            Renters will read this first, so highlight any features or important
            information the apartment has.
          </Text>
        </SimpleContainer>
        <SimpleContainer>
          <SubTitle>Photos</SubTitle>
          <SimpleContainer>
            <Label>Upload as many photos as you wish</Label>
            <SimpleFlexContainer>
              <ChooseButton>
                <BsArrowBarUp fontSize={25} color="white" />
                <SimpleText TextColor={"white"}>Choose a file</SimpleText>
              </ChooseButton>
              <SimpleText TextColor={"#616161"}>No file chosen</SimpleText>
            </SimpleFlexContainer>
            <Text>Only images, max 5MB</Text>
          </SimpleContainer>
        </SimpleContainer>
        <ImgContainer></ImgContainer>
        <MainButton>Publish property listing</MainButton>
      </MainContainer>
    </div>
  );
};

export default Form;
