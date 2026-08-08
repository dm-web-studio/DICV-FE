import { observable, action } from 'mobx';

export type GalleryLayoutMode = 'masonry' | 'grid';

export class GalleryUIStore {
  @observable accessor layoutMode: GalleryLayoutMode = 'grid';
  @observable accessor isLightboxOpen = false;
  @observable accessor activeImageIndex: number | null = null;
  @observable accessor page = 1; // Used for image pagination within an album

  @action
  openLightbox(index: number): void {
    this.activeImageIndex = index;
    this.isLightboxOpen = true;
  }

  @action
  closeLightbox(): void {
    this.isLightboxOpen = false;
    this.activeImageIndex = null;
  }

  @action
  nextImage(totalImages: number): void {
    if (this.activeImageIndex !== null) {
      // Loop back to start if at the end
      this.activeImageIndex = (this.activeImageIndex + 1) % totalImages;
    }
  }

  @action
  prevImage(totalImages: number): void {
    if (this.activeImageIndex !== null) {
      // Loop to end if at the start
      this.activeImageIndex = (this.activeImageIndex - 1 + totalImages) % totalImages;
    }
  }

  @action
  setPage(page: number): void {
    this.page = page;
  }

  @action
  setLayoutMode(mode: GalleryLayoutMode): void {
    this.layoutMode = mode;
  }
}
