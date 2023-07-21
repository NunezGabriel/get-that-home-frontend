import UnauthenticatedApp from "./UnauthenticatedApp";
import SeekerPage from "./pages/seeker-landing";
import { useAuth } from "./context/auth-context";
import LandlordPage from "./landlordApp";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        user.role === "Landlord" ? (
          <LandlordPage /> // Renderiza LandLordApp si el usuario es "Landlord"
        ) : (
          <SeekerPage /> // Renderiza SeekerPage si el usuario es "Seeker"
        )
      ) : (
        <UnauthenticatedApp /> // Renderiza UnauthenticatedApp si el usuario no está autenticado
      )}
    </div>
  );
}

export default App;
