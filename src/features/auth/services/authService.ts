import { rawApiClient } from '../../../shared/api/rawApiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { LoginCredentials, AuthResponse, User } from '../types';

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await rawApiClient.post<ApiSuccess<AuthResponse>>('/auth/login', credentials);
    return data.data;
  },
  async refresh(): Promise<string> {
    const { data } = await rawApiClient.post<ApiSuccess<{ token: string }>>('/auth/refresh');
    return data.data.token;
  },
  async logout(): Promise<void> {
    await rawApiClient.post('/auth/logout');
  },
  async getMe(token?: string): Promise<User> {
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
    const { data } = await rawApiClient.get<ApiSuccess<User>>('/auth/me', config);
    return data.data;
  }
};
