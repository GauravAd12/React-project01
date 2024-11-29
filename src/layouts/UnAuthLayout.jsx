/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { HOME_ROUTE } from "../constants/routes";

const UnAuthLayout = ({ user }) => {
  return <>{user ? <Navigate to={HOME_ROUTE} /> : <Outlet />} </>;
};

export default UnAuthLayout;
