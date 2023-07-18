import styled from "@emotion/styled";

const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 72px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
`
const ImgContainer = styled.div`
    width: 136px;
    height: 40px;
`

const NoLoggedNavBar = () => {
    return ( 
        <NavContainer>

        </NavContainer>
     );
}
 
export default NoLoggedNavBar;