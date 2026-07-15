import { observable, action, runInAction } from 'mobx';
import { galleryService } from '../services/galleryService';
import type { Album, GalleryImage } from '../types';

export class GalleryDomainStore {
  @observable accessor albums: Album[] = [];
  @observable accessor images: GalleryImage[] = [];
  @observable accessor totalImages = 0;
  @observable accessor isAlbumsLoading = false;
  @observable accessor isImagesLoading = false;
  @observable accessor error: string | null = null;

  @action
  async fetchAlbums(): Promise<void> {
    this.isAlbumsLoading = true;
    this.error = null;
    try {
      const { data } = await galleryService.getAlbums();
      runInAction(() => {
        this.albums = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load albums';
      });
    } finally {
      runInAction(() => {
        this.isAlbumsLoading = false;
      });
    }
  }

  @action
  async fetchImages(params: { album?: string; page?: number; limit?: number } = {}): Promise<void> {
    this.isImagesLoading = true;
    this.error = null;
    try {
      const { data, meta } = await galleryService.getGallery(params);
      runInAction(() => {
        this.images = data;
        this.totalImages = meta?.total ?? 0;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load images';
      });
    } finally {
      runInAction(() => {
        this.isImagesLoading = false;
      });
    }
  }
}
