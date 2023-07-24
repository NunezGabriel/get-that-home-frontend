import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { RiBuildingLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai"
import { MdOutlinePets } from "react-icons/md";
import property1 from "../assets/home-img/home-2.jpg";
import property2 from "../assets/home-img/home-1.jpg";
import property3 from "../assets/home-img/home-3.jpg";

const Container = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
  height: 
`

const PropertyCard = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 353px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  border-bottom: 7px solid #bf5f82;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const RentalImg = styled.img`
  width: 300;
  height: 200px;
  flex-shrink: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const RentalChar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  position: relative;
`;

const RentPrice = styled.p`
  ${typography.head.sm}
  font-weight: 400;
  color: #373737;
  margin: 0;
`;

const PropertyType = styled.p`
  ${typography.text.md}
  font-weight: 400;
  color: #616161;
  margin: 0;
`;

const AddressChar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  padding-bottom: 24px;
`;

const Address = styled.p`
  ${typography.text.md}
  font-weight: 400;
  color: #373737;
  margin: 0;
`;

const RentalFeatures = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 8px 8px 8px;
  gap: 16px;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

const ACont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const Bedrooms = styled.p`
  ${typography.text.md}
  font-weight: 400;
  color: #616161;
  margin: 0;
  padding-left: 4px;
`;

const BCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const Bathrooms = styled.p`
  ${typography.text.md}
  font-weight: 400;
  color: #616161;
  margin: 0;
  padding-left: 4px;
`;

const CCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-items: end;
`;

const Area = styled.p`
  ${typography.text.md}
  font-weight: 400;
  color: #616161;
  margin: 0;
  padding-left: 4px;
`;

const ZCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  position: absolute;
  right: 0;
`

function CardLanding() {
  return (
    <Container>
      <PropertyCard>
        <RentalImg src={property1} alt="p1"/>
        <RentalChar>
          <RiMoneyDollarCircleLine
            style={{ width: "32px", height: "26.67px", color: "#373737" }}
          />
          <RentPrice>25000</RentPrice>
          <ZCont>
          <RiBuildingLine
            style={{ width: "24px", height: "32px", color: "#616161" }}
          />
          <PropertyType>Apartment</PropertyType>
          </ZCont>
        </RentalChar>
        <AddressChar>
          <Address>One Central, building 2, 94 Dubai, United Arab Emirates</Address>
        </AddressChar>
        <RentalFeatures>
          <ACont>
            <BiBed style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bedrooms>4</Bedrooms>
          </ACont>
          <BCont>
            <BiBath style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bathrooms>2</Bathrooms>
          </BCont>
          <CCont>
            <BiArea style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Area>156 m2</Area>
          </CCont>
          <MdOutlinePets
            style={{ width: "24px", height: "24px", color: "#616161" }}
          />
          <AiFillHeart style={{ width: "24px", height: "24px", color: "#F48FB1" }} />
        </RentalFeatures>
      </PropertyCard>

      <PropertyCard>
        <RentalImg src={property2} alt="p2"/>
        <RentalChar>
          <RiMoneyDollarCircleLine
            style={{ width: "32px", height: "26.67px", color: "#373737" }}
          />
          <RentPrice>30000</RentPrice>
          <ZCont>
          <RiBuildingLine
            style={{ width: "24px", height: "32px", color: "#616161" }}
          />
          <PropertyType>Apartment</PropertyType>
          </ZCont>
        </RentalChar>
        <AddressChar>
          <Address>Tonalá 149, Roma Nte., Cuauhtémoc, Ciudad de México</Address>
        </AddressChar>
        <RentalFeatures>
          <ACont>
            <BiBed style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bedrooms>3</Bedrooms>
          </ACont>
          <BCont>
            <BiBath style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bathrooms>2</Bathrooms>
          </BCont>
          <CCont>
            <BiArea style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Area>120 m2</Area>
          </CCont>
          <MdOutlinePets
            style={{ width: "24px", height: "24px", color: "#616161" }}
          />
           <AiFillHeart style={{ width: "24px", height: "24px", color: "#F48FB1" }} />
        </RentalFeatures>
      </PropertyCard>

      <PropertyCard>
        <RentalImg src={property3} alt="p1"/>
        <RentalChar>
          <RiMoneyDollarCircleLine
            style={{ width: "32px", height: "26.67px", color: "#373737" }}
          />
          <RentPrice>48000</RentPrice>
          <ZCont>
          <RiBuildingLine
            style={{ width: "24px", height: "32px", color: "#616161" }}
          />
          <PropertyType>Apartment</PropertyType>
          </ZCont>
        </RentalChar>
        <AddressChar>
          <Address>Behrenstraße 21, 10117 Berlin, Germany</Address>
        </AddressChar>
        <RentalFeatures>
          <ACont>
            <BiBed style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bedrooms>2</Bedrooms>
          </ACont>
          <BCont>
            <BiBath style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Bathrooms>2</Bathrooms>
          </BCont>
          <CCont>
            <BiArea style={{ width: "24px", height: "24px", color: "#616161" }} />
            <Area>107 m2</Area>
          </CCont>
          <MdOutlinePets
            style={{ width: "24px", height: "24px", color: "#616161" }}
          />
           <AiFillHeart style={{ width: "24px", height: "24px", color: "#F48FB1" }} />
        </RentalFeatures>
      </PropertyCard>

    </Container>
  );
}

export default CardLanding;
