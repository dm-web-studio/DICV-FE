import { action, observable, runInAction } from 'mobx';
import { adminContactService } from '../services/adminContactService';
import type { ContactSubmission } from '../../../shared/api/apiTypes';
import type { AdminContactUIStore } from './AdminContactUIStore';
import { toastStore } from '../../../shared/stores/ToastStore';

export class AdminContactDomainStore {
  @observable accessor contacts: ContactSubmission[] = [];
  @observable accessor total = 0;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;
  @observable accessor isSaving = false;
  @observable accessor isDeleting = false;

  uiStore: AdminContactUIStore;

  constructor(uiStore: AdminContactUIStore) {
    this.uiStore = uiStore;
  }

  @action
  async fetchContacts(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const { data, meta } = await adminContactService.getContactSubmissions({
        page: this.uiStore.page,
        limit: this.uiStore.pageSize,
      });
      runInAction(() => {
        this.contacts = data;
        this.total = meta?.total ?? 0;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load contacts';
      });
    } finally {
      runInAction(() => { this.isLoading = false; });
    }
  }

  @action
  async updateContactStatus(id: string, status: 'unread' | 'read' | 'resolved'): Promise<boolean> {
    this.isSaving = true;
    try {
      await adminContactService.updateContactStatus(id, status);
      await this.fetchContacts(); // Refetch the list to get updated data
      toastStore.show(`Marked as ${status} successfully`, 'success');
      return true;
    } catch (err) {
      console.error('Failed to update status', err);
      toastStore.show('Failed to update status', 'error');
      return false;
    } finally {
      runInAction(() => {
        this.isSaving = false;
      });
    }
  }

  @action
  async deleteContact(id: string): Promise<boolean> {
    this.isDeleting = true;
    try {
      await adminContactService.deleteContactSubmission(id);
      runInAction(() => {
        this.contacts = this.contacts.filter(c => c._id !== id);
        this.total = Math.max(0, this.total - 1);
      });
      toastStore.show('Contact deleted successfully', 'success');
      return true;
    } catch (err) {
      toastStore.show(err instanceof Error ? err.message : 'Failed to delete contact', 'error');
      return false;
    } finally {
      runInAction(() => { this.isDeleting = false; });
    }
  }
}
