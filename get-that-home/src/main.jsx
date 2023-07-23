import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/auth-context.jsx";
import { BrowserRouter } from "react-router-dom";
import Fillters from "./context/filter-contex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Fillters>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Fillters>
    </BrowserRouter>
  </React.StrictMode>
);
