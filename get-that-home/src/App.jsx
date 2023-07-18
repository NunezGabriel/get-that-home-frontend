import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./pages/form"
import FormSale from "./pages/form-sale"
import LandingPage from "./pages/landing-page"
import PropertyNotLogged from "./pages/property-not-logged"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<Form b_color={"#F48FB1"}/>} />
          <Route path="/form-sale" element={<FormSale b_color={"#F48FB1"}/>} />
          <Route path="/property-detail" element={<PropertyNotLogged/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App