import { BrowserRouter, Routes, Route} from "react-router-dom"
import JoinSelect from "./pages/join-select";
import LandlordSignUp from "./pages/lanlord-signup";
import PropertyNotLogged from "./pages/property-not-logged";
import SeekerSignUp from "./pages/seeker-signup";
import NoLogedLanding from "./pages/no-logged-landing";

const NotLoggedApp = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/join-select" element={<JoinSelect/>}/>
                <Route path="/landlord-signup" element={<LandlordSignUp/>}/>
                <Route path="/property-not-logged" element={<PropertyNotLogged/>}/>
                <Route path="/seeker-signup" element={<SeekerSignUp/>}/>
                <Route path="/" element={<NoLogedLanding/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default NotLoggedApp;