import { TbUserPlus } from 'react-icons/tb';

import styled from "@emotion/styled";
import { SimpleContainer } from "./form";
import Label from "../components/label";
import InputBody from "../components/input";
import { MainInput } from "../components/input";
import { LoginButton } from "../components/button";
import NoLoggedNavBar from '../components/navBar/noLoggedNavBar';


const LogginBody = styled.div`
    display: inline-flex;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background-color: #FFF;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
    position: absolute;
    top: 30%;
    left: 35%;
    `
const MainText = styled.h2`
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
` 
const LogginPage = () => {
    return ( 
        <div>
            <NoLoggedNavBar/>
            <LogginBody>
                <MainText>Login</MainText>
                <SimpleContainer>
                    <SimpleContainer>
                        <Label>email</Label>
                        <InputBody>
                            <MainInput placeholder="user@mail.com"/>
                        </InputBody>
                    </SimpleContainer>
                    <SimpleContainer>
                        <Label>password</Label>
                        <InputBody>
                            <MainInput placeholder="********"/>
                        </InputBody>
                    </SimpleContainer>
                </SimpleContainer>
                <LoginButton>
                    <TbUserPlus fontSize={20} color="white"/>
                    login
                </LoginButton>
            </LogginBody>
        </div>
    );
}
 
export default LogginPage;