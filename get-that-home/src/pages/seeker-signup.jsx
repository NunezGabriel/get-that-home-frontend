import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";
import { MainJoinContainer, PinkContainer, InfoTitle } from "./join-select";
import Label from "../components/label";
import { SimpleContainer } from "./form";
import { MainInput } from "../components/input";
import InputBody from "../components/input";
import { LoginButton } from "../components/button";
import SimpleText from "../components/simpleText";
import { SignUpContainer } from "./lanlord-signup";

const SeekerSignUp = () => {
    return ( 
        <div>
            <NoLoggedNavBar/>
            <MainJoinContainer>
                <PinkContainer/>
            </MainJoinContainer>
            <SignUpContainer>
                <InfoTitle>Create your Account</InfoTitle>
                <SimpleContainer>
                    <Label>name</Label>
                    <InputBody>
                        <MainInput placeholder="John Doe"/>
                    </InputBody>
                </SimpleContainer>
                <SimpleContainer>
                    <Label>email</Label>
                    <InputBody>
                        <MainInput placeholder="user@mail.com"/>
                    </InputBody>
                </SimpleContainer>
                <SimpleContainer>
                    <Label>phone</Label>
                    <InputBody>
                        <MainInput placeholder="999-999-999"/>
                    </InputBody>
                </SimpleContainer>
                <SimpleContainer>
                    <Label>password</Label>
                    <InputBody>
                        <MainInput placeholder="******"/>
                    </InputBody>
                    <SimpleText TextColor={"#8E8E8E"}>
                        At least 6 characteres
                    </SimpleText>
                </SimpleContainer>
                <SimpleContainer>
                    <Label>password Confirmation</Label>
                    <InputBody>
                        <MainInput placeholder="******"/>
                    </InputBody>
                </SimpleContainer>
                <LoginButton>
                    Create account
                </LoginButton>
            </SignUpContainer>
        </div>
    );
}
 
export default SeekerSignUp;