import UnauthenticatedApp from "./UnauthenticatedApp";
import SeekerPage from "./pages/seeker-landing";
import { useAuth } from "./context/auth-context";
import LandlordPage from "./landlordApp";
import LandLordApp from "./landlordApp";
import NotLoggedApp from "./notLoggedApp";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        user.role === "Landlord" ? (
          <LandLordApp/> // Renderiza LandLordApp si el usuario es "Landlord"
        ) : (
          <SeekerPage /> // Renderiza SeekerPage si el usuario es "Seeker"
        )
      ) : (
        <NotLoggedApp /> // Renderiza UnauthenticatedApp si el usuario no está autenticado
      )}
    </div>
  );
}

export default App;
