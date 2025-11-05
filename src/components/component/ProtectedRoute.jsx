import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Authentication/AuthContext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // if authenticated, render children
  // if ( user) {
  if (true) {
    return children;
  }
  // if not authenticated redirect to login and save intended location
  return <Navigate to="/login" replace state={{ from: location }} />;
};
export default ProtectedRoute;
