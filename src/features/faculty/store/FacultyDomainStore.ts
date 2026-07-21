import { observable, action, runInAction } from 'mobx';
import { facultyService } from '../services/facultyService';
import type { Faculty } from '../types';

export class FacultyDomainStore {
  @observable accessor facultyList: Faculty[] = [];
  @observable accessor leadershipList: Faculty[] = [];
  @observable accessor isLoading = false;
  @observable accessor isLoadingLeadership = false;
  @observable accessor error: string | null = null;

  @action
  async fetchAll(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const data = await facultyService.getAll();
      runInAction(() => {
        this.facultyList = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load faculty';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  @action
  async fetchLeadership(): Promise<void> {
    this.isLoadingLeadership = true;
    try {
      const data = await facultyService.getAll({ 
        limit: 3, 
        designation: 'President,Principal,Vice Principal,Vice-Principal' 
      });
      runInAction(() => {
        this.leadershipList = data;
      });
    } catch (err) {
      console.error('Failed to fetch leadership faculty', err);
    } finally {
      runInAction(() => {
        this.isLoadingLeadership = false;
      });
    }
  }
}
