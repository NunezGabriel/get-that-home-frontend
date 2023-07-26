import { BiSearch } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { RiHome8Line } from "react-icons/ri";
import { LuArrowUpLeftFromCircle } from "react-icons/lu";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleLogOut=()=> {
    logout();
    navigate("/")
  }
  return (
    <NavContainer>
      <Link to={"/"}>
        <ImgContainer>
          <img src={logo} />
        </ImgContainer>
      </Link>

      <OptionsContianer>
        <Link to={"/landlord-properties"} style={{ textDecoration: "none" }}>
          <Finder>
            <BiSearch fontSize={24} color="#616161" />
            <MainInput placeholder="FIND A HOME" style={{cursor: "pointer"}}/>
          </Finder>
        </Link>
        <JoinButton onClick={()=>{handleLogOut()}} style={{ cursor: "pointer" }}>
          <LuArrowUpLeftFromCircle fontSize={20} color="#616161" />
          logout
        </JoinButton>
        <Link to={"/property-active"} style={{ textDecoration: "none" }}>
          <LoginButton>
            <RiHome8Line fontSize={20} color="white" />
            My Properties
          </LoginButton>
        </Link>
        <Link to={"/profile"} style={{ textDecoration: "none" }}>
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
