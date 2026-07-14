import { AboutDomainStore } from './AboutDomainStore';

export class AboutRootStore {
  domain: AboutDomainStore;

  constructor() {
    this.domain = new AboutDomainStore();
  }

  dispose(): void {
    // cleanup
  }
}
