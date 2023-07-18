import { BiSearch } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { AiFillHeart } from 'react-icons/ai';
import { LuArrowUpLeftFromCircle } from 'react-icons/lu';

import { NavContainer, ImgContainer, OptionsContianer, Finder } from "./noLoggedNavBar";
import { MainInput } from '../input';
import { JoinButton, LoginButton } from '../button';

const SeekerNavBar = () => {
    return ( 
        <NavContainer>
            <ImgContainer>
                esta es una imagen
            </ImgContainer>
            <OptionsContianer>
                <Finder>
                    <BiSearch fontSize={24} color="#616161"/>
                    <MainInput placeholder="FIND A HOME"/>
                </Finder>
                <JoinButton>
                    <LuArrowUpLeftFromCircle fontSize={20} color="#616161"/>
                    logout
                </JoinButton>
                <LoginButton>
                    <AiFillHeart fontSize={20} color="white"/>
                    Saved Properties
                </LoginButton>
                <LoginButton>
                    <GoPerson fontSize={20} color="white"/>
                    profile
                </LoginButton>
            </OptionsContianer>
        </NavContainer>
     );
}
 
export default SeekerNavBar;