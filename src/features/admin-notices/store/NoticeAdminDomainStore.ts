import { action, computed, observable, runInAction } from 'mobx';
import axios from 'axios';
import { noticeAdminService } from '../services/noticeAdminService';
import { toastStore } from '../../../shared/stores/ToastStore';
import type { NoticeAdminUIStore } from './NoticeAdminUIStore';
import type { Notice } from '../../../shared/api/apiTypes';
import { cloudinaryUploadService } from '../../../shared/services/cloudinaryUploadService';

const UPLOAD_FOLDER = 'dicv/notices';

export class NoticeAdminDomainStore {
  @observable accessor notices: Notice[] = [];
  @observable accessor total: number = 0;
  @observable accessor pinnedCount: number = 0;
  @observable accessor isLoading: boolean = false;
  @observable accessor isSaving: boolean = false;
  @observable accessor uploadProgress: number | null = null;
  @observable accessor error: string | null = null;

  uiStore: NoticeAdminUIStore;

  constructor(uiStore: NoticeAdminUIStore) {
    this.uiStore = uiStore;
  }

  @computed
  get selectedNotice(): Notice | undefined {
    if (!this.uiStore.selectedId) return undefined;
    return this.notices.find(n => n._id === this.uiStore.selectedId);
  }

  @action
  async fetchList(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const params: Record<string, any> = {
        sort: this.uiStore.sort,
        page: this.uiStore.page,
        limit: this.uiStore.pageSize,
      };
      if (this.uiStore.category) params.category = this.uiStore.category;
      if (this.uiStore.search) params.search = this.uiStore.search;

      const { data, meta } = await noticeAdminService.list(params);
      runInAction(() => {
        this.notices = data;
        this.total = meta?.total ?? 0;
        this.pinnedCount = meta?.pinnedCount ?? 0;
      });
    } catch (err) {
      runInAction(() => {
        this.error = axios.isAxiosError(err) && err.response?.data?.error?.message
          ? err.response.data.error.message
          : err instanceof Error ? err.message : 'Failed to fetch notices';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }

  @action
  async createNotice(payload: Record<string, any>, file?: File): Promise<void> {
    this.isSaving = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.imageUrl = secure_url;
        payload.imagePublicId = public_id;
      }
      await noticeAdminService.create(payload);
      runInAction(() => {
        const isPopup = payload.showAsPopup === true;
        toastStore.show(isPopup ? 'Notice created and set as active popup' : 'Notice created successfully', 'success');
        this.uiStore.closeDrawer();
      });
      await this.fetchList();
    } catch (err) {
      runInAction(() => {
        const msg = axios.isAxiosError(err) && err.response?.data?.error?.message
          ? err.response.data.error.message
          : err instanceof Error ? err.message : 'Failed to create notice';
        toastStore.show(msg, 'error');
        throw err; // Re-throw to handle in component if needed
      });
    } finally {
      runInAction(() => {
        this.isSaving = false;
        this.uploadProgress = null;
      });
    }
  }

  @action
  async updateNotice(id: string, payload: Record<string, any>, file?: File): Promise<void> {
    this.isSaving = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.imageUrl = secure_url;
        payload.imagePublicId = public_id;
      }
      await noticeAdminService.update(id, payload);
      runInAction(() => {
        const isPopup = payload.showAsPopup === true;
        toastStore.show(isPopup ? 'Notice updated and set as active popup' : 'Notice updated successfully', 'success');
        this.uiStore.closeDrawer();
      });
      await this.fetchList();
    } catch (err) {
      runInAction(() => {
        const msg = axios.isAxiosError(err) && err.response?.data?.error?.message
          ? err.response.data.error.message
          : err instanceof Error ? err.message : 'Failed to update notice';
        toastStore.show(msg, 'error');
        throw err;
      });
    } finally {
      runInAction(() => {
        this.isSaving = false;
        this.uploadProgress = null;
      });
    }
  }

  @action
  async deleteNotice(id: string): Promise<void> {
    try {
      await noticeAdminService.remove(id);
      runInAction(() => {
        toastStore.show('Notice deleted', 'success');
      });
      await this.fetchList();
    } catch (err) {
      runInAction(() => {
        const msg = axios.isAxiosError(err) && err.response?.data?.error?.message
          ? err.response.data.error.message
          : err instanceof Error ? err.message : 'Failed to delete notice';
        toastStore.show(msg, 'error');
      });
    }
  }
}
