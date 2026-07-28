import { DashboardAdminDomainStore } from './DashboardAdminDomainStore';

export class DashboardAdminRootStore {
  domain: DashboardAdminDomainStore;

  constructor() {
    this.domain = new DashboardAdminDomainStore();
  }

  dispose(): void {
    // cleanup if needed
  }
}
