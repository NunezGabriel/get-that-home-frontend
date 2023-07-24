import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsArrowBarUp } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useState } from "react";
import { createProperty } from "../service/properties-service";

import LanlordNavBar from "../components/navBar/lanlordNavBar";
import MainTitle from "../components/mainTitle";
import Label from "../components/label";
import { Text, SubTitle } from "../components/simpleText";
import SimpleText from "../components/simpleText";
import InputBody from "../components/input";
import {
  MainInput,
  CheckboxInput,
  MainSelect,
  OptionInput,
  TextAreaInput,
} from "../components/input";
import { ChooseButton } from "../components/button";

export const MainContainer = styled.form`
  width: 1200px;
  margin: 0 auto;
  padding: 32px;
  display: grid;
  gap: 16px;
`;

export const SimpleContainer = styled.div`
  display: grid;
  gap: 4px;
`;
export const SimpleFlexContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const FlexContainerL = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
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

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #8e8e8e;
  width: 100px;
  height: 37px;
  overflow: hidden;
`;
export const ImgContainer = styled.div`
  display: inline-flex;
  padding: 8px;
  align-items: flex-start;
  gap: 16px;
  width: 600px;
  height: 136px;
  background: #f5f5f6;
`;

const SwitchOption = styled.div`
  display: flex;
  width: 50px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #f48fb1;
  border-right: 1px solid #8e8e8e;
`;
const SecondSwitchOption = styled.div`
  display: flex;
  width: 50px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;
const Form = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    operation_type: "Sale",
    address: "",
    price: null,
    montly_rent: "",
    maintanance: "",
    property_type: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    pets: "",
    about: "",
    user_id: user.id,
    active: true,
    photo: selectedImage,
  });

  const {
    address,
    montly_rent,
    maintanance,
    property_type,
    bedrooms,
    bathrooms,
    area,
    about,
  } = formData;

  function handleImageChange(event) {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    setSelectedImage(file);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
      setPetsAllowed(checked);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  }

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
              <SimpleText TextColor={"white"}>Rent</SimpleText>
            </SwitchOption>
            <SecondSwitchOption>
              <Link to={"/form-sale"} style={{ textDecoration: "none" }}>
                <SimpleText TextColor={"#616161"}>Sale</SimpleText>
              </Link>
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
          <Label>montly rent</Label>
          <InputBody>
            <RiMoneyDollarCircleLine color="#8E8E8E" />
            <MainInput
              placeholder="2000"
              type="text"
              name="montly_rent"
              value={montly_rent}
              onChange={handleChange}
            />
          </InputBody>
        </SimpleContainer>

        <SimpleContainer>
          <Label>Maintanance</Label>
          <InputBody>
            <RiMoneyDollarCircleLine color="#8E8E8E" />
            <MainInput
              placeholder="100"
              type="text"
              name="maintanance"
              value={maintanance}
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
          <FlexContainerL>
            <CheckboxInput
              type="checkbox"
              name="pets"
              checked={petsAllowed}
              onChange={handleChange}
            />
            <SimpleText>Pets Allowed</SimpleText>
          </FlexContainerL>
          <Text style={{ width: "467px" }}>
            Allowing pets increases the likehood of renters liking the property
            by 9001%. It also makes you a better person.
          </Text>
        </SimpleContainer>

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
                {" "}
                {selectedImage ? selectedImage.name : "No file chosen"}
              </SimpleText>
            </SimpleFlexContainer>
            <Text>Only images, max 5MB</Text>
          </SimpleContainer>
        </SimpleContainer>
        <ImgContainer></ImgContainer>
        <Button>Publish property listing</Button>
      </MainContainer>
    </div>
  );
};

export default Form;
