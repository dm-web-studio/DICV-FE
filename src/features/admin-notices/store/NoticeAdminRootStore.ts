import { reaction } from 'mobx';
import { NoticeAdminUIStore } from './NoticeAdminUIStore';
import { NoticeAdminDomainStore } from './NoticeAdminDomainStore';

export class NoticeAdminRootStore {
  ui: NoticeAdminUIStore;
  domain: NoticeAdminDomainStore;
  private disposeReactions: Array<() => void> = [];

  constructor() {
    this.ui = new NoticeAdminUIStore();
    this.domain = new NoticeAdminDomainStore(this.ui);
  }

  init(): void {
    if (this.disposeReactions.length > 0) return;
    this.disposeReactions.push(
      reaction(
        () => [this.ui.category, this.ui.search, this.ui.sort, this.ui.page, this.ui.pageSize] as const,
        () => {
          void this.domain.fetchList();
        },
        { fireImmediately: true }
      )
    );
  }

  dispose(): void {
    this.disposeReactions.forEach((dispose) => dispose());
    this.disposeReactions = [];
  }
}
