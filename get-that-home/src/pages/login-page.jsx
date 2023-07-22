import styled from "@emotion/styled";
import { TbUserPlus } from "react-icons/tb";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import { SimpleContainer } from "./form";
import Label from "../components/label";
import InputBody from "../components/input";
import { MainInput } from "../components/input";
import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import { useNavigate } from "react-router-dom";

const LogginBody = styled.form`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 30%;
  left: 35%;
`;
const MainText = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`;

const Button = styled.button``;

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "team2@mail.com",
    password: "qwerty",
  });

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    // toast("adsasd")
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(formData);
    // toast.success("Successfully loged in!")
  }

  return (
    <div>
      <NoLoggedNavBar />
      <LogginBody onSubmit={handleSubmit}>
        <MainText>Login</MainText>
        <SimpleContainer>
          <SimpleContainer>
            <Label>email</Label>
            <InputBody>
              <MainInput
                id="email"
                name="email"
                label={"Email adress"}
                type="email"
                // value={email}
                onChange={handleChange}
                placeholder="user@mail.com"
              />
            </InputBody>
          </SimpleContainer>
          <SimpleContainer>
            <Label>password</Label>
            <InputBody>
              <MainInput
                id="password"
                name="password"
                label={"Password"}
                type="password"
                // value={password}
                placeholder="******"
                onChange={handleChange}
              />
            </InputBody>
          </SimpleContainer>
        </SimpleContainer>
        <Button>
          <TbUserPlus fontSize={20} color="white" />
          login
        </Button>
      </LogginBody>
    </div>
  );
}
export default LoginForm;
