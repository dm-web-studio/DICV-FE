import { observable, action, computed, runInAction } from 'mobx';
import { adminGalleryService } from '../services/adminGalleryService';
import type { GalleryAlbum, GalleryImage } from '../types';
import type { AdminGalleryUIStore } from './AdminGalleryUIStore';
import { toastStore } from '../../../shared/stores/ToastStore';
import { cloudinaryUploadService } from '../../../shared/services/cloudinaryUploadService';

const COVERS_UPLOAD_FOLDER = 'dicv/gallery-covers';
const PHOTOS_UPLOAD_FOLDER = 'dicv/gallery';

export class AdminGalleryDomainStore {
  @observable accessor albums: GalleryAlbum[] = [];
  @observable accessor photos: GalleryImage[] = [];
  @observable accessor isAlbumsLoading = false;
  @observable accessor isPhotosLoading = false;
  @observable accessor isSaving = false;
  @observable accessor uploadProgress: number | null = null;
  @observable accessor batchUploadProgress: { current: number, total: number, progress: number } | null = null;
  @observable accessor error: string | null = null;

  private uiStore: AdminGalleryUIStore;

  constructor(uiStore: AdminGalleryUIStore) {
    this.uiStore = uiStore;
  }

  @computed
  get filteredAlbums(): GalleryAlbum[] {
    const q = this.uiStore.albumSearchQuery.toLowerCase();
    if (!q) return this.albums;
    return this.albums.filter((a) => a.name.toLowerCase().includes(q));
  }

  @computed
  get selectedAlbum(): GalleryAlbum | null {
    if (!this.uiStore.selectedAlbumSlug) return null;
    return this.albums.find(a => a.slug === this.uiStore.selectedAlbumSlug) || null;
  }

  @action
  async fetchAlbums(): Promise<void> {
    this.isAlbumsLoading = true;
    this.error = null;
    try {
      const { data } = await adminGalleryService.getAlbums();
      runInAction(() => {
        this.albums = data;
      });
    } catch (err) {
      runInAction(() => {
        this.error = err instanceof Error ? err.message : 'Failed to load albums';
        toastStore.show(this.error, 'error');
      });
    } finally {
      runInAction(() => { this.isAlbumsLoading = false; });
    }
  }

  @action
  async fetchPhotos(albumId: string): Promise<void> {
    this.isPhotosLoading = true;
    try {
      const { data } = await adminGalleryService.getAlbumPhotos(albumId, 1, 1000); // Fetch all for admin view
      runInAction(() => {
        this.photos = data;
      });
    } catch (err) {
      runInAction(() => {
        toastStore.show('Failed to load photos', 'error');
      });
    } finally {
      runInAction(() => { this.isPhotosLoading = false; });
    }
  }

  @action
  async createAlbum(payload: Record<string, any>, file?: File): Promise<boolean> {
    this.isSaving = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          COVERS_UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.coverImageUrl = secure_url;
        payload.coverImagePublicId = public_id;
      }
      await adminGalleryService.createAlbum(payload as any);
      await this.fetchAlbums();
      toastStore.show('Album created successfully', 'success');
      return true;
    } catch (err) {
      toastStore.show(err instanceof Error ? err.message : 'Failed to create album', 'error');
      return false;
    } finally {
      runInAction(() => { 
        this.isSaving = false; 
        this.uploadProgress = null;
      });
    }
  }

  @action
  async updateAlbum(id: string, payload: Record<string, any>, file?: File): Promise<boolean> {
    this.isSaving = true;
    this.uploadProgress = file ? 0 : null;
    try {
      if (file) {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file,
          COVERS_UPLOAD_FOLDER,
          (progress) => runInAction(() => { this.uploadProgress = progress; })
        );
        payload.coverImageUrl = secure_url;
        payload.coverImagePublicId = public_id;
      }
      await adminGalleryService.updateAlbum(id, payload);
      await this.fetchAlbums();
      toastStore.show('Album updated successfully', 'success');
      return true;
    } catch (err) {
      toastStore.show(err instanceof Error ? err.message : 'Failed to update album', 'error');
      return false;
    } finally {
      runInAction(() => { 
        this.isSaving = false; 
        this.uploadProgress = null;
      });
    }
  }

  @action
  async deleteAlbum(id: string): Promise<boolean> {
    this.isSaving = true;
    try {
      await adminGalleryService.deleteAlbum(id);
      runInAction(() => {
        this.albums = this.albums.filter(a => a._id !== id);
        if (this.selectedAlbum?._id === id) {
          this.uiStore.setSelectedAlbumSlug(null);
        }
      });
      toastStore.show('Album deleted successfully', 'success');
      return true;
    } catch (err) {
      toastStore.show(err instanceof Error ? err.message : 'Failed to delete album', 'error');
      return false;
    } finally {
      runInAction(() => { this.isSaving = false; });
    }
  }

  @action
  async uploadPhotos(albumId: string, files: File[], onProgress?: (fileIndex: number, progress: number) => void): Promise<void> {
    this.isSaving = true;
    this.batchUploadProgress = { current: 0, total: files.length, progress: 0 };
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file) continue;
      
      runInAction(() => {
        if (this.batchUploadProgress) {
          this.batchUploadProgress.current = i + 1;
          this.batchUploadProgress.progress = 0;
        }
      });
      try {
        const { secure_url, public_id } = await cloudinaryUploadService.uploadFile(
          file, 
          PHOTOS_UPLOAD_FOLDER,
          (progress) => {
            runInAction(() => {
              if (this.batchUploadProgress) {
                this.batchUploadProgress.progress = progress;
              }
            });
            onProgress?.(i, progress);
          }
        );
        
        await adminGalleryService.uploadPhoto({
          album: albumId,
          imageUrl: secure_url,
          cloudinaryPublicId: public_id,
        });
        successCount++;
      } catch (err) {
        failCount++;
      }
    }
    
    runInAction(() => { 
      this.isSaving = false;
      this.batchUploadProgress = null;
    });

    if (failCount === 0) {
      toastStore.show(`Successfully uploaded ${successCount} photos`, 'success');
    } else {
      toastStore.show(`Uploaded ${successCount} photos, ${failCount} failed`, 'error');
    }

    if (this.selectedAlbum) {
      await this.fetchPhotos(this.selectedAlbum._id);
      await this.fetchAlbums(); // refresh album photo count
    }
  }

  @action
  async deletePhotos(photoIds: string[]): Promise<boolean> {
    this.isSaving = true;
    
    const results = await Promise.allSettled(
      photoIds.map(id => adminGalleryService.deletePhoto(id))
    );

    const successCount = results.filter(r => r.status === 'fulfilled').length;
    const failCount = results.length - successCount;

    runInAction(() => {
      this.isSaving = false;
      if (successCount > 0 && this.uiStore.selectedAlbumSlug) {
        // Optimistically remove from state
        const deletedIds = new Set(
          photoIds.filter((_, i) => results[i]?.status === 'fulfilled')
        );
        this.photos = this.photos.filter(p => !deletedIds.has(p._id));
        this.fetchAlbums(); // refetch in background to update counts
      }
    });

    if (failCount === 0) {
      toastStore.show(`Successfully deleted ${successCount} photos`, 'success');
      return true;
    } else {
      toastStore.show(`Deleted ${successCount} photos, ${failCount} failed`, 'error');
      return false;
    }
  }
}
