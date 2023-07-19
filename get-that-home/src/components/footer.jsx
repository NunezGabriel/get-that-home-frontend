import styled from '@emotion/styled';
import { DiRuby } from 'react-icons/di';
import { DiReact } from 'react-icons/di';
import { BsGithub } from 'react-icons/bs';
import { BsSuitHeartFill } from 'react-icons/bs';
import Logo from '../assets/logo.svg';

const Footer = styled.footer`
    margin-top: 2rem;
    background: #F5F5F6;
    color: var(--gray, #616161);
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: 0.01563rem;
`

const ContainerFooter = styled.div`
    max-width: 71rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;
    
`

const InfoCompany = styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 8.5rem;
        height: 2.5rem;
    }
    
`

const BoxMembers = styled.div`
    display: flex;
    width: 23.75rem;
    flex-direction: column;
`
const BoxNamesMembers = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: -1rem;
`

const Info = styled.p`
    margin-right: 1rem;
`
const BoxStack = styled.div`

`


function FooterContent(){
    return (
        <Footer>
        <ContainerFooter>
            <InfoCompany>
                <img src={Logo} alt="" />
                <p>© 202X - Get That Job</p>
                <p>Codeable - Cohort X Final Project</p>
            </InfoCompany>
            <BoxMembers>
                <p>Build with <BsSuitHeartFill/> by :</p>
                <BoxNamesMembers>
                <Info><BsGithub/> Gabriel Nuñez</Info>
                <Info><BsGithub/> Jorge Ross</Info>
                <Info><BsGithub/> Diego Gomez</Info>
                <Info><BsGithub/> Pedro Arias</Info>
                <Info><BsGithub/> Daniel Toledo</Info>
                </BoxNamesMembers>
            </BoxMembers>
            <BoxStack>
                <Info> Source code:</Info>
                <Info><DiRuby/> Ruby on Rails REST API</Info>
                <Info><DiReact/> React Responsive SPA</Info>
            </BoxStack>
        </ContainerFooter>
        </Footer>
            
    )
}

export default FooterContent;
