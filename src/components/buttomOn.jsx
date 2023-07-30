import styled from "@emotion/styled";
import { typography } from "../styles/typography";

function ButtomOn({children}){

    const Container = styled.div`
    margin: .5rem;
    `

    const ButtomNotBackground = styled.a`
        background-color: transparent;
        color : #373737;
        padding-bottom: .38rem;
        text-decoration: none;
        border-bottom: 0.125rem solid #F48FB1;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.07813rem;
        text-transform: uppercase;
        ${typography.text.sm}
    `

    return(
        <Container>
            <ButtomNotBackground href="">{children}</ButtomNotBackground>
        </Container>

    )
}

export default ButtomOn