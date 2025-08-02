import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import axiosInstance from "../utils/axiosInstance";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const validateToken = async () => {
      if (!accessToken) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const res = await axiosInstance.post("/api/auth/validate", {
          token: accessToken,
        });

        if (res.status === 200 && res.data?.valid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    validateToken();
  }, [accessToken]);

  if (isLoading) {
    return <div>Loading...</div>; // or a spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
