import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { isValid } from "../Utils/common";
import useUsersList from "./useUsersList";
import useAuthUser from "./useAuthUser";

export default function AuthRedirect() {
  const navigate = useNavigate();
  const userData = useAuthUser()

  const loginUrl = useLocation().pathname;


  console.log("loginUrl", loginUrl);
  useEffect(() => {
    
    // if(loginUrl !=="/login" && loginUrl !=="/signup" && loginUrl !=="/registration"){
    if (userData && loginUrl !=="/login" ) {
      try {
       
        if (!isValid(userData.firstName)) {
          navigate("/registration", { replace: true });
        } 
        // else {
        //   navigate("/", { replace: true });
        // }
      } catch (e) {
        console.error(e);
        localStorage.removeItem("mereHumsafarUser");
        navigate("/signup", { replace: true });
      }
    }  else if(loginUrl ==="/login"){
//navigate("/login")
    }
    //  else {
    //   navigate("/signup", { replace: true });
    // }
  // }

    //when click on signin go to signin page







  }, [navigate]);

  return null; // this component only redirects
}
