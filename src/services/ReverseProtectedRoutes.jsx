import { Navigate } from "react-router-dom";

export default function ReverseProtectedRoutes({ children }) {
  const id = localStorage.getItem("userID");

  if (id) return <Navigate to="/" replace />;

  if (!id) return children;
}
