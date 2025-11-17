import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isValid } from "../Utils/common";

export default function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("mereHumsafarUser");
   

    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (!isValid(parsedUser.firstName)) {
          navigate("/registration", { replace: true });
        } 
        // else {
        //   navigate("/", { replace: true });
        // }
      } catch (e) {
        console.error(e);
        localStorage.removeItem("mereHumsafarUser");
        navigate("/login", { replace: true });
      }
    } else {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return null; // this component only redirects
}
