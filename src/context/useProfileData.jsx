import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useProfileData = (baseUrl) => {
  const nav = useNavigate();
  const userData = JSON.parse(localStorage.getItem("mereHumsafarUser"));

  const isValidEmail = (email) =>
    typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Fetch function
  const fetchProfile = async () => {
    if (!isValidEmail(userData?.email)) {
      throw new Error("Invalid email address");
    }

    const response = await fetch(`${baseUrl}/api/master/profile/${userData.email}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    localStorage.setItem("userData", JSON.stringify(data));
    return data;
  };

  // ✅ Use TanStack Query
  const {
    data: profileData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["profile", userData?.email],
    queryFn: fetchProfile,
    enabled: !!userData?.email && isValidEmail(userData?.email),
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

  return { profileData, isLoading, isError, error, refetch };
};

export default useProfileData;
