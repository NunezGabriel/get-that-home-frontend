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
  position: relative;
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

const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding: 8px 16px;
  height: 56px;
  width: 768px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 252px;
`;

const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-right: 1px solid #E1E2E1;
  padding: 0px 8px;
  gap: 8px;
`;

const SearchTitle = styled.p`
  ${typography.text.xs}
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: #616161;
  margin: 0;
`;

const Selector = styled.select`
  ${typography.text.md}
  border: none;
  width: 144px;
  letterSpacing: 0.5px, 
  color: #373737;
  padding-left: 0;
`

const OptionP = styled.option`
  ${typography.text.sm}
  font-weight: 400;
  letter-spacing: 0.25px;
  color: #616161;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0px 8px 8px;
`;

const SearchButton = styled.button`
  width: 96px;
  height: 40px;
  background: #F48FB1;
  border-radius: 16px;
  border: none;
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
`;

const ButtonText = styled.p`
  ${typography.text.sm}
  font-weight: 500;
  letter-spacing: 1.25px;
  color: #FFFFFF;
`;

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
          <SearchContainer>
            <FilterBox style={{ width: "160px"}}>
              <SearchTitle>I AM LOOKING FOR</SearchTitle>
              <Selector required name="property_type" >
              <OptionP value="Apartment">An apartment</OptionP>
              <OptionP value="House">A house</OptionP>
              </Selector>
            </FilterBox>
            <FilterBox style={{ width: "160px"}}>
              <SearchTitle>I WANT TO</SearchTitle>
              <Selector required name="operation_type">
              <OptionP value="Apartment">Rent</OptionP>
              <OptionP value="House">Buy</OptionP>
              </Selector>
            </FilterBox>
            <FilterBox style={{ width: "304px"}}>
              <SearchTitle>WHERE</SearchTitle>
              <Selector required name="district" style={{ width: "288px"}}>
              <OptionP disabled hidden>Favorite district</OptionP>
              <OptionP value="Mexico City">Mexico City</OptionP>
              <OptionP value="Lima">Lima</OptionP>
              <OptionP value="Los Angeles">Los Angeles</OptionP>
              <OptionP value="Timbuctu">Timbuctu</OptionP>
              <OptionP value="Groenlandia">Groenlandia</OptionP>
              </Selector>
            </FilterBox>
            <ButtonDiv>
              <SearchButton>
                <ButtonText>SEARCH</ButtonText>
              </SearchButton>
            </ButtonDiv>
          </SearchContainer>
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
          gitHubUrl="https://github.com/pdroariasvilela" 
          linkedInUrl=""
          img={pedropic}/>
          <TeamMemberCard name="Diego Gómez" 
          gitHubUrl="https://github.com/DiegoGomezCuadross" 
          linkedInUrl=""
          img={diegopic}/>
          <TeamMemberCard name="Jorge Rosano" 
          gitHubUrl="https://github.com/jorge-ross" 
          linkedInUrl=""
          img={jorgepic}/>
        </TeamMembersSection>
        </TeamSection>
      </Container>
    </GeneralContainer>
  )
}

export default LandingPage;