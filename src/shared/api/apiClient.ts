import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. http://localhost:4000/api/v1
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  // const token = authStore.accessToken; // see auth section below
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // attempt one refresh, then log out if that also fails — implemented
      // in the auth feature's service, not duplicated in every service file
      // return authService.handleUnauthorized(error);
    }
    return Promise.reject(error);
  },
);
