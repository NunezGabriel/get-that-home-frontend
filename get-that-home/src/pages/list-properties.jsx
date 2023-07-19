import styled from "@emotion/styled";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { typography } from "../styles/typography";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
place-items: center;
padding: 0px 120px 32px;
width: 1440px;
position: relative;
margin-top: 72px;
`

const FilterContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  width: 1136px;
  border-radius: 8px;
  position: absolute;
  top: 32px;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #F48FB1;
  width: 224px;
  height: 40px;
  margin-right: 96px;
  padding-left: 8px;
  border-radius: 8px;
`

const SearchInput = styled.input`
  ${typography.text.md}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  width: 224px;
  height: 24px;
  letter-spacing: 0.25px;
  color: #8E8E8E;
  border: none;
  outline: none;
`;

const Button = styled.button`
  ${typography.text.sm}
  letter-spacing: 1.25px;
  font-weight: 500;
  width: auto;
  height: 40px;
  border: none;
  background: #F48FB1;
  border-radius: 16px;
  padding: 8px 16px;
  color: #FFFFFF;
  align-items: center;
  margin-right: 8px;
  gap: 8px;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border: 2px solid #F48FB1;
  width: 185px;
  height: 40px;
  border-radius: 8px;
  position: absolute;
  right: 0;
`

const OptionSelector = styled.select`
  ${typography.text.md}
  display: flex;
  flex-direction: row;
  letter-spacing: 0.25px;
  width: 176px;
  color: #373737;
  border: none;
  outline: none;
  padding-left: 8px;
`


const OptionItem = styled.option`
  ${typography.text.sm}
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #8E8E8E;
  padding: 8px;
  margin-bottom: 8px;
  list-style: none;
`;

function ListProperties() {

  return (
    <Container>
      <FilterContainer>
        <SearchContainer>
          <FiSearch style={{ color: "#8E8E8E",
          width: 20,
          height: 20,
          }}/>
          <SearchInput placeholder="Search by address"/>
        </SearchContainer>
        <Button>PRICE</Button>
        <Button>PROPERTY TYPE</Button>
        <Button>BEDS & BATHS</Button>
        <Button>  
          <div style={{ display: 'flex', alignItems: 'center' }}>
          MORE
          <FiChevronDown style={{ width: "24px", height: "24px", color: "#FFFFFF", paddingLeft: 8 }} />
          </div>
        </Button>
        <OptionContainer>
          <OptionSelector >
            <OptionItem>Renting & Buying</OptionItem>
            <OptionItem>Both</OptionItem>
            <OptionItem>Buying</OptionItem>
            <OptionItem>Renting</OptionItem>
          </OptionSelector>
          </OptionContainer>
      </FilterContainer>
    </Container>
  )
}

export default ListProperties;