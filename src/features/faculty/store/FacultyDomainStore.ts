import { observable, action, runInAction } from 'mobx';
import { facultyService } from '../services/facultyService';
import type { Faculty } from '../types';

export class FacultyDomainStore {
  @observable accessor facultyList: Faculty[] = [];
  @observable accessor isLoading = false;
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
}
