import { BiSearch } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { RiHome8Line } from 'react-icons/ri';
import { LuArrowUpLeftFromCircle } from 'react-icons/lu';
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';

import { NavContainer, ImgContainer, OptionsContianer, Finder } from "./noLoggedNavBar";
import { MainInput } from '../input';
import { JoinButton, LoginButton } from '../button';


const LanlordNavBar = () => {
    return ( 
        <NavContainer>
            <Link to={"/"}>
                <ImgContainer>
                    <img src={logo}/>
                </ImgContainer>
            </Link>

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
                    <RiHome8Line fontSize={20} color="white"/>
                    My Properties
                </LoginButton>
                <LoginButton>
                    <GoPerson fontSize={20} color="white"/>
                    profile
                </LoginButton>
            </OptionsContianer>
        </NavContainer>
     );
}
 
export default LanlordNavBar;