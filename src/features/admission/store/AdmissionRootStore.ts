import { AdmissionDomainStore } from './AdmissionDomainStore';

export class AdmissionRootStore {
  domain: AdmissionDomainStore;

  constructor() {
    this.domain = new AdmissionDomainStore();
  }

  dispose(): void {
    // No reactions to dispose currently
  }
}
