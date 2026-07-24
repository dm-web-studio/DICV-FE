import { observable, action, runInAction } from 'mobx';
import { dashboardAdminService } from '../services/dashboardAdminService';
import type { AdminDashboardStats } from '../../../shared/api/apiTypes';

export class DashboardAdminDomainStore {
  @observable accessor stats: AdminDashboardStats | null = null;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action
  async fetchStats(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await dashboardAdminService.getStats();
      runInAction(() => {
        this.stats = response.data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load dashboard stats';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
