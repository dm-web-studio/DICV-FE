import { GalleryUIStore } from './GalleryUIStore';
import { GalleryDomainStore } from './GalleryDomainStore';

export class GalleryRootStore {
  ui: GalleryUIStore;
  domain: GalleryDomainStore;

  constructor() {
    this.ui = new GalleryUIStore();
    this.domain = new GalleryDomainStore();
  }

  dispose(): void {
    // Clean up any autoruns or reactions if added in the future
  }
}
