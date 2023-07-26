import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URI } from "../config";
import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import { MainJoinContainer, PinkContainer, InfoTitle } from "./join-select";
import Label from "../components/label";
import { SimpleContainer } from "./form";
import { MainInput } from "../components/input";
import InputBody from "../components/input";
import { LoginButton } from "../components/button";
import SimpleText from "../components/simpleText";
import FooterContent from "../components/footer";

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

  const [user, setUser] = useState({
    "name": "",
    "email": "",
    "phone": "",
    "password": "",
    "role": "Landlord",
  })

  const{name, email, phone, password} = user;

  const handleChange = (e) =>{
      setUser({...user, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate();

  const handleSubmit = async() =>{
    console.log("hiciste click")
        try {
          const response = await fetch(`${BASE_URI}/users`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
          });
          const result = await response.json();
          console.log("Éxito:", result);
        } catch (error) {
          console.error("Error:", error); 
        };
        navigate("/login-page")
  }   
  return (
    <div>
      <NoLoggedNavBar />
      <MainJoinContainer>
        <PinkContainer />
      </MainJoinContainer>
      <SignUpContainer>
        <InfoTitle>Create your Landlord Account</InfoTitle>
        <SimpleContainer>
          <Label>name</Label>
          <InputBody>
            <MainInput placeholder="John Doe" value={name} name="name" onChange={(e)=>{handleChange(e)}}/>
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>email</Label>
          <InputBody>
            <MainInput placeholder="user@mail.com" value={email} name="email" onChange={(e)=>{handleChange(e)}}/>
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>phone</Label>
          <InputBody>
            <MainInput placeholder="999-999-999" value={phone} name="phone" onChange={(e)=>{handleChange(e)}}/>
          </InputBody>
        </SimpleContainer>
        <SimpleContainer>
          <Label>password</Label>
          <InputBody>
            <MainInput placeholder="******"value={password} name="password" onChange={(e)=>{handleChange(e)}}/>
          </InputBody>
          <SimpleText TextColor={"#8E8E8E"}>At least 6 characteres</SimpleText>
        </SimpleContainer>
        <LoginButton onClick={()=>{handleSubmit()}}>Create account</LoginButton>
      </SignUpContainer>
      <FooterContent/>
    </div>
  );
};

export default LandlordSignUp;
