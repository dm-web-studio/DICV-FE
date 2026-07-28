import { observable, action, computed, runInAction } from 'mobx';
import type { Faculty } from '../../../shared/api/apiTypes';
import { facultyAdminService } from '../services/facultyAdminService';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { FacultyAdminUIStore } from './FacultyAdminUIStore';
import { cloudinaryUploadService } from '../../../shared/services/cloudinaryUploadService';

const UPLOAD_FOLDER = 'dicv/faculty';

export class FacultyAdminDomainStore {
  @observable accessor facultyList: Faculty[] = [];
  @observable accessor isLoading = false;
  @observable accessor isSubmitting = false;
  @observable accessor uploadProgress: number | null = null;

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
  async createFaculty(payload: Record<string, any>, file?: File): Promise<void> {
    this.isSubmitting = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.photoUrl = secure_url;
        payload.photoPublicId = public_id;
      }
      await facultyAdminService.create(payload);
      await this.fetchFaculty();
      toastStore.show('Faculty created successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to create faculty', 'error');
      throw err;
    } finally {
      runInAction(() => { 
        this.isSubmitting = false; 
        this.uploadProgress = null;
      });
    }
  }

  @action
  async updateFaculty(id: string, payload: Record<string, any>, file?: File): Promise<void> {
    this.isSubmitting = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.photoUrl = secure_url;
        payload.photoPublicId = public_id;
      }
      await facultyAdminService.update(id, payload);
      await this.fetchFaculty();
      toastStore.show('Faculty updated successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to update faculty', 'error');
      throw err;
    } finally {
      runInAction(() => { 
        this.isSubmitting = false; 
        this.uploadProgress = null;
      });
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
