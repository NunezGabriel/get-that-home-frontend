import styled from "@emotion/styled";
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { typography } from "../styles/typography";
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const MemberName = styled.p`
  ${typography.head.sm}
  font-weight: 400;
  color: #BF5F82;
  margin: 0;
  text-align: center;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 180px;
`

function TeamMemberCard({ name, gitHubUrl, linkedInUrl, img }) {
  TeamMemberCard.propTypes = {
    name: PropTypes.string,
    gitHubUrl: PropTypes.string,
    linkedInUrl: PropTypes.string,
    img: PropTypes.string,
  }

  return (
    <CardWrapper>
      <Img src={img} alt="Team member" />
      <DetailsWrapper>
        <MemberName>{name}</MemberName>
        <SocialMediaWrapper>
          <a href={gitHubUrl}> <AiOutlineGithub style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
          <a href={linkedInUrl}> <AiOutlineLinkedin style={{width: "20px", height: "19.51px", color: "#616161"}}/> </a>
        </SocialMediaWrapper>
      </DetailsWrapper>
    </CardWrapper>
  )
}

export default TeamMemberCard;