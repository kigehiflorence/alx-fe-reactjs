import React from "react";
import { Navigate } from "react-router-dom";

// simulate authentication
const isAuthenticated = false; // change to true to allow access

function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
