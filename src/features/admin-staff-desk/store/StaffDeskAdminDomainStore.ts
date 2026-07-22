import { observable, action, runInAction } from 'mobx';
import type { StaffDesk } from '../../../shared/api/apiTypes';
import { staffDeskAdminService } from '../services/staffDeskAdminService';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { StaffDeskAdminUIStore } from './StaffDeskAdminUIStore';

export class StaffDeskAdminDomainStore {
  @observable accessor staffDeskList: StaffDesk[] = [];
  @observable accessor isLoading = false;
  @observable accessor isSubmitting = false;

  uiStore: StaffDeskAdminUIStore;

  constructor(uiStore: StaffDeskAdminUIStore) {
    this.uiStore = uiStore;
  }

  @action
  async fetchStaffDesk(): Promise<void> {
    this.isLoading = true;
    try {
      const data = await staffDeskAdminService.list();
      runInAction(() => {
        this.staffDeskList = data;
      });
    } catch (err) {
      toastStore.show('Failed to load staff desk', 'error');
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }

  @action
  async updateStaffDesk(type: 'principal' | 'president' | 'vice-principal', formData: FormData): Promise<void> {
    this.isSubmitting = true;
    try {
      await staffDeskAdminService.update(type, formData);
      await this.fetchStaffDesk();
      toastStore.show('Staff desk updated successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to update staff desk', 'error');
      throw err;
    } finally {
      runInAction(() => { this.isSubmitting = false; });
    }
  }
}
