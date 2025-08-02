import { create } from "zustand";


import { queryClient } from "../utils/queryClient";
import axiosInstance from "../utils/axiosInstance";


const useAuthStore = create((set) => ({
    user: null,
    accessToken: localStorage.getItem("accessToken") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    checkAuthOnReload: () => {
        // const accessToken = localStorage.getItem("accessToken");
        // const refreshToken = localStorage.getItem("refreshToken");

        // if (accessToken && refreshToken) {
        //     set({ accessToken, refreshToken, isAuthenticated: true });
        // } else {
        //     localStorage.removeItem("accessToken");
        //     localStorage.removeItem("refreshToken");
        //     set({ accessToken: null, refreshToken: null, isAuthenticated: false });
        // }
    },
    login: async (payload) => {
        try {
            const response = await axiosInstance.post('/auth/login', payload);

            // if (response.data.status === "success") {
                // const { accessToken, refreshToken } = response.data.body;
                // set({ accessToken, refreshToken, isAuthenticated: true  });
                // localStorage.setItem("accessToken", accessToken);
                // localStorage.setItem("refreshToken", refreshToken);
            // }

            return response;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    },

    verify: async (payload) => {
        try{
            const response = await axiosInstance.post('/auth/verify', payload);
            if (response?.data?.code === 200 || response?.data?.code === 201) {
             
                const accessToken = response.data.body;
                const refreshToken = response.data.body;
                set({ accessToken, refreshToken, isAuthenticated: true });
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", refreshToken);
            } else {
                alert(response?.data?.message || "Verification failed");
            }
            return response;
        } catch (error) {
            console.error("Verification error:", error);
            alert(error?.response?.data?.message || "Verification failed");
            throw error;
        }
    },

    signup: async (payload) => {
        try {
            const response = await axiosInstance.post('/auth/signup', payload);
            return response;
        } catch (error) {
            alert(error?.response?.data?.message || "Signup failed");
            throw error;
        }
    },

  

    logout: async () => {
        try {
            const response = await axiosInstance.post('/auth/logout')
            if (response?.data?.code == 200 || response?.data?.code == 201) {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                queryClient.clear();
                set({ user: null, accessToken: null, refreshToken: null, isAuthenticated: false });
                return response
            } else {
                alert(response?.data?.message)
            }
        } catch (error) {
            alert(error)
        }
    },

    resendOtp: (number) => {
        try {
            const response = axiosInstance.post(`/auth/resend-otp?mobileNumber=${number}`,)
            return response
        } catch (error) {
            alert(error)
        }
    }
}))

export default useAuthStore;

// 500568683
// Yaseen@123
