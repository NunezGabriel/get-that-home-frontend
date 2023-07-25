import SeekerNavBar from "../components/navBar/seekerNavBar";
import ListProperties from "./list-properties";
import { useState, useEffect, useContext } from "react";
import { getProperties } from "../service/properties-service";
import SeekerRentalCard from "../components/seeker-rental-card";
import FooterContent from "../components/footer";
import { ContainerCards } from "./list-not-logged";
import { filterContext } from "../context/filter-contex";

const ListSeeker = () => {
  const [properties, setProperties] = useState(null);
  const {min, max, isChecked, isCheckedApartment, word, beds,setBeds, setBaths, baths, type} = useContext(filterContext);
  const [staticProperties, setStaticProperties] = useState([])
  const [addressProperties, setAddressProperties] = useState([])


  useEffect(() => {
    getProperties().then(setProperties).catch(console.log);
    getProperties().then(setStaticProperties).catch(console.log);
  }, []);

  let filterProperties = properties ? properties.filter(product => product.price >= parseInt(min) && product.price <= parseInt(max)) : [];

  useEffect(()=>{
    if(isChecked){
      setProperties(filterProperties.filter((product)=>product.property_type == "Casa"))
      filterProperties = properties;
    }else if(isCheckedApartment){
      setProperties(filterProperties.filter((product)=>product.property_type == "Apartamento"))
      filterProperties = properties;
    }
    else{
      setProperties(staticProperties)
    }
  }, [isChecked, isCheckedApartment])

  useEffect(() => {
    // let filteredAddress = filterProperties ? filterProperties.filter(product => product.address.toLowerCase().includes(word.toLowerCase())) : [];
    setAddressProperties(filterProperties.filter(product => product.address.toLowerCase().includes(word.toLowerCase())));

    // filterProperties = addressProperties;
    if(word != '') {
      setProperties(addressProperties)
    } else {
      setProperties(staticProperties)
    }
  }, [word])

  useEffect(() => {
    let filteredRooms = staticProperties.filter((product) => product.bedrooms >= beds && product.bathrooms >= baths);
    setProperties(filteredRooms);
  }, [beds, baths])

  useEffect(() => {
    let x;
    if(type == 'Sale') {
      setProperties(staticProperties.filter(product => product.operation_type == 'Sale'))
      
    } else if ( type == "Rent") {
      setProperties(staticProperties.filter(product => product.operation_type == 'Rent'))

    } else {
      setProperties(staticProperties)
    }
    console.log(x);
  }, [type])

  
    return (
      <div>
        <SeekerNavBar /> 
        <ListProperties />
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
        <ContainerCards>
          {filterProperties?.map((property) => (
            <SeekerRentalCard
            key={property.id}
            props={property}
            {...property} 
            style={{ textDecoration: "none" }}/>
          ))}

        </ContainerCards>
        </div>
        <FooterContent />
      </div>
    );
}
 
export default ListSeeker;