// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // If you store a token in context, you can use that instead:
  // const { token } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
