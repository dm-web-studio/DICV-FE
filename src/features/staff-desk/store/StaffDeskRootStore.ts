import { StaffDeskDomainStore } from './StaffDeskDomainStore';

export class StaffDeskRootStore {
  domain: StaffDeskDomainStore;
  isDisposed = false;

  constructor() {
    this.domain = new StaffDeskDomainStore();
  }

  dispose(): void {
    this.isDisposed = true;
  }
}
