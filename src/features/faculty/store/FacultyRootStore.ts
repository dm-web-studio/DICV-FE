import { FacultyDomainStore } from './FacultyDomainStore';

export class FacultyRootStore {
  domain: FacultyDomainStore;

  constructor() {
    this.domain = new FacultyDomainStore();
  }

  dispose(): void {
    // any cleanup if necessary
  }
}
