import SeekerNavBar from "../components/navBar/seekerNavBar";
import ListProperties from "./list-properties";
import { useState, useEffect } from "react";
import { getProperties } from "../service/properties-service";
import RentalCard from "../components/rental-card";
import FooterContent from "../components/footer";
import { ContainerCards } from "./list-not-logged";
import { Link } from "react-router-dom";
const ListSeeker = () => {
    const [properties, setProperties] = useState(null);

    useEffect(() => {
      getProperties().then(setProperties).catch(console.log);
    }, []);
    console.log(properties);
  
    return (
      <div>
        <SeekerNavBar /> 
        <ListProperties />
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "50px" }}>
          <ContainerCards>
            {properties?.map((product) => {
              return (
                <Link to={"/property-show-logged"} style={{textDecoration: "none"}}>
                  <RentalCard key={product.id} {...product}></RentalCard>;
                </Link> 
              );
            })}
          </ContainerCards>
        </div>
        <FooterContent />
      </div>
    );
}
 
export default ListSeeker;