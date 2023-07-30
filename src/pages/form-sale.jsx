import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowBarUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import LanlordNavBar from "../components/navBar/lanlordNavBar";
import MainTitle from "../components/mainTitle";
import Label from "../components/label";
import { Text, SubTitle } from "../components/simpleText";
import SimpleText from "../components/simpleText";
import InputBody from "../components/input";
import { useAuth } from "../context/auth-context";
import FooterContent from "../components/footer";
import {
  MainInput,
  CheckboxInput,
  MainSelect,
  OptionInput,
  TextAreaInput,
} from "../components/input";
import { ChooseButton } from "../components/button";
import {
  MainContainer,
  SimpleContainer,
  SimpleFlexContainer,
  FlexContainerL,
  SwitchContainer,
  ImgContainer,
} from "./form";
import { createProperty } from "../service/properties-service";

const SwitchOption = styled.div`
  display: flex;
  width: 50px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-right: 1px solid #8e8e8e;
`;
const SecondSwitchOption = styled.div`
  display: flex;
  width: 50px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f48fb1;
`;

const Button = styled.button`
  display: flex;
  padding: 16px 24px;
  place-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: #f48fb1;
  width: 275px;
  height: 40px;
  font-size: 18px;
  color: white;
`;

const FormSale = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    operation_type: "Sale",
    address: "",
    price: "",
    montly_rent: null,
    maintanance: null,
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    pets: false,
    about: "",
    user_id: user.id,
    active: true,
    photo: selectedImage,
  });

  const { address, price, property_type, bedrooms, bathrooms, area, about } =
    formData;

  function handleImageChange(event) {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    setSelectedImage(file);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     await createProperty(formData);
  //     console.log(formData);
  //     navigate("/property-active");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   console.log(formData.property_type);
  // }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const formDataToSend = { ...formData };
      formDataToSend.photo = selectedImage; // Agregar la imagen seleccionada al objeto formDataToSend

      await createProperty(formDataToSend);
      console.log(formDataToSend);
      navigate("/property-active");
    } catch (error) {
      console.log(error);
    }
    console.log(selectedImage);
  }
  return (
    <div>
      <LanlordNavBar />
      <MainContainer onSubmit={handleSubmit}>
        <MainTitle>Create a property listing</MainTitle>

        <SimpleContainer>
          <Label>Operation Type</Label>
          <SwitchContainer>
            <SwitchOption>
              <Link to={"/form"} style={{ textDecoration: "none" }}>
                <SimpleText TextColor={"#616161"}>Rent</SimpleText>
              </Link>
            </SwitchOption>
            <SecondSwitchOption>
              <SimpleText TextColor={"white"}>Sale</SimpleText>
            </SecondSwitchOption>
          </SwitchContainer>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Address</Label>
          <InputBody>
            <BiSearch color="#8E8E8E" />
            <MainInput
              placeholder="start typing to autocomplete"
              type="text"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Price</Label>
          <InputBody>
            <RiMoneyDollarCircleLine color="#8E8E8E" />
            <MainInput
              placeholder="2000"
              type="text"
              name="price"
              value={price}
              onChange={handleChange}
            />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Property Type</Label>
          <SimpleFlexContainer>
            <FlexContainerL>
              <CheckboxInput
                type="radio"
                name="property_type"
                checked={property_type === "Apartment"}
                onChange={handleChange}
                value="Apartment"
              />
              <SimpleText>Apartment</SimpleText>
            </FlexContainerL>
            <FlexContainerL>
              <CheckboxInput
                type="radio"
                name="property_type"
                checked={property_type === "House"}
                onChange={handleChange}
                value="House"
              />
              <SimpleText>House</SimpleText>
            </FlexContainerL>
          </SimpleFlexContainer>
        </SimpleContainer>

        <SimpleFlexContainer>
          <SimpleContainer>
            <Label>Bedrooms</Label>
            <MainSelect
              name="bedrooms"
              value={bedrooms}
              onChange={handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </MainSelect>
          </SimpleContainer>

          <SimpleContainer>
            <Label>Bathrooms</Label>
            <MainSelect
              name="bathrooms"
              value={bathrooms}
              onChange={handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </MainSelect>
          </SimpleContainer>

          <SimpleContainer>
            <Label>Area in m2</Label>
            <OptionInput
              type="number"
              placeholder="##"
              name="area"
              value={area}
              onChange={handleChange}
            />
          </SimpleContainer>
        </SimpleFlexContainer>

        <SimpleContainer>
          <Label>About this property</Label>
          <TextAreaInput
            placeholder="My apartment is great because..."
            type="text"
            name="about"
            value={about}
            onChange={handleChange}
          />
          <Text>
            Renters will read this first, so highlight any features or important
            information the apartment has.
          </Text>
        </SimpleContainer>
        <SimpleContainer>
          <SubTitle>Photos</SubTitle>
          <SimpleContainer>
            <Label>Upload as many photos as you wish</Label>
            <SimpleFlexContainer>
              <ChooseButton>
                <BsArrowBarUp fontSize={25} color="white" />
                <label htmlFor="image-upload" style={{ cursor: "pointer" }}>
                  <SimpleText TextColor={"white"}>Choose a file</SimpleText>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </ChooseButton>
              <SimpleText TextColor={"#616161"}>
                {selectedImage ? selectedImage.name : "No file chosen"}
              </SimpleText>
            </SimpleFlexContainer>
            <Text>Only images, max 5MB</Text>
          </SimpleContainer>
        </SimpleContainer>
        <ImgContainer></ImgContainer>
        <Button>Publish property listing</Button>
      </MainContainer>
      <FooterContent/>
    </div>
  );
};

export default FormSale;
