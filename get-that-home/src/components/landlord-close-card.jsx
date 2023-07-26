import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { RiBuildingLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine, RiDeleteBin5Fill } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";
import PhotoDeparment from "../assets/images/Photo1.svg";
import { Link } from "react-router-dom";
import { BsBoxArrowUp } from "react-icons/bs";
import { BASE_URI } from "../config";
import { RiCoinsLine } from "react-icons/ri";

const PropertyCard = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 300px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #616161;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;
const FootOptionsContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #bf5f82;
`;
const FootOption = styled.div`
  width: 94px;
  height: 32px;
  padding: 8px;
  gap: 8px;
  display: flex;
  color: var(--white, #fff);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
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

const ConteinerIcon = styled.div`
  display: flex;
  position: relative;
  gap: 4px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  height: 28px;
  top: -207px;
  left: 174px;
  width: 110px;
  background: #f48fb1;
  border-top-right-radius: 8px;
`;

function LandlordCloseCard(property) {

  const handleRestoreClick = async () => {
    try {
      const response = await fetch(`${BASE_URI}/properties/${property.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: true }), // Cambia 'status' y el valor por los campos necesarios para tu API
      });

      if (!response.ok) {
        throw new Error("Error al cerrar la propiedad");
      } else {
        console.log("exitooo");
      }

      // Hacer algo con la respuesta si es necesario
    } catch (error) {
      console.error(error);
    }
    // navigate("/property-active")
  };
  const handleDeleteClick = async () => {
    try {
      const response = await fetch(`${BASE_URI}/properties/${property.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la propiedad");
      } else {
        console.log("Propiedad eliminada exitosamente");
        // Aquí podrías realizar alguna acción adicional si lo necesitas
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PropertyCard>
      <Link
        to={`/property-detail/${property.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <RentalImg src={PhotoDeparment} alt="Home Pic" />
        {property.operation_type === "Rent" ? (
          <ConteinerIcon>
            <RiCoinsLine size={"20px"} color="white" />
            <p>For Rental</p>
          </ConteinerIcon>
        ) : (
          <ConteinerIcon style={{ background: " #BF5F82" }}>
            <RiMoneyDollarCircleLine size={"20px"} color="white" />
            <p>For Sale </p>
          </ConteinerIcon>
        )}
      </Link>
      <RentalChar>
        <RiMoneyDollarCircleLine
          style={{ width: "32px", height: "26.67px", color: "#373737" }}
        />
        <RentPrice>{property.price? property.price : property.montly_rent}</RentPrice>
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
        {property.pets ? ( 
        <MdOutlinePets
          style={{ width: "24px", height: "24px", color: "#616161" }} />
        ) : null}
      </RentalFeatures>
      <FootOptionsContainer>
        <FootOption
          onClick={() => {
            handleRestoreClick();
          }}
        >
          <BsBoxArrowUp fontSize={20} />
          <p>restore</p>
        </FootOption>
        <FootOption
          onClick={() => {
            handleDeleteClick();
          }}
        >
          <RiDeleteBin5Fill fontSize={20} />
          <p>delete</p>
        </FootOption>
      </FootOptionsContainer>
    </PropertyCard>
  );
}

export default LandlordCloseCard;
