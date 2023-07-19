import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./pages/form"
import FormSale from "./pages/form-sale"
import LandingPage from "./pages/landing-page"
import PropertyNotLogged from "./pages/property-not-logged"
import PropertEdit from "./pages/property-edit"
import PropertShowContact from "./pages/propery-show-contact"
import PropertShowLogged from "./pages/property-show-logged"
import JoinSelect from "./pages/join-select"
import LandlordSignUp from "./pages/lanlord-signup"
import SeekerSignUp from "./pages/seeker-signup"
import ListProperties from "./pages/list-properties"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<Form b_color={"#F48FB1"}/>} />
          <Route path="/form-sale" element={<FormSale b_color={"#F48FB1"}/>} />
          <Route path="/property-detail" element={<PropertyNotLogged/>} />
          <Route path="/property-edit-details" element={<PropertEdit/>} />
          <Route path="/property-show-contact" element={<PropertShowContact/>} />
          <Route path="/property-show-logged" element={<PropertShowLogged/>} />
          <Route path="/join-select" element={<JoinSelect/>} />
          <Route path="/landlord-signup" element={<LandlordSignUp/>} />
          <Route path="/seeker-signup" element={<SeekerSignUp/>} />
          <Route path="/list-properties" element={<ListProperties/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App