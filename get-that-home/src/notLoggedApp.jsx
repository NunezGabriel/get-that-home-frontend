import { Routes, Route } from "react-router-dom";
import JoinSelect from "./pages/join-select";
import LandlordSignUp from "./pages/lanlord-signup";
import PropertyNotLogged from "./pages/property-not-logged";
import SeekerSignUp from "./pages/seeker-signup";
import NoLogedLanding from "./pages/no-logged-landing";
import LoginPage from "./pages/login-page";
import HomePageNoLogin from "./pages/no-logged-landing";
import FindHome from "./pages/list-not-logged";
import DetailProperty from "./pages/property-edit";

const NotLoggedApp = () => {
  return (
    <Routes>
      <Route path="/join-select" element={<JoinSelect />} />
      <Route path="/landlord-signup" element={<LandlordSignUp />} />
      <Route path="/property-not-logged/:id" element={<PropertyNotLogged />} />
      <Route path="/seeker-signup" element={<SeekerSignUp />} />
      <Route path="/find-home" element={<FindHome />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="home" element={<HomePageNoLogin />} />
      <Route path="/" element={<NoLogedLanding />} />
      <Route path="/detail-property" element={<DetailProperty />} />
    </Routes>
  );
};

export default NotLoggedApp;
