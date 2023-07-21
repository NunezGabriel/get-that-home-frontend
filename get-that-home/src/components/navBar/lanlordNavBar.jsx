import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { RiHome8Line } from "react-icons/ri";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

import {
  NavContainer,
  ImgContainer,
  OptionsContianer,
  Finder,
} from "./noLoggedNavBar";
import { MainInput } from "../input";
import { JoinButton, LoginButton } from "../button";
import { useAuth } from "../../context/auth-context";

const LanlordNavBar = () => {
  const { logout } = useAuth();
  return (
    <NavContainer>
      <Link to={"/"}>
        <ImgContainer>
          <img src={logo} />
        </ImgContainer>
      </Link>

      <OptionsContianer>
        <Finder>
          <BiSearch fontSize={24} color="#616161" />
          <MainInput placeholder="FIND A HOME" />
        </Finder>
        <JoinButton onClick={logout} style={{ cursor: "pointer" }}>
          <LuArrowUpLeftFromCircle fontSize={20} color="#616161" />
          logout
        </JoinButton>
        <Link to={"/property-active"} style={{ textDecoration: "none" }}>
          <LoginButton>
            <RiHome8Line fontSize={20} color="white" />
            My Properties
          </LoginButton>
        </Link>
        <Link to={"/profile"}>
          <LoginButton>
            <GoPerson fontSize={20} color="white" />
            profile
          </LoginButton>
        </Link>
      </OptionsContianer>
    </NavContainer>
  );
};

export default LanlordNavBar;
