import { Route, Routes, Navigate } from "react-router-dom";
import SignUpPage from "./pages/lanlord-signup";
import HomePageNoLogin from "./pages/no-logged-landing";
// import { colors } from "./styles";

export default function UnauthenticatedApp() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePageNoLogin />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
