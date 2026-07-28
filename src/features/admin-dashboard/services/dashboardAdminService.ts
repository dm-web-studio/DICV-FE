import { apiClient } from '../../../shared/api/apiClient';
import type { AdminDashboardStats } from '../../../shared/api/apiTypes';

export const dashboardAdminService = {
  async getStats(): Promise<{ success: boolean; data: AdminDashboardStats }> {
    const { data } = await apiClient.get<{ success: boolean; data: AdminDashboardStats }>('/admin/dashboard/stats');
    return data;
  }
};
