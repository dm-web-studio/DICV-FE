import { apiClient } from '../../../shared/api/apiClient';
import type { ApiSuccess } from '../../../shared/api/types';
import type { Faculty } from '../types';

export const facultyService = {
  async getAll(): Promise<Faculty[]> {
    const { data } = await apiClient.get<ApiSuccess<Faculty[]>>('/faculty');
    return data.data;
  },
};
