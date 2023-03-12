import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/HomePage/HomePage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import {
  DeatilPageUrl,
  HomePageUrl,
  LoginPageUrl,
  RegisterPageUrl,
} from "./constants/url";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={LoginPageUrl} element={<LoginPage />} />
        <Route path={RegisterPageUrl} element={<RegisterPage />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
        <Route element={<ProtectedRoutes />}>
          <Route path={DeatilPageUrl} element={<DetailPage />} />
          <Route path={HomePageUrl} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
