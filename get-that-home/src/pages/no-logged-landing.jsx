import LandingPage from "./landing-page";
import NoLoggedNavBar from "../components/navBar/noLoggedNavBar";

const NoLogedLanding = () => {
    return ( 
        <div>
            <NoLoggedNavBar/>
            <LandingPage/>
        </div>
     );
}
 
export default NoLogedLanding;