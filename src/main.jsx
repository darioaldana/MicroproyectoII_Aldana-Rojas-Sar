import React from "react";
import ReactDOM from "react-dom/client";
// import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import "./index.css";
import { HomeSection } from "./pages/HomeSection/HomeSection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    <HomeSection />
    <DetailPage />
  </React.StrictMode>
);
