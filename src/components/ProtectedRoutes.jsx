// import { constants } from "buffer";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../context/UserContextProvider";

export const ProtectedRoutes = () => {
  const { user, isLoadingUser } = useContext(UserContext);
  const isAuth = user != null && !isLoadingUser;
  return isAuth ? <Outlet></Outlet> : <Navigate to="/" />;
};
