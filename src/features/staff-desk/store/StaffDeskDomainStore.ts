import { observable, action, runInAction } from 'mobx';
import { staffDeskService } from '../services/staffDeskService';
import type { StaffDesk } from '../types';

export class StaffDeskDomainStore {
  @observable accessor staffDesk: StaffDesk | null = null;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action
  async fetchByType(type: 'principal' | 'president' | 'vice-principal'): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await staffDeskService.getByType(type);
      runInAction(() => {
        this.staffDesk = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load staff desk information';
        this.staffDesk = null;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
