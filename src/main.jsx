import React from "react";
import ReactDOM from "react-dom/client";
// import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HomePage } from "./pages/HomePage/HomePage";
import "./index.css";
import { MoviesContextProvider } from "./pages/HomePage/context/MoviesContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesContextProvider>
      <HomePage />
    </MoviesContextProvider>
  </React.StrictMode>,
)
