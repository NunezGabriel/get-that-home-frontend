import styled from "@emotion/styled";

const Main = styled.h1`
    font-family: Montserrat;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px; /* 133.333% */
    letter-spacing: 0.25px;
    color: black;
    font-family: "Roboto", sans-serif;
`

const MainTitle = ({children}) => {
    return ( 
        <Main>
            {children}
        </Main>
    );
}
 
export default MainTitle;