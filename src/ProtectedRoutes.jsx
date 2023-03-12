// import { constants } from "buffer";
import { Outlet } from "react-router";

// const useAuth = () => {

// }
export const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet></Outlet> : <RegisterPage />;
};
