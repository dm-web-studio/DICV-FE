import { observable, action } from 'mobx';
import type { GalleryAlbum } from '../types';

export class AdminGalleryUIStore {
  @observable accessor albumSearchQuery = '';
  @observable accessor selectedAlbumSlug: string | null = null;
  @observable accessor isAddAlbumDialogOpen = false;
  
  // Edit Album Dialog
  @observable accessor isEditAlbumDialogOpen = false;
  @observable accessor draftAlbumName = '';
  @observable accessor draftAlbumDescription = '';
  @observable accessor draftAlbumCoverFile: File | null = null;
  @observable accessor draftAlbumCoverPreview: string | null = null;
  @observable accessor previewPhotoIndex: number | null = null;
  
  @action
  setAlbumSearchQuery(query: string): void {
    this.albumSearchQuery = query;
  }

  @action
  setSelectedAlbumSlug(slug: string | null): void {
    this.selectedAlbumSlug = slug;
  }

  @action
  openAddAlbumDialog(): void {
    this.isAddAlbumDialogOpen = true;
    this.draftAlbumName = '';
    this.draftAlbumDescription = '';
    this.draftAlbumCoverFile = null;
    this.draftAlbumCoverPreview = null;
  }

  @action
  closeAddAlbumDialog(): void {
    this.isAddAlbumDialogOpen = false;
  }

  @action
  openEditAlbumDialog(album: GalleryAlbum): void {
    this.isEditAlbumDialogOpen = true;
    this.draftAlbumName = album.name;
    this.draftAlbumDescription = album.description || '';
    this.draftAlbumCoverFile = null;
    this.draftAlbumCoverPreview = album.coverImageUrl || null;
  }

  @action
  closeEditAlbumDialog(): void {
    this.isEditAlbumDialogOpen = false;
  }

  @action
  setDraftAlbumField(field: 'draftAlbumName' | 'draftAlbumDescription', value: string): void {
    this[field] = value;
  }

  @action
  setDraftAlbumCover(file: File | null, url: string | null): void {
    this.draftAlbumCoverFile = file;
    this.draftAlbumCoverPreview = url;
  }

  @action
  openPhotoPreview(index: number): void {
    this.previewPhotoIndex = index;
  }

  @action
  closePhotoPreview(): void {
    this.previewPhotoIndex = null;
  }

  @action
  nextPhoto(totalPhotos: number): void {
    if (this.previewPhotoIndex !== null) {
      this.previewPhotoIndex = (this.previewPhotoIndex + 1) % totalPhotos;
    }
  }

  @action
  prevPhoto(totalPhotos: number): void {
    if (this.previewPhotoIndex !== null) {
      this.previewPhotoIndex = (this.previewPhotoIndex - 1 + totalPhotos) % totalPhotos;
    }
  }
}
