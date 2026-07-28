import { apiClient } from '../../../shared/api/apiClient';
import type { Notice } from '../../../shared/api/apiTypes';

interface ApiSuccess<T> {
  success: boolean;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    pinnedCount?: number;
  };
}

export const noticeAdminService = {
  async list(params: { category?: string; search?: string; sort?: string; page?: number; limit?: number }): Promise<ApiSuccess<Notice[]>> {
    const { data } = await apiClient.get<ApiSuccess<Notice[]>>('/admin/notices', { params });
    return data;
  },
  async create(payload: Record<string, any>): Promise<Notice> {
    const { data } = await apiClient.post<ApiSuccess<Notice>>('/admin/notices', payload);
    return data.data;
  },
  async update(id: string, payload: Record<string, any>): Promise<Notice> {
    const { data } = await apiClient.put<ApiSuccess<Notice>>(`/admin/notices/${id}`, payload);
    return data.data;
  },
  async remove(id: string): Promise<void> {
    await apiClient.delete(`/admin/notices/${id}`);
  },
};
