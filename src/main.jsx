import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AdminPanel from "./admin/AdminPanel.jsx";
import "./styles.css";

// /admin URL pe Admin Panel dikhao, baaki sab pe Portfolio
const isAdmin = window.location.pathname === "/admin";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {isAdmin ? <AdminPanel /> : <App />}
  </StrictMode>
);
