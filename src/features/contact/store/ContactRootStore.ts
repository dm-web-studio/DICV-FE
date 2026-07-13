import { ContactUIStore } from './ContactUIStore';
import { ContactDomainStore } from './ContactDomainStore';

export class ContactRootStore {
  ui: ContactUIStore;
  domain: ContactDomainStore;

  constructor() {
    this.ui = new ContactUIStore();
    this.domain = new ContactDomainStore(this.ui);
  }

  dispose(): void {
    // No ongoing reactions to dispose for this feature
  }
}
