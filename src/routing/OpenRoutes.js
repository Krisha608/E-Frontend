import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
  const getToken = localStorage.getItem("token");
  console.log(getToken);
  if (!getToken) {
    return children;
  } else {
    return <Navigate to="/" replace={true} />;
  }
};