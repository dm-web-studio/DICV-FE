import { observable, action, runInAction } from 'mobx';
import { galleryService } from '../services/galleryService';
import type { Album, GalleryImage } from '../types';

export class GalleryDomainStore {
  @observable accessor albums: Album[] = [];
  @observable accessor albumImages: Record<string, GalleryImage[]> = {};
  @observable accessor imagesMeta: { page: number; limit: number; total: number } | null = null;
  @observable accessor isLoadingAlbums = false;
  @observable accessor hasFetchedAlbums = false;
  @observable accessor isLoadingImages = false;
  @observable accessor error: string | null = null;
  @observable accessor latestImages: GalleryImage[] = [];

  constructor() {}

  getAlbumBySlug(slug: string): Album | undefined {
    return this.albums.find((a) => a.slug === slug);
  }

  @action
  async fetchAlbums(): Promise<void> {
    this.isLoadingAlbums = true;
    this.error = null;
    try {
      const { data } = await galleryService.fetchAlbums();
      runInAction(() => {
        this.albums = data;
        this.hasFetchedAlbums = true;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load albums';
      });
    } finally {
      runInAction(() => {
        this.isLoadingAlbums = false;
      });
    }
  }

  @action
  async fetchAlbumImages(albumId: string, page: number): Promise<void> {
    this.isLoadingImages = true;
    this.error = null;
    try {
      const { data, meta } = await galleryService.fetchAlbumImages(albumId, page);
      runInAction(() => {
        // If it's the first page, replace. Otherwise, append (for infinite scroll / load more)
        if (page === 1) {
          this.albumImages[albumId] = data;
        } else {
          this.albumImages[albumId] = [...(this.albumImages[albumId] || []), ...data];
        }
        this.imagesMeta = meta || null;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load images';
      });
    } finally {
      runInAction(() => {
        this.isLoadingImages = false;
      });
    }
  }

  @action
  async fetchImages(params?: { limit?: number }): Promise<void> {
    try {
      const { data } = await galleryService.fetchAlbumImages(undefined as any, 1, params?.limit || 4); // We'll update the service to handle undefined albumId
      runInAction(() => {
        this.latestImages = data;
      });
    } catch (err) {
      console.error('Failed to load latest images', err);
    }
  }
}
