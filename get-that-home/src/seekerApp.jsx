import { BrowserRouter, Routes, Route} from "react-router-dom"
import PropertyFavorites from "./pages/property-favorites";
import PropertyContacted from "./pages/property-contacted";
import PropertShowLogged from "./pages/property-show-logged";
import PropertShowContact from "./pages/propery-show-contact";
import SeekerLanding from "./pages/seeker-landing";

const SeekerApp = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/property-favorites" element={<PropertyFavorites/>}/>
                <Route path="/property-contacted" element={<PropertyContacted/>}/>
                <Route path="/property-show-logged" element={<PropertShowLogged/>}/>
                <Route path="/property-show-contact" element={<PropertShowContact/>}/>
                <Route path="/" element={<SeekerLanding/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default SeekerApp;