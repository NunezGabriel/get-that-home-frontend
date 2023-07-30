import { useAuth } from "./context/auth-context";
import NotLoggedApp from "./notLoggedApp";
import LoginStatus from "./LoginStatus";

function App() {
  const { user } = useAuth();

  return <div>{user ? <LoginStatus /> : <NotLoggedApp />}</div>;
}

export default App;
