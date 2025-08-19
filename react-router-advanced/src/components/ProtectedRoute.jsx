import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // your custom hook

function ProtectedRoute({ children }) {
  // Try to use real authentication context
  const { user } = useAuth() || {};

  // Fallback simulation (useful for testing if AuthContext not ready)
  const isAuthenticated = user || false; // replace false with `true` to simulate logged-in

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // redirect if not logged in
  }

  return children;
}

export default ProtectedRoute;
