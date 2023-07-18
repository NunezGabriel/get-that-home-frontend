import styled from "@emotion/styled";
import LandingImage from "../assets/landing-cover.svg"
import { typography } from "../styles/typography";

import TeamMemberCard from "../components/team-card";
import gabrielpic from "../assets/prov-1.jpg"
import danielpic from "../assets/prov-2.jpg"
import pedropic from "../assets/prov-3.jpg"
import diegopic from "../assets/prov-4.jpg"
import jorgepic from "../assets/prov-5.jpg"
import RentalCard from "../components/rental-card";
import rentalImage from "../assets/home-img/home-1.svg"

const GeneralContainer = styled.div`
display: flex;
justify-content: center;
`

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
place-items: center;
padding-top: 32px;
width: 1440px;
`

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  place-items: center;
  width: 100%;
  height: 600px;
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 679px;
height: 128px;
margin-top: 60px;;
gap: 8px;
`

export const TitleText = styled.p`
${typography.head.xl}
font-weight: 300;
margin: 0;
`
export const SubtitleText = styled.p`
${typography.head.sm}
font-weight: 400;
color: #616161;
margin: 0;
`

const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  place-items: center;
  width: 100%;
  height: 476px;
  padding: 64px 0px;
`

const DemoText = styled.p`
${typography.text.sm}
font-weight: 500;
margin: 0;
`

const DemoTitleText = styled.p`
${typography.head.lg}
font-weight: 400;
color: #BF5F82;
margin: 0;
padding-top: 16px;
padding-bottom: 32px;
`

const RentalContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(3, 300px);
  align-items: center;
`;


const SignupSection = styled.div`
  height: 184px;
  padding: 64px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  place-items: center;
  background-color: var(--shallow-pink, rgba(244, 143, 177, 0.15));;
  width: 100%;
  position: relative;
`
const SignupText = styled.p`
${typography.head.lg}
font-weight: 400;
letter-spacing: 1px;
margin: 0;
width: 823px;
text-align: center;
padding-bottom: 32px;
`

const SignupButton = styled.button`
  ${typography.text.sm}
  width: 264px;
  height: 56px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 16px 24px;
  color: #FFFFFF;
  position: absolute;
  bottom: 64px;
`;

const TeamSection = styled.div`
  width: 100%;
  height: 486px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 64px 0px;
  gap: 26px;
`

const TeamText = styled.p`
  ${typography.head.xxl}
  font-weight: 400;
  color: #BF5F82;
  margin: 0;
  text-align: center;
`

const TeamMembersSection = styled.div`
  width: fit-content;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(5, 250px);
  align-items: center;
`;

function LandingPage() {
  return (
    <GeneralContainer>
      <Container>
        <FirstSection style={{ backgroundImage: `url(${LandingImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat", 
        }}>    
          <TextContainer>
            <TitleText>Meet your new Home</TitleText>
            <SubtitleText>The easiest way to find where you belong</SubtitleText>
          </TextContainer>
        </FirstSection>
        <SecondSection>
          <DemoText>Find an Apartment you Love</DemoText>
          <DemoTitleText>Homes for rent at the best prices</DemoTitleText>
          <RentalContainer>
            <RentalCard img={rentalImage}/>
            <RentalCard img={rentalImage}/>
            <RentalCard img={rentalImage}/>
          </RentalContainer>
        </SecondSection>
        <SignupSection>
          <SignupText>Getting someone to rent your apartment has never been this easy</SignupText>
          <SignupButton>Create Account Now</SignupButton>
        </SignupSection>
        <TeamSection>
          <TeamText>Meet the team</TeamText>
        <TeamMembersSection>
          <TeamMemberCard name="Gabriel Nuñez" 
          gitHubUrl="https://github.com/NunezGabriel" 
          linkedInUrl=""
          img={gabrielpic}/>
          <TeamMemberCard name="Daniel Toledo" 
          gitHubUrl="" 
          linkedInUrl=""
          img={danielpic}/>
          <TeamMemberCard name="Pedro Arias" 
          gitHubUrl="https://github.com/NunezGabriel" 
          linkedInUrl=""
          img={pedropic}/>
          <TeamMemberCard name="Diego Gómez" 
          gitHubUrl="https://github.com/NunezGabriel" 
          linkedInUrl=""
          img={diegopic}/>
          <TeamMemberCard name="Jorge Rosano" 
          gitHubUrl="https://github.com/NunezGabriel" 
          linkedInUrl=""
          img={jorgepic}/>
        </TeamMembersSection>
        </TeamSection>
      </Container>
    </GeneralContainer>
  )
}

export default LandingPage;