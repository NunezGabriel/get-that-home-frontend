import styled from "@emotion/styled";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { typography } from "../styles/typography";

const FilterContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #f48fb1;
  width: 224px;
  height: 40px;
  margin-right: 96px;
  padding-left: 8px;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  ${typography.text.md}
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 8px;
  width: 224px;
  height: 24px;
  letter-spacing: 0.25px;
  color: #8e8e8e;
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
  background: #f48fb1;
  border-radius: 16px;
  padding: 8px 16px;
  color: #ffffff;
  align-items: center;
  margin-right: 8px;
  gap: 8px;
`;

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
  border: 2px solid #f48fb1;
  border-radius: 8px;
`;

const OptionItem = styled.option`
  ${typography.text.sm}
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #8e8e8e;
  padding: 8px;
  margin-bottom: 8px;
  list-style: none;
`;

function ListProperties() {
  return (
    <div>
      <FilterContainer>
        <SearchContainer>
          <FiSearch style={{ color: "#8E8E8E", width: 20, height: 20 }} />
          <SearchInput placeholder="Search by address" />
        </SearchContainer>
        <Button>PRICE</Button>
        <Button>PROPERTY TYPE</Button>
        <Button>BEDS & BATHS</Button>
        <Button>
          <div style={{ display: "flex", alignItems: "center" }}>
            MORE
            <FiChevronDown
              style={{
                width: "24px",
                height: "24px",
                color: "#FFFFFF",
                paddingLeft: 8,
              }}
            />
          </div>
        </Button>
        <OptionSelector>
          <OptionItem>Renting & Buying</OptionItem>
          <OptionItem>Both</OptionItem>
          <OptionItem>Buying</OptionItem>
          <OptionItem>Renting</OptionItem>
        </OptionSelector>
      </FilterContainer>
    </div>
  );
}

export default ListProperties;
