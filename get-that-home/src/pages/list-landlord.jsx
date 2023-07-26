import styled from "@emotion/styled";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import ListProperties from "./list-properties";
import { useState, useEffect, useContext } from "react";
import { getProperties } from "../service/properties-service";
import LandlordRentalCard from "../components/landlord-rental-card";
import LandlordActiveCard from "../components/landlord-active-card";
import FooterContent from "../components/footer";
import { filterContext } from "../context/filter-contex";
import { useAuth } from "../context/auth-context";

const ContainerCards = styled.div`
  margin: 2rem auto;
  width: 75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
`;

const ListLandLord = () => {
  const { user } = useAuth();
  const [properties, setProperties] = useState(null);
  const {
    min,
    max,
    isChecked,
    isCheckedApartment,
    word,
    beds,
    setBeds,
    setBaths,
    baths,
    type,
  } = useContext(filterContext);
  const [staticProperties, setStaticProperties] = useState([]);
  const [addressProperties, setAddressProperties] = useState([]);

  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
    getProperties().then(setStaticProperties).catch(console.log);
  }, []);

  let filterProperties = properties
    ? properties.filter(
        (product) =>
          product.price >= parseInt(min) && product.price <= parseInt(max)
      )
    : [];

  useEffect(() => {
    if (isChecked) {
      setProperties(
        filterProperties.filter((product) => product.property_type == "Casa")
      );
      filterProperties = properties;
    } else if (isCheckedApartment) {
      setProperties(
        filterProperties.filter(
          (product) => product.property_type == "Apartamento"
        )
      );
      filterProperties = properties;
    } else {
      setProperties(staticProperties);
    }
  }, [isChecked, isCheckedApartment]);

  useEffect(() => {
    // let filteredAddress = filterProperties ? filterProperties.filter(product => product.address.toLowerCase().includes(word.toLowerCase())) : [];
    setAddressProperties(
      filterProperties.filter((product) =>
        product.address.toLowerCase().includes(word.toLowerCase())
      )
    );

    // filterProperties = addressProperties;
    if (word != "") {
      setProperties(addressProperties);
    } else {
      setProperties(staticProperties);
    }
  }, [word]);

  useEffect(() => {
    let filteredRooms = staticProperties.filter(
      (product) => product.bedrooms >= beds && product.bathrooms >= baths
    );
    setProperties(filteredRooms);
  }, [beds, baths]);

  useEffect(() => {
    let x;
    if (type == "Sale") {
      setProperties(
        staticProperties.filter((product) => product.operation_type == "Sale")
      );
    } else if (type == "Rent") {
      setProperties(
        staticProperties.filter((product) => product.operation_type == "Rent")
      );
    } else {
      setProperties(staticProperties);
    }
    console.log(x);
  }, [type]);

  return (
    <div>
      <LanlordNavBar />
      <ListProperties />
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {filterProperties?.map((property) =>
            // Verifica si el user_id de la propiedad coincide con el user_id del usuario logueado
            // y renderiza la card correspondiente
            user && user.id === property.user_id ? (
              <LandlordActiveCard
                key={property.id}
                props={property}
                {...property}
                style={{ textDecoration: "none" }}
              />
            ) : (
              <LandlordRentalCard
                key={property.id}
                props={property}
                {...property}
                style={{ textDecoration: "none" }}
              />
            )
          )}
        </ContainerCards>
      </div>
      <FooterContent />
    </div>
  );
};

export default ListLandLord;
