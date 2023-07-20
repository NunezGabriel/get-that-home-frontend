import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";

const Container = styled.div`
  background-color: #f6f6f9;
`;

const Input = styled.input``;

const Form = styled.form`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f9;
  max-width: 414px;
  height: 504px;
`;

const InputWrapper = styled.div`
    display: flex
    flex-direction: column;

    gap: 20px;
`;

const Button = styled.button``;

function LoginForm() {
  const { login } = useAuth();

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            id="email"
            name="email"
            label={"Email adress"}
            type="email"
            value={email}
            placeholder="my_mail@mail.com"
            onChange={handleChange}
          ></Input>
          <Input
            id="password"
            name="password"
            label={"Password"}
            type="password"
            value={password}
            placeholder="******"
            onChange={handleChange}
          ></Input>
        </InputWrapper>
        <Button rounded>Login</Button>
      </Form>
    </Container>
  );
}
export default LoginForm;
