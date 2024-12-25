import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // In a real-world scenario, you'd have more robust authentication check
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Redirect to sign-in if not authenticated
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoute;