

///use localstrage user data to check auth user 
import { useState, useEffect } from "react";

const useAuthUser = () => {
    const [authUser, setAuthUser] = useState(null);
    
    useEffect(() => {
        const storedUser = localStorage.getItem("mereHumsafarUser");
        if (storedUser) {
        setAuthUser(JSON.parse(storedUser));
        }
    }, []);
    
    return authUser;
    }

export default useAuthUser;