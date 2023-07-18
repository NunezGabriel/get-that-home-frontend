import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./views/form"
import LandingPage from "./pages/landing-page"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App