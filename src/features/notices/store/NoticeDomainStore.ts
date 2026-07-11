import { observable, action, computed, runInAction } from 'mobx';
import { noticeService } from '../services/noticeService';
import type { Notice, ParsedNotice } from '../types';
import type { NoticeUIStore } from './NoticeUIStore';

export class NoticeDomainStore {
  @observable accessor notices: ParsedNotice[] = [];
  @observable accessor total = 0;
  @observable accessor limit = 20;
  @observable accessor isLoading = false;
  @observable accessor error: string | null = null;
  @observable accessor scrollTargetSlug: string | null = null;
  uiStore: NoticeUIStore;

  constructor(uiStore: NoticeUIStore) {
    this.uiStore = uiStore;
  }

  @computed
  get categories(): string[] {
    const cats = new Set(this.notices.map(n => n.category));
    return Array.from(cats).filter(Boolean);
  }

  @computed
  get totalPages(): number {
    return Math.ceil(this.total / this.limit);
  }

  @action
  clearScrollTarget(): void {
    this.scrollTargetSlug = null;
  }

  @action
  async fetchNotices(): Promise<void> {
    this.isLoading = true;
    this.error = null;
    try {
      const params: Record<string, string | number> = {
        page: this.uiStore.page,
        limit: this.limit,
      };

      if (this.uiStore.searchQuery) {
        params.search = this.uiStore.searchQuery;
      }
      if (this.uiStore.categoryFilter && this.uiStore.categoryFilter !== 'All Categories') {
        params.category = this.uiStore.categoryFilter;
      }
      if (this.uiStore.yearFilter && this.uiStore.yearFilter !== 'All Years') {
        params.year = this.uiStore.yearFilter;
      }
      if (this.uiStore.sortFilter) {
        params.sort = this.uiStore.sortFilter;
      }

      const response = await noticeService.getNotices(params);
      
      runInAction(() => {
        this.notices = response.data.map((n: Notice): ParsedNotice => {
          const dateObj = new Date(n.publishedAt);
          return {
            ...n,
            displayDay: dateObj.getDate().toString().padStart(2, '0'),
            displayMonth: dateObj.toLocaleString('default', { month: 'short' }).toUpperCase(),
            displayFullDate: dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
            displayTime: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        });
        this.total = response.meta?.total ?? 0;
        this.limit = response.meta?.limit ?? 20;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load notices';
        this.notices = [];
        this.total = 0;
      });
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}
