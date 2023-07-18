import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./pages/form"
import LandingPage from "./pages/landing-page"
import PropertyNotLogged from "./pages/property-not-logged"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/property-detail" element={<PropertyNotLogged/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App