import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import { MainJoinContainer, PinkContainer, InfoTitle } from "./join-select";
import Label from "../components/label";
import { SimpleContainer } from "./form";
import { MainInput } from "../components/input";
import InputBody from "../components/input";
import { LoginButton } from "../components/button";
import SimpleText from "../components/simpleText";
import { SignUpContainer } from "./lanlord-signup";
import { BASE_URI } from "../config";

const SeekerSignUp = () => {
    const [user, setUser] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "password": "",
        "role": "Seeker",
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
        </div>
    );
}
 
export default SeekerSignUp;