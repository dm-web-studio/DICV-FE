import { action, observable } from 'mobx';
import type { ContactSubmission } from '../../../shared/api/apiTypes';

export class AdminContactUIStore {
  @observable accessor page = 1;
  @observable accessor pageSize = 20;
  
  // Dialog State for Viewing Details or Actions (optional, maybe just inline action menus)
  @observable accessor isDeleteDialogOpen = false;
  @observable accessor contactToDelete: ContactSubmission | null = null;
  @observable accessor isViewDialogOpen = false;
  @observable accessor contactToView: ContactSubmission | null = null;
  @observable accessor isSubmitting = false;

  @action
  setPage(page: number): void {
    this.page = page;
  }

  @action
  setPageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.page = 1;
  }

  @action
  openDeleteDialog(contact: ContactSubmission): void {
    this.contactToDelete = contact;
    this.isDeleteDialogOpen = true;
  }

  @action
  closeDeleteDialog(): void {
    this.isDeleteDialogOpen = false;
    this.contactToDelete = null;
  }

  @action
  openViewDialog(contact: ContactSubmission): void {
    this.contactToView = contact;
    this.isViewDialogOpen = true;
  }

  @action
  closeViewDialog(): void {
    this.isViewDialogOpen = false;
    this.contactToView = null;
  }
}
