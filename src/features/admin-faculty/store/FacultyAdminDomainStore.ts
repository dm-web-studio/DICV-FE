import { observable, action, computed, runInAction } from 'mobx';
import type { Faculty } from '../../../shared/api/apiTypes';
import { facultyAdminService } from '../services/facultyAdminService';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { FacultyAdminUIStore } from './FacultyAdminUIStore';

export class FacultyAdminDomainStore {
  @observable accessor facultyList: Faculty[] = [];
  @observable accessor isLoading = false;
  @observable accessor isSubmitting = false;

  uiStore: FacultyAdminUIStore;

  constructor(uiStore: FacultyAdminUIStore) {
    this.uiStore = uiStore;
  }

  @computed
  get filteredFaculty(): Faculty[] {
    if (!this.uiStore.search) return this.facultyList;
    const lowerSearch = this.uiStore.search.toLowerCase();
    return this.facultyList.filter((f) => 
      f.name.toLowerCase().includes(lowerSearch) || 
      (f.designation && f.designation.toLowerCase().includes(lowerSearch))
    );
  }

  @action
  async fetchFaculty(): Promise<void> {
    this.isLoading = true;
    try {
      const { data } = await facultyAdminService.list();
      runInAction(() => {
        this.facultyList = data;
      });
    } catch (err) {
      toastStore.show('Failed to load faculty', 'error');
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }

  @action
  async createFaculty(formData: FormData): Promise<void> {
    this.isSubmitting = true;
    try {
      await facultyAdminService.create(formData);
      await this.fetchFaculty();
      toastStore.show('Faculty created successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to create faculty', 'error');
      throw err;
    } finally {
      runInAction(() => { this.isSubmitting = false; });
    }
  }

  @action
  async updateFaculty(id: string, formData: FormData): Promise<void> {
    this.isSubmitting = true;
    try {
      await facultyAdminService.update(id, formData);
      await this.fetchFaculty();
      toastStore.show('Faculty updated successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to update faculty', 'error');
      throw err;
    } finally {
      runInAction(() => { this.isSubmitting = false; });
    }
  }

  @action
  async deleteFaculty(id: string): Promise<void> {
    try {
      await facultyAdminService.remove(id);
      await this.fetchFaculty();
      toastStore.show('Faculty deleted successfully', 'success');
    } catch (err) {
      toastStore.show('Failed to delete faculty', 'error');
    }
  }
}
