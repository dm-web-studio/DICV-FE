import { apiClient } from '../../../shared/api/apiClient';
import type { Faculty } from '../../../shared/api/apiTypes';
import type { ApiSuccess } from '../../../shared/api/types';

export const facultyAdminService = {
  async list(params?: { designation?: string }): Promise<ApiSuccess<Faculty[]>> {
    const { data } = await apiClient.get<ApiSuccess<Faculty[]>>('/faculty', { params });
    return data;
  },
  async create(formData: FormData): Promise<Faculty> {
    const { data } = await apiClient.post<ApiSuccess<Faculty>>('/admin/faculty', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  },
  async update(id: string, formData: FormData): Promise<Faculty> {
    const { data } = await apiClient.put<ApiSuccess<Faculty>>(`/admin/faculty/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  },
  async remove(id: string): Promise<void> {
    await apiClient.delete(`/admin/faculty/${id}`);
  },
};
