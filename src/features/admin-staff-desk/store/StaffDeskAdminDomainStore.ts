import { observable, action, runInAction } from 'mobx';
import type { StaffDesk } from '../../../shared/api/apiTypes';
import { staffDeskAdminService } from '../services/staffDeskAdminService';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { StaffDeskAdminUIStore } from './StaffDeskAdminUIStore';
import { cloudinaryUploadService } from '../../../shared/services/cloudinaryUploadService';
import { removeWhiteBackground } from '../../../shared/utils/removeWhiteBackground';

const PHOTO_UPLOAD_FOLDER = 'dicv/staff_photos';
const SIGNATURE_UPLOAD_FOLDER = 'dicv/signatures';

export class StaffDeskAdminDomainStore {
  @observable accessor staffDeskList: StaffDesk[] = [];
  @observable accessor isLoading = false;
  @observable accessor isSubmitting = false;
  @observable accessor uploadProgress: number | null = null;

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
  async updateStaffDesk(type: 'principal' | 'president' | 'vice-principal', payload: Record<string, any>, photoFile?: File, signatureFile?: File): Promise<void> {
    this.isSubmitting = true;
    this.uploadProgress = (photoFile || signatureFile) ? 0 : null;
    try {
      if (photoFile) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          photoFile,
          PHOTO_UPLOAD_FOLDER,
          (progress) => {
            // Very simple progress tracking, assumes equal weight if both are uploaded
            const baseProgress = signatureFile ? progress / 2 : progress;
            runInAction(() => { this.uploadProgress = baseProgress; });
          }
        );
        payload.photoUrl = secure_url;
        payload.photoPublicId = public_id;
      }
      
      if (signatureFile) {
        let processedSignatureFile = signatureFile;
        try {
          processedSignatureFile = await removeWhiteBackground(signatureFile);
        } catch (err) {
          console.error('Failed to remove white background from signature, using original file:', err);
        }

        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          processedSignatureFile,
          SIGNATURE_UPLOAD_FOLDER,
          (progress) => {
            const baseProgress = photoFile ? 50 + (progress / 2) : progress;
            runInAction(() => { this.uploadProgress = baseProgress; });
          }
        );
        payload.signatureUrl = secure_url;
        payload.signaturePublicId = public_id;
      }

      await staffDeskAdminService.update(type, payload);
      await this.fetchStaffDesk();
      toastStore.show('Staff desk updated successfully', 'success');
      this.uiStore.closeDrawer();
    } catch (err) {
      toastStore.show('Failed to update staff desk', 'error');
      throw err;
    } finally {
      runInAction(() => { 
        this.isSubmitting = false; 
        this.uploadProgress = null;
      });
    }
  }
}
