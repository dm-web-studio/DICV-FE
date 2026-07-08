export interface User {
  id: string;
  email: string;
  role: string;
  lastLoginAt?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
