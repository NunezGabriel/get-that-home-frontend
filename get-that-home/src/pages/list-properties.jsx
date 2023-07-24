import { useState } from "react";

import styled from "@emotion/styled";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { typography } from "../styles/typography";
import PriceModal from "../components/modals/price-modal";
import PropertyTypeModal from "../components/modals/property-type-modal";
import BedModal from "../components/modals/beds-modal";
import MoreModal from "../components/modals/more-modal";

import { useContext } from "react";

const FilterContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
  height: 40px;
  width: 100%;
  border-radius: 8px;
  position: relative;
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

const Button = styled.div`
  ${typography.text.sm}
  letter-spacing: 1.25px;
  font-weight: 500;
  width: auto;
  height: 23px;
  border: none;
  background: #f48fb1;
  border-radius: 16px;
  display: flex;
  align-items: center;
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

import { filterContext } from "../context/filter-contex";
function ListProperties() {

  const [modalPrice, setModalPrice] = useState(false);
  const [propertyTypeModal, setPropertyTypeModal] = useState(false);
  const [bedModal, setBedModal] = useState(false);
  const [moreModal, setMoreModal] = useState(false);

  const { handleWord, setType } = useContext(filterContext)

  return (
    <div>
      <FilterContainer>
        
        <SearchContainer>
          <FiSearch style={{ color: "#8E8E8E", width: 20, height: 20 }} />
          <SearchInput placeholder="Search by address" onChange={(e) => handleWord(e)}/>
        </SearchContainer>

        <Button onClick={()=>{setModalPrice(!modalPrice)}}>PRICE</Button>
        {modalPrice && <PriceModal/>}
       
        <Button onClick={()=>{setPropertyTypeModal(!propertyTypeModal)}}>PROPERTY TYPE</Button>
        {propertyTypeModal && <PropertyTypeModal/>}
       
        <Button onClick={()=>{setBedModal(!bedModal)}}>BEDS & BATHS</Button>
        {bedModal && <BedModal/>}
       
        <Button onClick={()=>{setMoreModal(!moreModal)}}>
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
        {moreModal && <MoreModal/>}

        <OptionSelector onChange={(e) => setType(e.target.value)}>
          <OptionItem defaultValue value={''}>Both</OptionItem>
          <OptionItem value={'Sale'}>Sale</OptionItem>
          <OptionItem value={'Rent'}>Rent</OptionItem>
        </OptionSelector>

      </FilterContainer>
    </div>
  );
}

export default ListProperties;
