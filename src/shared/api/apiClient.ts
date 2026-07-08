import axios from 'axios';
import { authStore } from '../../features/auth/store/AuthStore';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g. http://localhost:4000/api/v1
  timeout: 10000,
  withCredentials: true,
});


apiClient.interceptors.request.use((config) => {
  const token = authStore.accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && error.config && !error.config._retry) {
      error.config._retry = true;
      try {
        await authStore.handleUnauthorized();
        error.config.headers.Authorization = `Bearer ${authStore.accessToken}`;
        return apiClient(error.config);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);
