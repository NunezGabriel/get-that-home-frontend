import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./views/form"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
