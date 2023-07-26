import LandingPage from "./landing-page";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
// import { useAuth } from "../context/auth-context";
// import { useEffect, useState } from "react";

const LandlordLanding = () => {
    // console.log("I'm here")
    return ( 
        <div>
            <LanlordNavBar/>
            <LandingPage/>
        </div>
     );
}
 
export default LandlordLanding;