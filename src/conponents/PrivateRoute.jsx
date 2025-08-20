import React from "react";
import { Navigate } from "react-router-dom";

import { isValid } from "../Utils/common";

const PrivateRoute = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(true);


  const accessToken = localStorage.getItem("mereHumsafarToken");

  // useEffect(() => {
  //   const validateToken = async () => {
  //     if (!accessToken) {
  //       setIsAuthenticated(false);
  //       setIsLoading(false);
  //       return;
  //     }

  //     try {
  //       const res = await axiosInstance.post("/api/auth/validate", {
  //         token: accessToken,
  //       });

  //       if (res.status === 200 && res.data?.valid) {
  //         setIsAuthenticated(true);
  //       } else {
  //         setIsAuthenticated(false);
  //       }
  //     } catch (error) {
  //       console.error("Token validation failed:", error);
  //       setIsAuthenticated(false);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   validateToken();
  // }, [accessToken]);

//if token is availabel then authenticate 

    

  // if (isLoading) {
  //   return <div>Loading...</div>; // or a spinner
  // }

  return isValid(accessToken) ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
