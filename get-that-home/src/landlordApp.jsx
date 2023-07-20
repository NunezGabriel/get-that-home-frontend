import { BrowserRouter, Routes, Route} from "react-router-dom"
import Form from "./pages/form";
import FormSale from "./pages/form-sale";
import PropertyActive from "./pages/property-actived";
import PropertyClose from "./pages/property-closed";
import PropertEdit from "./pages/property-edit";
import LandlordLanding from "./pages/landlord-landing";

const LandLordApp = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/form" element={<Form/>}/>
                <Route path="/form-sale" element={<FormSale/>}/>
                <Route path="/property-active" element={<PropertyActive/>}/>
                <Route path="/property-close" element={<PropertyClose/>}/>
                <Route path="/property-edit" element={<PropertEdit/>}/>
                <Route path="/" element={<LandlordLanding/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default LandLordApp;