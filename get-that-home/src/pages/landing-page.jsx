import styled from "@emotion/styled";
import LandingImage from "../assets/landing-cover.svg"
import { typography } from "../styles/typography";

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
width: 1862px;
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

const TitleText = styled.p`
${typography.head.xl}
font-weight: 300;
margin: 0;
`
const SubtitleText = styled.p`
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
  padding: 64px 132px;
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
`

const SignupSection = styled.div`
height: 184px;
padding: 64px 10px;
display: flex;
flex-direction: column;
justify-content: flex-start;
place-items: center;
background-color: #F48FB1;
width: 100%;
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
        </SecondSection>
        <SignupSection>
          <SignupText>Getting someone to rent your apartment has never been this easy</SignupText>
        </SignupSection>
      </Container>
    </GeneralContainer>
  )
}

export default LandingPage;