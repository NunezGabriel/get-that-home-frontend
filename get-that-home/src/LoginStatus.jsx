import SeekerPage from "./pages/seeker-landing";
import { useAuth } from "./context/auth-context";
import LandLordApp from "./landlordApp";
import SeekerApp from "./seekerApp";

function App() {
  const { user } = useAuth();

  console.log(user.role);
  return (
    <div>{user.role === "Landlord" ? <LandLordApp /> : <SeekerApp />}</div>
  );
}

export default App;
