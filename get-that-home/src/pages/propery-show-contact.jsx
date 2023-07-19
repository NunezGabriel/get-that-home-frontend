import styled from '@emotion/styled';
import { BiBed } from 'react-icons/bi';
import { BiBath } from 'react-icons/bi';
import { BiArea } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';
import {RiMoneyDollarCircleLine} from 'react-icons/ri';
import { Global} from '@emotion/react'




import imgProperty from '../assets/property.svg';
import  mapLocation  from '../assets/mappro.svg';
import FooterContent from '../components/footer';

const Container  = styled.div
`   
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
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    letter-spacing: 0.01563rem;

    p{
        margin: 0;
    }

    h5{
        margin :0;
        color: #F48FB1;
    }
`

function PropertShowContact(){
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
        <Container>
            <PropertyLeft>

                {/* Container de la imagen */}
                <PropertyImage>
                    <img src={imgProperty} alt="" />
                </PropertyImage>

                {/* Container de las caracteristicas */}
                <Characteristics>
                    <LocationProperty>
                        <h4>Francisco de Paula Ugarriza 27</h4>
                        <p>Miraflores , Lima</p>
                    </LocationProperty>

                    <PriceProperty>
                        <h3><RiMoneyDollarCircleLine/>3,000</h3>
                        <p>+100</p>
                    </PriceProperty>
                </Characteristics>


                {/* Container de los detalles */}
                <DetailsProperty>

                    <Info>
                        <BiBed />
                        <h4>4 bedrooms</h4>
                    </Info>

                    <Info>
                        <BiBath/>
                        <h4>2 bathrooms</h4>
                    </Info>

                    <Info>
                        <BiArea />
                        <h4>180 m2</h4>
                    </Info>

                    <Info>
                        <FaPaw />
                        <h4>Pets allowed</h4>
                    </Info>

                </DetailsProperty>

                <AboutProperty>
                    <h2>About this property</h2>
                    <p>3 Bedroom/2 Bathroom apartment available for ASAP move-in!</p>
                    <p>Apartment features hardwood floors throughout, virtual doorman,
                    Central AC/heat, dishwasher and a microwave. </p>
                    <p>The kitchen has custom cabinetry and the living room is big enough to fit a dinner table, a couch and a tv set up.</p>
                </AboutProperty>

                <Location>
                    <h2>Location</h2>
                    <p>Francisco de Paula Ugarriza 27</p>
                    <ContainerMap>
                    <img src={mapLocation} alt="" />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15602.629151686477!2d-77.01942798458053!3d-12.135585057709873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e1b4b5a533%3A0xa549043226dcfb18!2sLarcomar!5e0!3m2!1ses-419!2spe!4v1689638002369!5m2!1ses-419!2spe" 
                    width="860" 
                    style={{border:0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    </ContainerMap>
                </Location>

            </PropertyLeft>

            <PropertyRigth>
                <BoxLogin>
                        <h3>Contact information</h3>
                        <h5>Email</h5>
                        <p>dude@greathouse.com</p>
                        <h5>Phone</h5>
                        <p>123-456-7890</p>
                </BoxLogin>
            </PropertyRigth>
        </Container>
        <FooterContent/>
        </>
    )
}

export default PropertShowContact;