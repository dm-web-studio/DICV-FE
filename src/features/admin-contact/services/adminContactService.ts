import { apiClient } from '../../../shared/api/apiClient';
import type { ContactSubmission } from '../../../shared/api/apiTypes';

export const adminContactService = {
  async getContactSubmissions(params?: { page?: number; limit?: number }) {
    const { data } = await apiClient.get<{
      success: boolean;
      data: ContactSubmission[];
      meta: { page: number; limit: number; total: number };
    }>('/admin/contact-submissions', { params });
    
    return { data: data.data, meta: data.meta };
  },

  async updateContactStatus(id: string, status: 'unread' | 'read' | 'resolved') {
    const { data } = await apiClient.patch<{
      success: boolean;
      data: ContactSubmission;
    }>(`/admin/contact-submissions/${id}`, { status });
    return data.data;
  },

  async deleteContactSubmission(id: string) {
    await apiClient.delete(`/admin/contact-submissions/${id}`);
    return true;
  },
};
