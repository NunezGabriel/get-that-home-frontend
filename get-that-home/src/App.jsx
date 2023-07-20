import UnauthenticatedApp from "./UnauthenticatedApp";
import LandlordPage from "./pages/landlord-landing";
import SeekerPage from "./pages/seeker-landing";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();

  console.log(user);
  return (
    <div>
      {user ? (
        user.role === "Landlord" ? (
          <LandlordPage />
        ) : (
          <SeekerPage />
        )
      ) : (
        <UnauthenticatedApp />
      )}
    </div>
  );
}

export default App;
