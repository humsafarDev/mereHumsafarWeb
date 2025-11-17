import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isValid } from "../screens/Dashboard/chat/lib/utils";

const useProfileImagesList = (baseUrl, userId) => {
  const nav = useNavigate();
//   const userData = JSON.parse(localStorage.getItem("mereHumsafarUser"));

  

  // ✅ Fetch function
  const fetchProfile = async () => {
    if (isValid(userId)) {
      throw new Error("Invalid user id");
    }

    const response = await fetch(`${baseUrl}/api/master/profile-images/user/${userId}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // localStorage.setItem("userData", JSON.stringify(data));
    return data;
  };

  // ✅ Use TanStack Query
  const {
    data: imagesArray,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["profile", userId],
    queryFn: fetchProfile,
    enabled: !!userId && isValid(userId),
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: 1, // retry once on failure
  });

  // Optional navigation on error
  useEffect(() => {
    if (isError) {
      console.error("Failed to fetch user data:", error);
      // nav("/error"); // if you want to redirect
    }
  }, [isError, error, nav]);

  return { imagesArray, isLoading, isError, error, refetch };
};

export default useProfileImagesList;
