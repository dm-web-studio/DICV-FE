import { apiClient } from '../../../shared/api/apiClient';
import type { Faculty } from '../../../shared/api/apiTypes';
import type { ApiSuccess } from '../../../shared/api/types';

export const facultyAdminService = {
  async list(params?: { designation?: string }): Promise<ApiSuccess<Faculty[]>> {
    const { data } = await apiClient.get<ApiSuccess<Faculty[]>>('/faculty', { params });
    return data;
  },
  async create(payload: Record<string, any>): Promise<Faculty> {
    const { data } = await apiClient.post<ApiSuccess<Faculty>>('/admin/faculty', payload);
    return data.data;
  },
  async update(id: string, payload: Record<string, any>): Promise<Faculty> {
    const { data } = await apiClient.put<ApiSuccess<Faculty>>(`/admin/faculty/${id}`, payload);
    return data.data;
  },
  async remove(id: string): Promise<void> {
    await apiClient.delete(`/admin/faculty/${id}`);
  },
};
