import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { RiBuildingLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import PhotoDeparment from "../assets/home-img/home-1.svg";
import { Link, useParams } from "react-router-dom";

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
  width: 300px;
  height: 200px;
  flex-shrink: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const RentalChar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  margin: 8px;
  position: relative;
`;

const RentPrice = styled.p`
  ${typography.head.sm}
  font-weight: 400;
  color: #373737;
  margin: 0px;
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
  right: 8px;
`;

function SeekerRentalCard(property) {
  // console.log(property.id)

  return (
    <PropertyCard>
      <Link to={`/property-show-logged/${property.id}`}>
        <RentalImg src={PhotoDeparment} alt="Home Pic" />
      </Link>
      <RentalChar>
        <RiMoneyDollarCircleLine
          style={{ width: "32px", height: "26.67px", color: "#373737" }}
        />
        <RentPrice>{property.price}</RentPrice>
        <ZCont>
          <RiBuildingLine
            style={{ width: "24px", height: "32px", color: "#616161" }}
          />
          <PropertyType>{property.property_type}</PropertyType>
        </ZCont>
      </RentalChar>
      <AddressChar>
        <Address>{property.address}</Address>
      </AddressChar>
      <RentalFeatures>
        <ACont>
          <BiBed style={{ width: "24px", height: "24px", color: "#616161" }} />
          <Bedrooms>{property.bedrooms}</Bedrooms>
        </ACont>
        <BCont>
          <BiBath style={{ width: "24px", height: "24px", color: "#616161" }} />
          <Bathrooms>{property.bathrooms}</Bathrooms>
        </BCont>
        <CCont>
          <BiArea style={{ width: "24px", height: "24px", color: "#616161" }} />
          <Area>{property.area}</Area>
        </CCont>
        <MdOutlinePets
          style={{ width: "24px", height: "24px", color: "#616161" }}
        />
      </RentalFeatures>
    </PropertyCard>
  );
}

export default SeekerRentalCard;
