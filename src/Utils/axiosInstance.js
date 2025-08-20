
import axios from 'axios';


const axiosInstance = axios.create({

  baseURL: '/api',

});

axiosInstance.defaults.headers.common['skip_zrok_interstitial'] = 'true';

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error("Request error: ", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if ((error.response?.status === 401 || error.response?.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;

      const token = localStorage.getItem('toaccessTokenken');
      if(token) {
        originalRequest.headers.Authorization = `Bearer ${token}`;
window.location.href = '/dashboard';
      } else{
        console.error("No token available. Redirecting to login.");
        // window.location.href = '/login';
      }
      // if (refreshToken) {
      //   try {
      //     delete axiosInstance.defaults.headers.common['Authorization'];

      //     const response = await axios.post(`/baseUrl/api/v1/auth/user/refresh-token?refreshToken=${refreshToken}`,
      //        {
      //       headers: {
      //         'skip_zrok_interstitial': 'true',
      //       },
      //     }
      //     );
      //     if(response?.data?.code == 200){
      //       const newAccessToken = response.data?.body?.accessToken;
      //       if (newAccessToken) {
      //         localStorage.setItem('accessToken', newAccessToken);
  
      //         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
  
      //         return axiosInstance(originalRequest);
      //       }
      //     }else{
      //       // alert("Session expired. Please log in again.");
      //       // localStorage.removeItem("accessToken");
      //       // localStorage.removeItem("refreshToken");
      //       // window.location.href = '/login';
      //     }

      //   } catch (refreshError) {
      //     // alert("Session expired. Please log in again.");
      //     // localStorage.removeItem("accessToken");
      //     // localStorage.removeItem("refreshToken");
      //     // window.location.href = '/login';
      //     return Promise.reject(refreshError);
      //   }
      // } else {
      //   console.error("No refresh token available. Redirecting to login.");
      //  // window.location.href = '/login';
      // }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;