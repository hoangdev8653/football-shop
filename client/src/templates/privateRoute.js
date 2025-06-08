import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";

const privateRoute = ({ children }) => {
  const accessToken = getLocalStorage("accessToken");
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default privateRoute;
