import { reaction } from 'mobx';
import { NoticeUIStore } from './NoticeUIStore';
import { NoticeDomainStore } from './NoticeDomainStore';

export class NoticeRootStore {
  ui: NoticeUIStore;
  domain: NoticeDomainStore;
  private disposers: Array<() => void> = [];
  isDisposed = false;
  private initialHighlightSlug: string | null;

  constructor(initialHighlightSlug: string | null = null) {
    this.ui = new NoticeUIStore();
    this.domain = new NoticeDomainStore(this.ui);
    this.initialHighlightSlug = initialHighlightSlug;

    // Reaction 1: Fetch notices when filters change
    this.disposers.push(
      reaction(
        () => ({
          category: this.ui.categoryFilter,
          sort: this.ui.sortFilter,
          page: this.ui.page,
          search: this.ui.searchQuery
        }),
        () => {
          void this.domain.fetchNotices();
        },
        { fireImmediately: true }
      )
    );

    // Reaction 2: Auto-select first item when notices list changes
    this.disposers.push(
      reaction(
        () => this.domain.notices,
        (notices) => {
          if (notices.length > 0) {
            if (this.initialHighlightSlug && notices.some(n => n.slug === this.initialHighlightSlug)) {
              this.ui.setSelectedNotice(this.initialHighlightSlug);
              this.domain.scrollTargetSlug = this.initialHighlightSlug;
              this.initialHighlightSlug = null;
            } else {
              this.ui.setSelectedNotice(notices[0]?.slug ?? null);
            }
          } else {
            this.ui.setSelectedNotice(null);
          }
        },
        { fireImmediately: true }
      )
    );
  }

  dispose(): void {
    this.disposers.forEach(dispose => dispose());
    this.isDisposed = true;
  }
}
