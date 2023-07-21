import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

import {
  NavContainer,
  ImgContainer,
  OptionsContianer,
  Finder,
} from "./noLoggedNavBar";
import { MainInput } from "../input";
import { JoinButton, LoginButton } from "../button";

const SeekerNavBar = () => {
  const { logout } = useAuth();

  return (
    <NavContainer>
      <Link to={"/"}>
        <ImgContainer>
          <img src={logo} />
        </ImgContainer>
      </Link>
      <OptionsContianer>
        <Link to={"/property-not-logged"}>
          <Finder>
            <BiSearch fontSize={24} color="#616161" />
            <MainInput placeholder="FIND A HOME" />
          </Finder>
        </Link>
        <JoinButton onClick={logout} style={{ cursor: "pointer" }}>
          <LuArrowUpLeftFromCircle fontSize={20} color="#616161" />
          logout
        </JoinButton>
        <LoginButton>
          <AiFillHeart fontSize={20} color="white" />
          Saved Properties
        </LoginButton>
        <LoginButton>
          <GoPerson fontSize={20} color="white" />
          profile
        </LoginButton>
      </OptionsContianer>
    </NavContainer>
  );
};

export default SeekerNavBar;
