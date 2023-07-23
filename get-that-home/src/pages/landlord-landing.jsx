import LandingPage from "./landing-page";
import LanlordNavBar from "../components/navBar/lanlordNavBar";

const LandlordLanding = () => {
    console.log("I'm here")
    return ( 
        <div>
            <LanlordNavBar/>
            <LandingPage/>
        </div>
     );
}
 
export default LandlordLanding;