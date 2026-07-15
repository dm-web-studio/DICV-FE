import { GalleryDomainStore } from './GalleryDomainStore';

export class GalleryRootStore {
  domain: GalleryDomainStore;
  isDisposed = false;

  constructor() {
    this.domain = new GalleryDomainStore();
  }

  dispose(): void {
    this.isDisposed = true;
  }
}
