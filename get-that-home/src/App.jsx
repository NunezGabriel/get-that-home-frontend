import LandLordApp from "./landlordApp"
import NotLoggedApp from "./notLoggedApp"
import SeekerApp from "./seekerApp"
import { useState } from "react"



function App() {
  const [showApp, setShowApp] = useState("1")

  switch(showApp){
    case "1":
      return <NotLoggedApp />
      break;
    case "2":
      return <LandLordApp />
      break;
    case "3":
      return <SeekerApp />
      break;
    default:
      return <NotLoggedApp />
      break
  }
}

export default App