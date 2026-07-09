import { observable, action, runInAction } from 'mobx';
import { noticeService } from '../../features/notices/services/noticeService';
import type { Notice } from '../../features/notices/types';

class AnnouncementBarStore {
  @observable accessor isDismissed = false;
  @observable accessor pinnedNotices: Notice[] = [];
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;

  @action
  dismiss(): void {
    this.isDismissed = true;
  }

  @action
  async fetchPinnedNotices(): Promise<void> {
    if (this.isDismissed) return;
    this.isLoading = true;
    this.error = null;
    try {
      const notices = await noticeService.getPinnedNotices();
      runInAction(() => {
        this.pinnedNotices = notices;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load pinned notices';
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export const announcementBarStore = new AnnouncementBarStore();
