import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { Faculty } from '../types';

export interface GetFacultyParams {
  limit?: number;
  designation?: string;
}

export const facultyService = {
  async getAll(params?: GetFacultyParams): Promise<Faculty[]> {
    const { data } = await apiClient.get<ApiSuccess<Faculty[]>>('/faculty', { params });
    return data.data;
  },
};
