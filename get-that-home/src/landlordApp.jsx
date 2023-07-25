import { Routes, Route } from "react-router-dom";
import Form from "./pages/form";
import FormSale from "./pages/form-sale";
import PropertyActive from "./pages/property-actived";
import PropertyClose from "./pages/property-closed";
import LandlordLanding from "./pages/landlord-landing";
import ProfilePage from "./pages/profile-page";
import LandlordProperties from "./pages/list-landlord";
import PropertEdit from "./pages/property-edit";
import EditSale from "./pages/edit-sale";
import EditRent from "./pages/edit-rent";

const LandLordApp = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/form-sale" element={<FormSale />} />
      <Route path="/property-active" element={<PropertyActive />} />
      <Route path="/property-close" element={<PropertyClose />} />
      <Route path="/property-detail/:id" element={<PropertEdit />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/landlord-properties" element={<LandlordProperties />} />
      <Route path="/edit-sale/:id" element={<EditSale />} />
      <Route path="/edit-rent/:id" element={<EditRent />} />
      <Route path="/" element={<LandlordLanding />} />
    </Routes>
  );
};

export default LandLordApp;
