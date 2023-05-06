import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./components/context/userContext";
import { RouteProvider } from "./components/context/routeContext";
import { ProfileProvider } from "./components/context/profileContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProfileProvider>
        <RouteProvider>
          <App />
        </RouteProvider>
      </ProfileProvider>
    </UserProvider>
  </React.StrictMode>
);
