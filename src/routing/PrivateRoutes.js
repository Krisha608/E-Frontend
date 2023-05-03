import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const getToken = localStorage.getItem("token");
  console.log(getToken);
  if (!getToken) {
    return <Navigate to="/login" replace={true} />;
  } else {
    return children;
  }
};