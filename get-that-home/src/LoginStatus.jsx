import SeekerPage from "./pages/seeker-landing";
import { useAuth } from "./context/auth-context";
import LandLordApp from "./landlordApp";

function App() {
  const { user } = useAuth();

  return (
    <div>{user.role === "Landlord" ? <LandLordApp /> : <SeekerPage />}</div>
  );
}

export default App;
