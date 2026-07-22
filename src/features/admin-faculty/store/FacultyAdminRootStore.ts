import { FacultyAdminUIStore } from './FacultyAdminUIStore';
import { FacultyAdminDomainStore } from './FacultyAdminDomainStore';

export class FacultyAdminRootStore {
  ui: FacultyAdminUIStore;
  domain: FacultyAdminDomainStore;

  constructor() {
    this.ui = new FacultyAdminUIStore();
    this.domain = new FacultyAdminDomainStore(this.ui);
  }

  dispose(): void {
    // any cleanup
  }
}
