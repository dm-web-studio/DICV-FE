import { reaction } from 'mobx';
import { AdminContactUIStore } from './AdminContactUIStore';
import { AdminContactDomainStore } from './AdminContactDomainStore';

export class AdminContactRootStore {
  ui: AdminContactUIStore;
  domain: AdminContactDomainStore;
  private disposers: Array<() => void> = [];

  constructor() {
    this.ui = new AdminContactUIStore();
    this.domain = new AdminContactDomainStore(this.ui);
  }

  init(): void {
    if (this.disposers.length > 0) return;
    
    // Fetch contacts when page or pageSize changes
    this.disposers.push(
      reaction(
        () => [this.ui.page, this.ui.pageSize] as const,
        () => {
          void this.domain.fetchContacts();
        },
        { fireImmediately: true }
      )
    );
  }

  dispose(): void {
    this.disposers.forEach(dispose => dispose());
    this.disposers = [];
  }
}
