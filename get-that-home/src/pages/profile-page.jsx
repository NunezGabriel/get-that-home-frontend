import { MainJoinContainer, PinkContainer, InfoTitle } from "./join-select";
import Label from "../components/label";
import { SimpleContainer } from "./form";
import { MainInput } from "../components/input";
import { SignUpContainer } from "./lanlord-signup";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";

const ContainerInput = styled.div`
  display: flex;
  height: 20px;
  width: 356px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #f48fb1;
  background: #fff;
`;

const ProfilePage = () => {
  const { user, updateProfile } = useAuth();
  console.log(user);
  const [formData, setFormData] = useState({
    email: user.email || "",
    name: user.name || "",
    phone: user.phone || "",
  });

  const { email, name, phone } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ email, name, phone });

    updateProfile(formData);
  }
  return (
    <div>
      <LanlordNavBar />
      <MainJoinContainer>
        <PinkContainer />
      </MainJoinContainer>
      <SignUpContainer onSubmit={handleSubmit}>
        <InfoTitle>Create your Account</InfoTitle>
        <SimpleContainer>
          <Label>name</Label>
          <ContainerInput>
            <MainInput
              id="name"
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </ContainerInput>
        </SimpleContainer>
        <SimpleContainer>
          <Label>email</Label>
          <ContainerInput>
            <MainInput
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </ContainerInput>
        </SimpleContainer>
        <SimpleContainer>
          <Label>phone</Label>
          <ContainerInput>
            <MainInput
              id="phone"
              type="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </ContainerInput>
        </SimpleContainer>
        <button
          style={{
            display: "flex",
            padding: "8px 16px",
            alignItems: "center",
            gap: "8px",
            borderRadius: "16px",
            height: "36px",
            color: "white",
            textAlign: "center",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "1.25px",
            textTransform: "uppercase",
            backgroundColor: "#f48fb1",
            cursor: "pointer",
            border: "none",
          }}
        >
          Create account
        </button>
      </SignUpContainer>
    </div>
  );
};

export default ProfilePage;
