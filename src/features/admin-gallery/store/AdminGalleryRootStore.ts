import { reaction } from 'mobx';
import { AdminGalleryUIStore } from './AdminGalleryUIStore';
import { AdminGalleryDomainStore } from './AdminGalleryDomainStore';

export class AdminGalleryRootStore {
  ui: AdminGalleryUIStore;
  domain: AdminGalleryDomainStore;
  private disposers: (() => void)[] = [];
  isDisposed = false;

  constructor() {
    this.ui = new AdminGalleryUIStore();
    this.domain = new AdminGalleryDomainStore(this.ui);

    // Initial fetch of albums
    void this.domain.fetchAlbums();

    // Reaction: Auto-select first album
    this.disposers.push(
      reaction(
        () => this.domain.filteredAlbums,
        (albums) => {
          if (albums.length > 0) {
            if (!this.ui.selectedAlbumSlug || !albums.some(a => a.slug === this.ui.selectedAlbumSlug)) {
              this.ui.setSelectedAlbumSlug(albums[0]!.slug);
            }
          } else {
            this.ui.setSelectedAlbumSlug(null);
          }
        },
        { fireImmediately: true }
      )
    );

    // Reaction: Fetch photos when selected album changes
    this.disposers.push(
      reaction(
        () => this.domain.selectedAlbum,
        (album) => {
          if (album) {
            void this.domain.fetchPhotos(album._id);
          } else {
            this.domain.photos = [];
          }
        },
        { fireImmediately: true }
      )
    );
  }

  dispose(): void {
    this.disposers.forEach((d) => d());
    this.isDisposed = true;
  }
}
