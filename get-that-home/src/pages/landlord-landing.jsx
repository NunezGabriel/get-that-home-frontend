import LandingPage from "./landing-page";
import LanlordNavBar from "../components/navBar/lanlordNavBar";
import { useAuth } from "../context/auth-context";
import { useEffect, useState } from "react";

const LandlordLanding = () => {
    const auth = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(auth.user);
        if (auth.user) {
          setLoading(false);
        }
      }, [auth.user]);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    

    console.log("I'm here")
    return ( 
        <div>
            <LanlordNavBar/>
            <LandingPage/>
        </div>
     );
}
 
export default LandlordLanding;