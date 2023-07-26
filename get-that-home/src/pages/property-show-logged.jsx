import styled from '@emotion/styled';
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiArea } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import { Global} from '@emotion/react'
import {AiOutlineHeart} from 'react-icons/ai';
import FooterContent from '../components/footer';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { showProperty } from '../service/properties-service';
import SeekerNavBar from '../components/navBar/seekerNavBar';
import imgProperty from '../assets/property.svg';
import  mapLocation  from '../assets/mappro.svg';

const Container  = styled.div`   
    max-width: 71rem;
    margin: 0 auto;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    flex-wrap: wrap;
`

const PropertyLeft = styled.div`
    width: 51.875rem;
    justify-content: center;
`

const PropertyRigth = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: auto;
    margin: 0 auto;
`

// container Image

const PropertyImage = styled.div`
max-width: 51.875rem;
height: 24rem;
display: flex;
justify-content: center;
overflow: hidden;

img {
    max-width: 100%;
    width: 100%;
}
`

// Characteristics - location - price

const Characteristics = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const LocationProperty = styled.div`
    min-width: 37.437rem;
    color: var(--dark-gray, #373737);
    font-family: Montserrat;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; /* 133.333% */
    letter-spacing: 0.01563rem;
    margin: 0;

    h4{
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }
    
    p{
    color: var(--gray, #616161);
    font-family: Montserrat;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
    }

    `
const PriceProperty = styled.div`
    text-align: right;
    color: var(--dark-gray, #373737);
    /* Headline4 */
    font-family: Montserrat;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem; /* 133.333% */
    letter-spacing: 0.01563rem;

    h3{
        display: flex;
        align-items: center;
        gap: 0.9rem;
        font-size: 2.25rem;
        margin-bottom: 0.5rem;
    }

    p{
        color: var(--gray, #616161);
        /* Headline6 */
        font-family: Montserrat;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.75rem; /* 140% */
        letter-spacing: 0.00938rem;
    }

    svg{
        font-size: 3rem;
    }
`

// Details Property

const DetailsProperty = styled.div`
    max-width: 51.875rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #BF5F82;
    border-top: 1px solid #BF5F82;

`

const Info = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--gray, #616161);
    /* Headline5 */
    font-family: Montserrat;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;

    svg{
        font-size: 2rem;
        color: #616161
    }

`

// About Property

const AboutProperty = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--dark-gray, #373737);
    /* Body1 */
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03125rem;
`
// Location Property

const Location = styled.div`
    height: 47.5rem;
    display: flex;
    flex-direction: column;

    p{
        color: var(--dark-gray, #373737);
        /* Body1 */
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5rem; /* 150% */
        letter-spacing: 0.03125rem;
    }
`

const ContainerMap = styled.div`
height: 47.5rem;
display: flex;
justify-content: left;

// iframe {
//     width: 100%;
//     height: 100%;
// }
`

const BoxLogin = styled.div`
    margin: 50px auto;
    width: 14.125rem;
    height: 11.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;

    a{
        width: 80%;
        font-family: Inter;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1.5rem; /* 171.429% */
        letter-spacing: 0.07813rem;
        text-transform: uppercase;
        text-decoration: none;
        background-color: #F48FB1;
        color: #FFFFFF;
        margin: 0 auto;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
    }
`

const BoxFavorites = styled.div`
    display: flex;
    flex-direction: column;
    
    a{
        font-size: 1.875rem;
        background: none;
        color: #616161;
        padding: 0;
    }

    p{
        margin-top: 0;
    }
`

function PropertShowLogged(){

    const {id} = useParams();
    // console.log(id)
  
    const [property, setProperty] = useState(null)
  
    useEffect(() => {
      showProperty(id).then(setProperty).catch(console.log)
    },[id])

    return(

        <>
        <Global styles={`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400&family=Montserrat&display=swap');

          h2{
            color: #BF5F82;
            font-family: Montserrat;
            font-style: normal;
            line-height: 1.75rem; /* 140% */
            letter-spacing: 0.00938rem;
          }

        `}/>
        <SeekerNavBar/>     
        <Container>
            <PropertyLeft>

                {/* Container de la imagen */}
                <PropertyImage>
                    <img src={imgProperty} alt="" />
                </PropertyImage>

                {/* Container de las caracteristicas */}
                <Characteristics>
                <LocationProperty>
                <h4>{property?.address}</h4>
                <p>{property?.address}</p>
                </LocationProperty>

                <PriceProperty>
                    <h3>
                        <RiMoneyDollarCircleLine />
                        {property?.price}
                    </h3>
                    <p>{property?.montly_rent}</p>
                    </PriceProperty>
                </Characteristics>


                {/* Container de los detalles */}
                <DetailsProperty>

                    <Info>
                        <BiBed />
                        <h4>{property?.bedrooms} bedrooms</h4>
                    </Info>

                    <Info>
                        <BiBath/>
                        <h4>{property?.bathrooms} bathrooms</h4>
                    </Info>

                    <Info>
                        <BiArea />
                        <h4>{property?.area}</h4>
                    </Info>

                    <Info>
                    {property?.pets ? ( 
                    <>
                    <FaPaw
                    style={{ width: "32px", height: "32px", color: "#616161" }} />
                    <h4>Pets allowed</h4>
                    </>
                    ) : null}
                    </Info>

                </DetailsProperty>

                <AboutProperty>
                    <h2>About this property</h2>
                    <p>{property?.about}
                    </p>
                </AboutProperty>

                <Location>
                    <h2>Location</h2>
                    <p>Francisco de Paula Ugarriza 27</p>
                    <ContainerMap>
                    <img src={mapLocation} alt="" />
                    </ContainerMap>
                </Location>

            </PropertyLeft>

            <PropertyRigth>
                <BoxLogin>
                        <Link to={"/property-show-contact"} style={{textDecoration: "none"}}>
                            CONTACT ADVERTISER
                        </Link>
                        <BoxFavorites>
                            <a href=""><AiOutlineHeart/></a>
                            <p>Add to Favorites</p>
                        </BoxFavorites>
                </BoxLogin>
            </PropertyRigth>
        </Container>
        <FooterContent/>
        </>
    )
}

export default PropertShowLogged;