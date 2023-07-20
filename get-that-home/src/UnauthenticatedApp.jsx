import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/lanlord-signup";
// import { colors } from "./styles";

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="/login" replace={true} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Route>
    </Routes>
  );
}
