import styled from "@emotion/styled";

import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import { MainJoinContainer, PinkContainer, InfoTitle } from "./join-select";
import Label from "../components/label";
import { SimpleContainer } from "./form";
import { MainInput } from "../components/input";
import InputBody from "../components/input";
import { LoginButton } from "../components/button";
import SimpleText from "../components/simpleText";

export const SignUpContainer = styled.form`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 388px;
`;

const LandlordSignUp = () => {
  return (
    <div>
      <NoLoggedNavBar />
      <MainJoinContainer>
        <PinkContainer />
      </MainJoinContainer>
      <SignUpContainer>
        <InfoTitle>Create your Account</InfoTitle>
        <SimpleContainer>
          <Label>name</Label>
          <InputBody>
            <MainInput placeholder="John Doe" />
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>email</Label>
          <InputBody>
            <MainInput placeholder="user@mail.com" />
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>phone</Label>
          <InputBody>
            <MainInput placeholder="999-999-999" />
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>password</Label>
          <InputBody>
            <MainInput placeholder="******" />
          </InputBody>
          <SimpleText TextColor={"#8E8E8E"}>At least 6 characteres</SimpleText>
        </SimpleContainer>
        <SimpleContainer>
          <Label>password Confirmation</Label>
          <InputBody>
            <MainInput placeholder="******" />
          </InputBody>
        </SimpleContainer>
        <LoginButton>Create account</LoginButton>
      </SignUpContainer>
    </div>
  );
};

export default LandlordSignUp;
