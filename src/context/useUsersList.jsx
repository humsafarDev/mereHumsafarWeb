import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useEffect } from "react";

const useUsersList = (baseUrl) => {

  const fetchProfile = async () => {
  
  const  response  = await axios.get(`${baseUrl}/api/master/users`);
   

    // if (!response.ok) {
    //   throw new Error("Network response was not ok");
    // }



    return response?.data ?? [];
  };

  // ✅ Use TanStack Query
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchProfile,
    // enabled: !!userData?.email && isValidEmail(userData?.email),
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: 1, // retry once on failure
  });

  // Optional navigation on error
  useEffect(() => {
    if (isError) {
      console.error("Failed to fetch user data:", error);
      // nav("/error"); // if you want to redirect
    }
  }, [isError, error]);

  return { data, isLoading, isError, error, refetch };
};

export default useUsersList;
