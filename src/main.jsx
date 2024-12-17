import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "typeface-inter";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
